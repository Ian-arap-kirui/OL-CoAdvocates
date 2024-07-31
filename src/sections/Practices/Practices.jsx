import React from "react";
import "./practices.css";
import separator from "../../assets/separator.svg";
import PracticeCard from "../../components/Cards/PracticeCard/PracticeCard";
const Practices = ({ page }) => {
  return (
    <div className="practices">
      <div className="practicesHeader">
        <div className="practicesHeading">
          <h2>
            Explore Our <br /> Practice Areas
          </h2>
          <img src={separator} alt="" loading="lazy" />
        </div>
        <p>
          We are a group of civil litigation/trial attorneys who focus on
          providing a justice based on the issues relating to insurance defense,
          insurance coverage, bad faith, insurance fraud and criminal
          litigation.
        </p>
      </div>
      <div className="practicesCards">
        <PracticeCard />
        <PracticeCard />
        <PracticeCard />
        <PracticeCard />
        <PracticeCard />
        <PracticeCard />
      </div>
    </div>
  );
};

export default Practices;
