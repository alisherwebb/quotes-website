import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useTranslation } from "react-i18next";
import { mainContext } from "../context/MainContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function SignUp() {
  const { dispatch } = useContext(mainContext);
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    createUserWithEmailAndPassword(
      auth,
      formData.get("email"),
      formData.get("password")
    )
      .then((userCredential) => {
        const user = userCredential.user;

        dispatch({
          type: "LOGIN",
          payload: {
            ...user,
            displayName: formData.get("fullname"),
            photoURL:
              "https://api.dicebear.com/9.x/initials/svg?seed=" +
              formData.get("email"),
          },
        });
        toast.success("Hush kelibsiz!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });

    e.target.reset();
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  return (
    <div className="w-full h-full grow flex justify-center items-center">
      <div className="w-full max-w-[600px] flex flex-col gap-5 shadow-2xl py-8 px-8">
        <h2 className="text-3xl text-center font-bold">
          {t("ro'yhatdan o'tish")}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <input
              className="input w-full"
              type="text"
              name="fullname"
              placeholder="Fullname"
              autoComplete="off"
              required
            />
            <input
              className="input w-full"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <input
              className="input w-full"
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              required
            />
            <input
              className="input w-full"
              type="password"
              name="password-again"
              placeholder="Password-Again"
              autoComplete="off"
              required
            />
          </div>
          <Link className="link" to="/login">
            Kirish
          </Link>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-white bg-white text-black"
            type="submit"
          >
            <FcGoogle className="text-xl" />
            <span>Google</span>
          </button>
          <button className="btn btn-primary" type="submit">
            {t("kirish")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
