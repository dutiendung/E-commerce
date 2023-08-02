import classNames from "classnames/bind";
import Skeleton from "react-loading-skeleton";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
function SliderHomeLoading() {
  return (
    <div className={cx("wrapper_slider_loading")}>
      <div className={cx("grid wide")}>
        <div className={cx("slider")}>
          <div className="row">
            {/* PC */}
            <div className="col l-3 m-0 c-0">
              <Skeleton height={407} width={282} />
            </div>
            <div className="col l-3 m-0 c-0">
              <Skeleton height={407} width={282} />
            </div>
            <div className="col l-3 m-0 c-0">
              <Skeleton height={407} width={282} />
            </div>
            <div className="col l-3 m-0 c-0">
              <Skeleton height={407} width={282} />
            </div>

            {/* tablet */}
            <div className="col l-0 m-4 c-0">
              <Skeleton height={407} width={190} />
            </div>
            <div className="col l-0 m-4 c-0">
              <Skeleton height={407} width={190} />
            </div>
            <div className="col l-0 m-4 c-0">
              <Skeleton height={407} width={190} />
            </div>
            {/* Mobile */}
            <div className={cx("mobile-loading", "col", "l-0", "m-0", "c-12")}>
              <Skeleton height={407} width={360} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderHomeLoading;
