import React from "react";
import "./navStyles/topNav.css";
import DarkBgLogo from "../../assets/darkBgLogo.svg";
const TopNav = () => {
  return (
    <div className="topNav">
      <img src={DarkBgLogo} alt="" loading="lazy" />
      <button className=" button headerButton">Book A Consultation</button>
    </div>
  );
};

export default TopNav;
