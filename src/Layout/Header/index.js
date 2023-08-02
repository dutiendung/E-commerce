import {
  faBars,
  faCartShopping,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase/compat/app";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "~/pages/Login/userSlice";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
function Header() {
  const userData = useSelector((state) => state.user);
  const { current, isLogin } = userData;
  const cartProduct = useSelector((state) => state.carts);
  const totalProduct = cartProduct.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  const [showMenuBar, setShowMenuBar] = useState(false);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    firebase.auth().signOut();
    localStorage.removeItem("firebaseRememberAccount");
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("grid wide", "active-nav")}>
          <div className={cx("nav")}>
            <div className={cx("menubar_and_logo")}>
              <FontAwesomeIcon
                icon={faBars}
                className={cx("menu_bar_icon")}
                onClick={() => setShowMenuBar(true)}
              />
              <div className={cx("nav_logo")}>
                <NavLink to="/" className={cx("logo")}>
                  LA COLLECTION
                </NavLink>
              </div>
            </div>
            <div className={cx("pc_category")}>
              <ul className={cx("category_list")}>
                <li className={cx("category_item")}>
                  <NavLink className={cx("category_link")} to="/">
                    Home
                  </NavLink>
                </li>
                <li className={cx("category_item")}>
                  <NavLink className={cx("category_link")} to="/products">
                    Products
                  </NavLink>
                </li>
                <li className={cx("category_item")}>
                  <NavLink className={cx("category_link")} to="/about">
                    About
                  </NavLink>
                </li>
                <li className={cx("category_item")}>
                  <NavLink className={cx("category_link")} to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            {showMenuBar && (
              <div
                className={cx("sidebar_menu")}
                onClick={() => setShowMenuBar(false)}
              >
                <div
                  className={cx("sidebar_overlay")}
                  onClick={() => setShowMenuBar(false)}
                ></div>
                <ul className={cx("category_list")}>
                  <div className={cx("sidebar_logo")}>
                    <NavLink to="/" className={cx("logo")}>
                      LA COLLECTION
                    </NavLink>
                  </div>
                  <li className={cx("category_item")}>
                    <NavLink className={cx("category_link")} to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className={cx("category_item")}>
                    <NavLink className={cx("category_link")} to="/products">
                      Products
                    </NavLink>
                  </li>
                  <li className={cx("category_item")}>
                    <NavLink className={cx("category_link")} to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className={cx("category_item")}>
                    <NavLink className={cx("category_link")} to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  {isLogin && (
                    <div className={cx("account-info-mobile")}>
                      <li
                        className={cx(
                          "category_link",
                          "category_item",
                          "user-name"
                        )}
                      >
                        {current.name}
                      </li>
                      <li className={cx("category_item")}>
                        <p className={cx("category_link")}>Account</p>
                      </li>
                      <li className={cx("category_item")}>
                        <NavLink className={cx("category_link")} to="/cart">
                          Collection
                        </NavLink>
                      </li>
                      <li
                        className={cx("category_item")}
                        onClick={handleLogout}
                      >
                        <Link className={cx("category_link")} to="/">
                          Log out
                        </Link>
                      </li>
                    </div>
                  )}
                </ul>
              </div>
            )}
            <div className={cx("action")}>
              {isLogin && (
                <span className={cx("user-name_mobile")}>
                  Hi {current.name}
                </span>
              )}
              <div className={isLogin ? cx("btn-login") : cx("btn--no-login")}>
                <Link to={!isLogin && "/login"}>
                  <button className={cx("action_button", "btn")}>
                    <FontAwesomeIcon
                      icon={faRightToBracket}
                      className={cx("button_icon")}
                    />{" "}
                    {isLogin ? (
                      <div className={cx("action_name")}> {current.name}</div>
                    ) : (
                      <div className={cx("action_name")}>Log in</div>
                    )}
                  </button>
                </Link>
                {isLogin && (
                  <div className={cx("account-info")}>
                    <ul className={cx("account-info-list")}>
                      <li className={cx("account-info-item")}>Account</li>
                      <li className={cx("account-info-item")}>
                        <Link to="/cart">Collection</Link>
                      </li>
                      <li
                        className={cx("account-info-item")}
                        onClick={handleLogout}
                      >
                        Log out
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Link to="/cart" className={cx("action_button", "btn")}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className={cx("button_icon")}
                />{" "}
                <div className={cx("action_name")}>Cart({totalProduct})</div>
                <span className={cx("total-cart-mobile")}>{totalProduct}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
