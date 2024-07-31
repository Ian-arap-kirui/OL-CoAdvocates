import React from "react";
import "./practiceCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
const PracticeCard = () => {
  return (
    <div className="practiceCard">
      <div className="practiceCardText">
        <Link to={"/"}>Business Law</Link>
        <p>
          Be aware of new developments, as laws and rules often change based on
          the situation.
        </p>
      </div>
      <div className="practiceBottom">
        <FontAwesomeIcon
          icon={faBriefcase}
          flip
          className="practiceIcon"
          style={{ color: "#d1b06b" }}
        />
        <Link to="/" className="practiceBtn">
          View More
        </Link>
      </div>
    </div>
  );
};

export default PracticeCard;
