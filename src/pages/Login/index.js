import classNames from "classnames/bind";
import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);
function Login() {
  useEffect(() => {
    document.title = "LA - Login";
  }, []);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [userdata, setUserdata] = useState("");

  const validateAll = () => {
    const msg = {};
    //mail
    if (username.trim() === "") {
      msg.usernameInput = "*Please enter your username";
    }
    // password
    if (password.trim() === "") {
      msg.passwordInput = "*Please enter your password";
    }
    setErrorMsg(msg);
    return !Object.keys(msg).length > 0;
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      toast.error("Couldn’t find your account", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };
  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "redirect",
    signInSuccessUrl: "/",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("grid wide")}>
        <div className={cx("title")}>
          <h1>Login Form</h1>
          <p>or login with social accounts</p>
        </div>
        <form className={cx("form_login")}>
          <label className={cx("form_label")} htmlFor="username">
            Your Username
          </label>
          <br />
          <input
            value={username}
            className={cx("form_input")}
            id="username"
            placeholder="Enter your name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <p className={cx("form_errorMsg")}>{errorMsg.usernameInput}</p>
          <label className={cx("form_label")} htmlFor="password">
            Your Password
          </label>
          <input
            type="password"
            value={password}
            className={cx("form_input")}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            placeholder="Enter your password"
          />
          <p className={cx("form_errorMsg")}>{errorMsg.usernameInput}</p>
          <input
            className={cx("form_submit")}
            type="submit"
            value="Submit"
            onClick={handleLoginSubmit}
          />
          <div className={cx("form_question")}>
            <span>Not a member yet?</span>{" "}
            <Link className={cx("form_link")} to="/register">
              Register
            </Link>
          </div>
        </form>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
}

export default Login;
