import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/fontawesome-free-regular";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Login/userSlice";
import RegisterDone from "./RegisterDone";
import { toast } from "react-toastify";
const cx = classNames.bind(styles);
function Register() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "LA - Register";
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      dispatch(login({ name }));
      toast.success("Signed up successfully", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
      localStorage.setItem(
        "firebaseRememberAccountNotGG",
        JSON.stringify({
          current: { name },
          isLogin: true,
        })
      );
    }
  };
  const validateAll = () => {
    const msg = {};
    //name
    if (name.trim() === "") {
      msg.nameInput = "*Please enter your name";
    } else if (name.trim().split(" ").length < 2) {
      msg.nameInput = "*Please enter your full name (both first and last)";
    }
    //email
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.trim() === "") {
      msg.emailInput = "*Please enter your email";
    } else if (!email.match(mailformat)) {
      msg.emailInput = "*Please enter a valid email address";
    }
    //password
    if (password.trim() === "") {
      msg.passwordInput = "*Please enter your password";
    } else if (password.trim().length < 8) {
      msg.passwordInput = "*Please enter at least 8 characters";
    }
    //ConfirmPassword
    if (confirmPassword.trim() === "") {
      msg.confirmPasswordInput = "*Please enter your confirm password";
    } else if (confirmPassword.trim() !== password.trim()) {
      msg.confirmPasswordInput = "*Please try again!";
    }
    setErrorMsg(msg);
    return !Object.keys(msg).length > 0;
  };
  return (
    <div className={cx("wrapper")}>
      <div className="grid wide">
        {isLogin ? (
          <RegisterDone />
        ) : (
          <div className={cx("form_wrap")}>
            <form className={cx("form_register")}>
              <div className={cx("form_icon")}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <label className={cx("form_label")} htmlFor="name">
                Your Name
              </label>
              <input
                value={name}
                className={cx("form_input")}
                id="name"
                placeholder="Enter your name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <p className={cx("form_errorMsg")}>{errorMsg.nameInput}</p>
              <label className={cx("form_label")} htmlFor="email">
                Your Email
              </label>
              <input
                value={email}
                className={cx("form_input")}
                id="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <p className={cx("form_errorMsg")}>{errorMsg.emailInput}</p>
              <label className={cx("form_label")} htmlFor="password">
                Password
              </label>
              <input
                value={password}
                type="password"
                className={cx("form_input")}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                placeholder="Enter your password"
              />
              <p className={cx("form_errorMsg")}>{errorMsg.passwordInput}</p>
              <label className={cx("form_label")} htmlFor="confirm_password">
                Confirm Password
              </label>
              <input
                value={confirmPassword}
                type="password"
                className={cx("form_input")}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                id="confirm_password"
                placeholder="Confirm your password"
              />
              <p className={cx("form_errorMsg")}>
                {errorMsg.confirmPasswordInput}
              </p>
              <input
                className={cx("form_submit")}
                type="submit"
                value="Submit"
                onClick={handleSubmit}
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
