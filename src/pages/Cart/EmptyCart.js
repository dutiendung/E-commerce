import classNames from "classnames/bind";
import img from "~/assets/cart/empty-cart.png";
import styles from "./Cart.module.scss";
const cx = classNames.bind(styles);
function EmptyCart() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container_empty-cart")}>
        <img src={img} alt="" />
        <p>Your cart is empty</p>
      </div>
    </div>
  );
}

export default EmptyCart;
