import React from "react";
import "./navStyles/navLinks.css";
import { NavLink } from "react-router-dom";
const Navlinks = () => {
  return (
    <div className="navLinks">
      <ul className="linkList">
        <NavLink to={"/"} activeClassName=" active">
          Home
        </NavLink>
        <NavLink to={"/about-us"} activeClassName=" active">
          About Us
        </NavLink>
        <NavLink to={"/e-filing"} activeClassName=" active">
          E-Filing
        </NavLink>
        <NavLink to={"/contact-us"} activeClassName=" active">
          Contact Us
        </NavLink>
      </ul>

      <div className="contactList">
        <div className="contact">
          <span>Call Us On:</span>
          <a href="tel:+254-722-728-275">+254-722-728-275</a>
        </div>
        <div className="mail">
          <span>Email Us On:</span>
          <a href="mailto:onesmuslangat@gmail.com">onesmuslangat@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Navlinks;
