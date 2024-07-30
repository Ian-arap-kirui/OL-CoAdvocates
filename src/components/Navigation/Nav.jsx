import React from "react";
import TopNav from "./TopNav";
import Navlinks from "./Navlinks";
import "./navStyles/nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <TopNav />
      <Navlinks />
    </div>
  );
};

export default Nav;
