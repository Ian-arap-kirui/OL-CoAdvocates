import React from "react";
import "./userCard.css";
import dummyProfilePic from "../../../assets/dummyProfPic.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UserCard = ({ name, successRate, experience }) => {
  return (
    <div className="userCard">
      <div className="userName">
        <img src={dummyProfilePic} alt="onesmus langat photo" />
        <h3>{name}</h3>
      </div>
      <div className="userCardDetails">
        <div className="userSuccessRate">
          <FontAwesomeIcon />
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
            <p>
              {experience} Years <br />
              Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
