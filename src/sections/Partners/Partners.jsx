import React from "react";
import "./partners.css";
import separator1 from "../../assets/separator1.svg";
const Partners = ({ page }) => {
  return (
    <div className="partners">
      <div className="partnersHeader">
        <img src={separator1} alt="" />
        <h2>Meet The Partners</h2>
        <img src={separator1} alt="" />
      </div>
      <div className="partnersContent">
        <img src="" alt="partners logo" />
        <img src="" alt="partners logo" />
        <img src="" alt="partners logo" />
        <img src="" alt="partners logo" />
        <img src="" alt="partners logo" />
        <img src="" alt="partners logo" />
        <img src="" alt="partners logo" />
      </div>
    </div>
  );
};

export default Partners;
