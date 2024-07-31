import React from "react";
import "./userCard.css";
import dummyProfilePic from "../../../assets/dummyProfPic.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
const UserCard = ({ name, successRate, experience }) => {
  return (
    <div className="userCard">
      <div className="userName">
        <img src={dummyProfilePic} alt="onesmus langat photo" loading="lazy" />
        <h3>{name}</h3>
      </div>
      <div className="userCardDetails">
        <div className="userSuccessRate">
          <FontAwesomeIcon
            icon={faBriefcase}
            bounce
            className="briefcaseIcon"
            style={{ color: "#d1b06b" }}
          />
          <div className="successRate">
            <p>
              {successRate} <br />
              Case Success
            </p>
          </div>
        </div>
        <div className="userExperience">
          <FontAwesomeIcon />
          <div className="experience">
            <span>{experience}+</span>
            <p>
              Years <br />
              Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
