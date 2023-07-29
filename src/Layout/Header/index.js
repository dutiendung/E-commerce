import {
  faBars,
  faCartShopping,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
function Header() {
  const [showMenuBar, setShowMenuBar] = useState(false);
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
                </ul>
              </div>
            )}
            <div className={cx("action")}>
              <button className={cx("action_button", "btn")}>
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className={cx("button_icon")}
                />{" "}
                <div className={cx("action_name")}>Login</div>
              </button>
              <Link to="/cart" className={cx("action_button", "btn")}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className={cx("button_icon")}
                />{" "}
                <div className={cx("action_name")}>Cart({4})</div>
                <span className={cx("total-cart-mobile")}>{4}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
