import { unwrapResult } from "@reduxjs/toolkit";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import { publicRoutes } from "./Routes";
import { getMe } from "./pages/Login/userSlice";
import ScrollButton from "./components/ScrollButton";
import NotFound from "./components/NotFound/NotFound";

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);
function App() {
  //Handle firebase auth changed
  const dispatch = useDispatch();
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          // console.log("user is not login");
          return;
        }

        try {
          localStorage.setItem(
            "firebaseRememberAccount",
            JSON.stringify(user.providerData)
          );
          const actionResult = await dispatch(getMe());
          const currentUser = unwrapResult(actionResult);
        } catch {
          console.log("error");
          return;
        }
      });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              let Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<Layout>{<Page />}</Layout>}
                />
              );
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
      <ScrollButton />
    </>
  );
}

export default App;
