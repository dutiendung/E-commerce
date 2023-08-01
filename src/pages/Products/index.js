import {
  faAngleLeft,
  faAngleRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import ReactPaginate from "react-paginate";
import ProductCard from "~/components/ProductCard";
import categoriesService from "~/services/categoriesService";
import productsService from "~/services/productsService";
import styles from "./Products.module.scss";
import ProductsLoading from "./ProductsLoading";
const cx = classNames.bind(styles);
function Products() {
  const [activeTag, setActiveTag] = useState("all");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filters, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "LA - Products";
    productsService.getAll().then((data) => {
      setProducts(data);
      setFilter(data);
      setLoading(false);
    });
    categoriesService.getAll().then((data) => {
      setCategories(data);
      setLoading(false);
    });
  }, []);

  const handleClickTag = (categoryName) => {
    setActiveTag(categoryName);
    filterProduct(categoryName);
  };
  const filterProduct = (categoryName) => {
    if (categoryName === "all") {
      setFilter(products);
    } else {
      const updateFilter = products.filter((x) => x.category === categoryName);
      setFilter(updateFilter);
    }
  };
  const handleChangeSearch = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };
  const searchProduct = (keyWord) => {
    const updateFilter = filters.filter((x) =>
      x.title.toLowerCase().includes(keyWord)
    );
    setFilter(updateFilter);
  };
  const handleClickBtnSearch = () => {
    searchProduct(inputValue);
    setInputValue("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchProduct(inputValue);
      setInputValue("");
      e.target.blur();
    }
  };
  // Paginate

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + 8;
    setCurrentItems(filters.slice(itemOffset, endOffset));
    if (filters.length > 8) {
      setPageCount(Math.ceil(filters.length / 8));
    } else {
      setPageCount(0);
      setItemOffset(0);
    }
  }, [itemOffset, filters]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 8) % filters.length;
    setItemOffset(newOffset);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("grid wide")}>
          <h1 className={cx("title")}>Latest products</h1>
          <div className={cx("search_input")}>
            <input
              type="text"
              onChange={handleChangeSearch}
              value={inputValue}
              onKeyDown={handleKeyDown}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={cx("search_icon")}
              onClick={handleClickBtnSearch}
            />
          </div>
          {loading ? (
            <ProductsLoading />
          ) : (
            <>
              <div className={cx("tag")}>
                <button
                  className={cx(
                    "tag_item",
                    "btn",
                    activeTag === "all" ? "activeTag" : ""
                  )}
                  onClick={() => {
                    handleClickTag("all");
                  }}
                >
                  all
                </button>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={cx(
                      "tag_item",
                      "btn",
                      activeTag === category ? "activeTag" : ""
                    )}
                    onClick={() => {
                      handleClickTag(category);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className={cx("products")}>
                <div className={cx("row")}>
                  {currentItems.length > 0 ? (
                    currentItems.map((product) => (
                      <div key={product.id} className={cx("col l-3 m-6 c-6")}>
                        <ProductCard product={product} />
                      </div>
                    ))
                  ) : (
                    <div className={cx("search-msg")}>
                      <h3>
                        Sorry! We don't have the product that you were looking
                        for
                      </h3>
                    </div>
                  )}
                </div>
              </div>
              <div className={cx("paginate")}>
                <ReactPaginate
                  nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
                  previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
