import classNames from "classnames/bind";
import { useEffect } from "react";
import Products from "../Products";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
function Home() {
  useEffect(() => {
    document.title = "LA COLLECTION";
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bgr")}>
        <div className={cx("bgr__intro")}>
          <h3>NEW SEASON ARRIVALS</h3>
          <p>CHECK OUT ALL TRENDS</p>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
