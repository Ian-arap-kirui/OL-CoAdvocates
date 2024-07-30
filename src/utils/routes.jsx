import React from "react";
import lazyWithDelay from "./lazyWithDelay";

const HomePage = lazyWithDelay(() => import("../pages/Home/Home"), 3500);
const AboutUsPage = lazyWithDelay(() => import("../pages/About/AboutUs"), 3500);

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
];

export default routes;
