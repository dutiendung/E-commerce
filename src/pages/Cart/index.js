import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
const cx = classNames.bind(styles);
function Cart() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("grid wide")}>
        <div className={cx("container")}>
          <div className={cx("cart-item")}>
            <div className={cx("row")}>
              <div className={cx("col l-6 m-6 c-6")}>
                <div className={cx("cart_preview")}>
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className={cx("col l-6 m-6 c-6")}>
                <div className={cx("cart_detail")}>
                  <h3 className={cx("name")}>
                    John Hardy Women's Legends Naga Gold & Silver Dragon Station
                    Chain Bracelet
                  </h3>
                  <h2 className={cx("price")}>1 x $ 22.3 = $ 22.30 </h2>
                  <div className={cx("action")}>
                    <button className={cx("btn-plus", "btn")}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button className={cx("btn-minus", "btn")}>
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className={cx("cart-item")}>
            <div className={cx("row")}>
              <div className={cx("col l-6 m-6 c-6")}>
                <div className={cx("cart_preview")}>
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className={cx("col l-6 m-6 c-6")}>
                <div className={cx("cart_detail")}>
                  <h3 className={cx("name")}>Mens Cotton Jacket</h3>
                  <h2 className={cx("price")}>1 x $ 22.3 = $ 22.30 </h2>
                  <div className={cx("action")}>
                    <button className={cx("btn-plus", "btn")}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button className={cx("btn-minus", "btn")}>
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cx("cart-item")}>
            <div className={cx("row")}>
              <div className={cx("col l-6 m-6 c-6")}>
                <div className={cx("cart_preview")}>
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className={cx("col l-6 m-6 c-6")}>
                <div className={cx("cart_detail")}>
                  <h3 className={cx("name")}>Mens Cotton Jacket</h3>
                  <h2 className={cx("price")}>1 x $ 22.3 = $ 22.30 </h2>
                  <div className={cx("action")}>
                    <button className={cx("btn-plus", "btn")}>
                      <FontAwesomeIcon
                        className={cx("action-icon")}
                        icon={faPlus}
                      />
                    </button>
                    <button className={cx("btn-minus", "btn")}>
                      <FontAwesomeIcon
                        className={cx("action-icon")}
                        icon={faMinus}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("total")}>Total : $ 22.30</div>
      </div>
    </div>
  );
}

export default Cart;
