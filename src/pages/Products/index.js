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
  const [filters, setFilter] = useState([]);
  useEffect(() => {
    productsService.getAll().then((data) => setProducts(data));
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
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("grid wide")}>
          <h1 className={cx("title")}>Latest products</h1>
          <div className={cx("action")}>
            <div className={cx("search_input")}>
              <input type="text" />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={cx("search_icon")}
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
              {filters.length > 0
                ? filters.map((product) => (
                    <div key={product.id} className={cx("col l-3 m-6 c-6")}>
                      <ProductCard product={product} />
                    </div>
                  ))
                : products.map((product) => (
                    <div key={product.id} className={cx("col l-3 m-6 c-6")}>
                      <ProductCard product={product} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
