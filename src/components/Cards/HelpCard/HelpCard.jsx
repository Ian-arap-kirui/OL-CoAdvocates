import React from "react";
import "./helpCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HelpCard = ({ numbers, title, icon, subtitle, bg }) => {
  return (
    <div className={bg ? "helpCardWithBg" : "helpCard"}>
      <div className="helpMetrics">
        <FontAwesomeIcon icon={icon} bounce />
        <span>{numbers}</span>
      </div>

      <div className="helpCardText">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default HelpCard;
