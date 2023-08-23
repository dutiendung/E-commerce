import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);
function RegisterDone() {
  const state = useSelector((state) => state.user.current);
  return (
    <div className={cx("register_done")}>
      <p className={cx("title")}>
        Hello <span className={cx("name")}>{state.name}</span>
      </p>
      <Link className={cx("btn-go-home btn")} to="/">
        Go to Homepage
      </Link>
    </div>
  );
}

export default RegisterDone;
