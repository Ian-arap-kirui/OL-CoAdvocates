import React from "react";
import lazyWithDelay from "./lazyWithDelay";

const HomePage = lazyWithDelay(() => import("../pages/Home/Home"), 3500);
const AboutUsPage = lazyWithDelay(() => import("../pages/About/AboutUs"), 3500);
const EFilingPage = lazyWithDelay(
  () => import("../pages/Efiling/EFiling"),
  3500
);
const ContactUsPage = lazyWithDelay(
  () => import("../pages/ContactUs/ContactUs"),
  3500
);

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
  {
    path: "/e-filing",
    element: <EFilingPage />,
  },
  {
    path: "/contact-us",
    element: <ContactUsPage />,
  },
];

export default routes;
