import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.scss";
import EmptyCart from "./EmptyCart";
import { addToCart, decrementAnItem } from "./cartSlice";
const cx = classNames.bind(styles);
function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "LA - Cart";
  }, []);
  const cartProducts = useSelector((state) => state.carts);
  localStorage.setItem("cart", JSON.stringify(cartProducts));
  const totalPrice = cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const dispatch = useDispatch();
  const handleClickPlus = (product) => {
    const action = addToCart(product);
    dispatch(action);
  };
  const handleClickMinus = (product) => {
    const action = decrementAnItem(product);
    dispatch(action);
  };
  return (
    <div className={cx("wrapper")}>
      {cartProducts.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className={cx("grid wide")}>
          <div className={cx("container")}>
            {cartProducts.map((product) => (
              <div key={product.id} className={cx("cart-item")}>
                <div className={cx("row")}>
                  <div className={cx("col l-6 m-6 c-6")}>
                    <div className={cx("cart_preview")}>
                      <img src={product.image} alt={product.title} />
                    </div>
                  </div>
                  <div className={cx("col l-6 m-6 c-6")}>
                    <div className={cx("cart_detail")}>
                      <h3 className={cx("name")}>{product.title}</h3>
                      <h2 className={cx("price")}>
                        {product.quantity} x $ {product.price} = ${" "}
                        {(product.quantity * product.price).toFixed(3)}
                      </h2>
                      <div className={cx("action")}>
                        <button
                          className={cx("btn-minus", "btn")}
                          onClick={() => {
                            handleClickMinus(product);
                          }}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button
                          className={cx("btn-plus", "btn")}
                          onClick={() => {
                            handleClickPlus(product);
                          }}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={cx("total")}>Total : $ {totalPrice.toFixed(3)}</div>
        </div>
      )}
    </div>
  );
}

export default Cart;
