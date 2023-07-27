import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
const cx = classNames.bind(styles);
function ProductCard({ product }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("product-card")}>
          <img className={cx("product_img")} src={product.image} alt="" />

          <div className={cx("title")}>{product.title}</div>
          <div className={cx("price")}>$ {product.price}</div>
          <Link className={cx("buy_btn", "btn")}>Buy now</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
