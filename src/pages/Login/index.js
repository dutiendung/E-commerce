import classNames from "classnames/bind";
import firebase from "firebase/compat/app";
import { useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);
function Login() {
  useEffect(() => {
    document.title = "LA - Login";
  }, []);
  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "redirect",
    signInSuccessUrl: '/',
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
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
}

export default Login;
