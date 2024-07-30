import React from "react";
import TopNav from "./TopNav";
import Navlinks from "./Navlinks";
import "./navStyles/nav.css";

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <TopNav />
        <Navlinks />
      </div>
    </div>
  );
};

export default Nav;
