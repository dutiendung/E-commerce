import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import ProductCard from "~/components/ProductCard";
import categoriesService from "~/services/categoriesService";
import productsService from "~/services/productsService";
import styles from "./Products.module.scss";
const cx = classNames.bind(styles);
function Products() {
  const [activeTag, setActiveTag] = useState("all");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filters, setFilter] = useState([]);
  useEffect(() => {
    productsService.getAll().then((data) => {
      setProducts(data);
      setFilter(data);
    });
    categoriesService.getAll().then((data) => setCategories(data));
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
  const handleClickBtnSearch = (e) => {
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
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("grid wide")}>
          <h1 className={cx("title")}>Latest products</h1>
          <div className={cx("action")}>
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
          </div>
          <div className={cx("product")}>
            <div className={cx("row")}>
              {filters.length > 0 ? (
                filters.map((product) => (
                  <div key={product.id} className={cx("col l-3 m-6 c-6")}>
                    <ProductCard product={product} />
                  </div>
                ))
              ) : (
                <div className={cx("search-msg")}>
                  <h3>
                    Sorry! We don't have the product that you were looking for
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
