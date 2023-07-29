import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
const cx = classNames.bind(styles);
function ProductDetail() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("grid wide")}>
          <div className={cx("row")}>
            <div className={cx("col l-6")}>11</div>
            <div className={cx("col l-6")}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
