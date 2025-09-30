import React, { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { mainContext } from "../context/MainContext";
import SignUp from "../pages/SignUp";

function Routes() {
  const { state } = useContext(mainContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Mainlayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: state.userInfo ? <Navigate to="/" replace={true} /> : <Login />,
    },
    {
      path: "/signup",
      element: state.userInfo ? <Navigate to="/" replace={true} /> : <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
