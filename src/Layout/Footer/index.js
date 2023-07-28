import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import imgFooter from "~/assets/about/2.jpg";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("footer")}>
        <div className={cx("grid wide")}>
          <div className={cx("row")}>
            <div className={cx("col l-4 m-12 c-12")}>
              <div className={cx("promo", "footer_col_item")}>
                <div className={cx("title")}>PROMO</div>
                <img src={imgFooter} className={cx("footer_img")} alt="promo" />
                <div className={cx("item")}>
                  <a href="/" className={cx("link")}>
                    Finding Your Perfect Shirts This Summer
                  </a>
                </div>
              </div>
            </div>
            <div className={cx("col l-4 m-12 c-12")}>
              <div className={cx("quick", "footer_col_item")}>
                <div className={cx("title")}>QUICK LINKS</div>
                <div className={cx("quick_column")}>
                  <div className={cx("fist_column")}>
                    <div className={cx("item")}>
                      <a href="/" className={cx("link")}>
                        Sell online
                      </a>
                    </div>
                    <div className={cx("item")}>
                      <a href="/" className={cx("link")}>
                        Store builder
                      </a>
                    </div>
                    <div className={cx("item")}>
                      <a href="/" className={cx("link")}>
                        Mobile commerce
                      </a>
                    </div>
                    <div className={cx("item")}>
                      <a href="/" className={cx("link")}>
                        Dropshipping
                      </a>
                    </div>
                  </div>
                  <div className={cx("fist_column")}>
                    <div className={cx("item")}>
                      <a href="/" className={cx("link")}>
                        Shopping cart
                      </a>
                    </div>
                    <div className={cx("item")}>
                      <a href="/" className={cx("link")}>
                        Web development
                      </a>
                    </div>
                    <div className={cx("item")}>
                      <a href="/" className={cx("link")}>
                        Point of sale
                      </a>
                    </div>
                    <div className={cx("item")}>
                      <a href="/" className={cx("link")}>
                        Shopping cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("col l-4 m-12 c-12")}>
              <div className={cx("contact", "footer_col_item")}>
                <div className={cx("title")}>CONTACT INFO</div>
                <div className={cx("item")}>
                  <FontAwesomeIcon
                    className={cx("icon")}
                    icon={faLocationDot}
                  />
                  203 Fake St. Mountain View, San Francisco, California, USA
                </div>
                <div className={cx("item")}>
                  <a href={"tel:0333499547"} className={cx("link")}>
                    <FontAwesomeIcon className={cx("icon")} icon={faPhone} />
                    +84 333499547
                  </a>
                </div>
                <div className={cx("item")}>
                  <a
                    href={"mailto:dungtiendtd@gmail.com"}
                    className={cx("link")}
                  >
                    <FontAwesomeIcon className={cx("icon")} icon={faEnvelope} />
                    dungtiendtd@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("copy-right")}>
            <div className={cx("heading")}>
              Copyright ©2023 All rights reserved | This template is made with
              by Du Tien Dung
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
