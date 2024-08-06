import React from "react";
import "./teamCard.css";
const TeamCard = ({ name, designation }) => {
  return (
    <div className="teamCard">
      <div className="teamCardText">
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;
