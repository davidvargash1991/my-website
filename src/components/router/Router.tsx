import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home";
import Profile from "components/pages/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
