import React from "react";
import "./consultation.css";
import separator1 from "../../assets/separator1.svg";
import ConsultationCard from "../../components/Cards/ConsultationCard/ConsultationCard";
const Consultation = () => {
  return (
    <div className="consultation">
      <div className="consultationWrapper">
        <div className="consultationLeft">
          <div className="consultationHeader">
            <h2>
              Our professional Expert law team <br /> is always ready to serve
              you
            </h2>
            <img src={separator1} alt="" />
          </div>
          <div className="consultationLeftBody">
            <p>
              We’re always available for new cases big or small. Send us an
              email and we’ll get in touch shortly, or phone between 8:00 am and
              7:00 pm Monday to Saturday.
            </p>
            <div className="button consultationBtn">Contact Us</div>
          </div>
        </div>
        <div className="consultationRight">
          <ConsultationCard />
        </div>
      </div>
    </div>
  );
};

export default Consultation;
