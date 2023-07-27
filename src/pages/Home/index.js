import classNames from "classnames/bind";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bgr")}>
        <div className={cx("bgr__intro")}>
          <h3>NEW SEASON ARRIVALS</h3>
          <p>CHECK OUT ALL TRENDS</p>
        </div>
      </div>
    </div>
  );
}

export default Home;