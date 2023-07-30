import { faStar as faStarRegular } from "@fortawesome/fontawesome-free-regular";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsService from "~/services/productsService";
import styles from "./ProductDetail.module.scss";
import ProductDetailLoading from "./ProductDetailLoading";
const cx = classNames.bind(styles);
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    productsService.getById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);
  return (
    <>
      {loading ? (
        <ProductDetailLoading />
      ) : (
        <div className={cx("wrapper")}>
          <div className={cx("container")}>
            <div className={cx("grid wide")}>
              <div className={cx("row")}>
                <div className={cx("col l-6 m-12 c-12")}>
                  <div className={cx("product_preview")}>
                    <img src={product.image} alt="" />
                  </div>
                </div>
                <div className={cx("col l-6 m-12 c-12")}>
                  <div className={cx("product_overview")}>
                    <div className={cx("category")}>{product.category}</div>
                    <div className={cx("title")}>{product.title}</div>
                    <div className={cx("rate")}>
                      {product.rating?.rate > 4 && (
                        <div className={cx("top")}> Top rated</div>
                      )}
                      Rating {product.rating?.rate}
                      <span className={cx("star")}>
                        {product.rating?.rate >= 1 ? (
                          <FontAwesomeIcon icon={faStar} />
                        ) : product.rating?.rate > 0 &&
                          product.rating?.rate < 1 ? (
                          <FontAwesomeIcon icon={faStarHalfStroke} />
                        ) : (
                          <FontAwesomeIcon icon={faStarRegular} />
                        )}

                        {product.rating?.rate >= 2 ? (
                          <FontAwesomeIcon icon={faStar} />
                        ) : product.rating?.rate > 1 &&
                          product.rating?.rate < 2 ? (
                          <FontAwesomeIcon icon={faStarHalfStroke} />
                        ) : (
                          <FontAwesomeIcon icon={faStarRegular} />
                        )}

                        {product.rating?.rate >= 3 ? (
                          <FontAwesomeIcon icon={faStar} />
                        ) : product.rating?.rate > 2 &&
                          product.rating?.rate < 3 ? (
                          <FontAwesomeIcon icon={faStarHalfStroke} />
                        ) : (
                          <FontAwesomeIcon icon={faStarRegular} />
                        )}

                        {product.rating?.rate >= 4 ? (
                          <FontAwesomeIcon icon={faStar} />
                        ) : product.rating?.rate > 3 &&
                          product.rating?.rate < 4 ? (
                          <FontAwesomeIcon icon={faStarHalfStroke} />
                        ) : (
                          <FontAwesomeIcon icon={faStarRegular} />
                        )}
                        {product.rating?.rate >= 5 ? (
                          <FontAwesomeIcon icon={faStar} />
                        ) : product.rating?.rate > 4 &&
                          product.rating?.rate < 5 ? (
                          <FontAwesomeIcon icon={faStarHalfStroke} />
                        ) : (
                          <FontAwesomeIcon icon={faStarRegular} />
                        )}
                      </span>
                      <span className={cx("count")}>
                        {product.rating?.count} Reviews
                      </span>
                    </div>
                    <div className={cx("price")}>$ {product.price}</div>
                    <div className={cx("description")}>
                      {product.description}
                    </div>
                    <div className={cx("action")}>
                      <button className={cx("add-to-cart", "btn")}>
                        Add to cart
                      </button>
                      <button className={cx("go-to-cart", "btn")}>
                        Go to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
