import classNames from "classnames/bind";
import Skeleton from "react-loading-skeleton";
import styles from "./ProductDetail.module.scss";
const cx = classNames.bind(styles);
function ProductDetailLoading() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("grid wide")}>
          <div className={cx("row")}>
            <div className={cx("col l-6 m-12 c-12")}>
              <div className={cx("product_preview", "product_preview_loading")}>
                <Skeleton width={300} height={300} />
              </div>
            </div>
            <div className={cx("col l-6 m-12 c-12")}>
              <div className={cx("product_overview")}>
                <div className={cx("category")}>
                  <Skeleton width={180} height={27} />
                </div>
                <div className={cx("title")}>
                  <Skeleton width={350} height={27} />
                </div>
                <div className={cx("rate")}>
                  <Skeleton width={280} height={27} />
                </div>
                <div className={cx("price")}>
                  <Skeleton width={80} height={27} />
                </div>
                <div className={cx("description")}>
                  <Skeleton width={560} height={23} />
                  <Skeleton width={550} height={23} />
                  <Skeleton width={560} height={23} />
                  <Skeleton width={550} height={23} />
                </div>
                <div className={cx("action", "action_loading")}>
                  <div className={cx("add-to-cart", "add-to-cart_loading")}>
                    <Skeleton width={80} height={33} />
                  </div>
                  <div className={cx("go-to-cart")}>
                    <Skeleton width={80} height={33} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailLoading;
