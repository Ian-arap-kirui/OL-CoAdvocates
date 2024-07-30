import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Navigation/Nav";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
