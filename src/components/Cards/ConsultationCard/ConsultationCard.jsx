import React from "react";
import callIcon from "../../../assets/call-icon.svg";
import "./consultationCard.css";
const ConsultationCard = () => {
  return (
    <div className="consultationCard">
      <div className="consultationCardWrapper">
        <h3>Get a Free Consultation</h3>
        <p>
          You can get free consultation and case evaluation from us via the
          following contact number
        </p>
        <div className="consultationCardContact">
          <img src={callIcon} alt="" />
          <div className="consultationCardText">
            <p>Call Us On:</p>
            <a href="tel:0722728275" className="consultationCardPhoneLink">
              0722728275
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationCard;
