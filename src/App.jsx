import React, { useContext, useEffect, useLayoutEffect } from "react";
import Routes from "./Routes/Routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import { mainContext } from "./context/MainContext";

function App() {
  const {
    state: { isAuth },
    dispatch,
  } = useContext(mainContext);

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      } else {
      }
    });
  }, []);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
