import classNames from "classnames/bind";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Products.module.scss";
const cx = classNames.bind(styles);
function ProductsLoading() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("grid wide")}>
        <div className={cx("action")}>
          <div className={cx("tag")}>
            <div className={cx("tag_item")}>
              <Skeleton width={100} height={33} />
            </div>
            <div className={cx("tag_item")}>
              <Skeleton width={100} height={33} />
            </div>
            <div className={cx("tag_item")}>
              <Skeleton width={100} height={33} />
            </div>
            <div className={cx("tag_item")}>
              <Skeleton width={100} height={33} />
            </div>
            <div className={cx("tag_item")}>
              <Skeleton width={100} height={33} />
            </div>
          </div>
        </div>
        <div className={cx("products")}>
          <div className={cx("row")}>
            <div className={cx("col l-3 m-6 c-6 ", "product_loading")}>
              <Skeleton height={400} />
            </div>
            <div className={cx("col l-3 m-6 c-6 ", "product_loading")}>
              <Skeleton height={400} />
            </div>
            <div className={cx("col l-3 m-6 c-6 ", "product_loading")}>
              <Skeleton height={400} />
            </div>
            <div className={cx("col l-3 m-6 c-6 ", "product_loading")}>
              <Skeleton height={400} />
            </div>
            <div className={cx("col l-3 m-6 c-6 ", "product_loading")}>
              <Skeleton height={400} />
            </div>
            <div className={cx("col l-3 m-6 c-6 ", "product_loading")}>
              <Skeleton height={400} />
            </div>
            <div className={cx("col l-3 m-6 c-6", "product_loading")}>
              <Skeleton height={400} />
            </div>
            <div className={cx("col l-3 m-6 c-6", "product_loading")}>
              <Skeleton height={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsLoading;
