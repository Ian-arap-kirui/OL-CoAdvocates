import React from "react";
import "./help.css";
import separator1 from "../../assets/separator1.svg";
import HelpCard from "../../components/Cards/HelpCard/HelpCard";
import HelpCardBg from "../../assets/intro1.jpg";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
const Help = ({ page }) => {
  return (
    <div className="helpSection">
      <div className="helpHeader">
        <h2>
          Fighting to Get What <br />
          You Deserve
        </h2>
        <img src={separator1} alt="" loading="lazy" />
        <p>
          Our board-certified family law attorneys work to achieve a fair and{" "}
          <br />
          timely resolution of the legal issues in your case.
        </p>
      </div>
      <div className="helpCards">
        <HelpCard
          numbers={"7230"}
          title={"Trusted Clients"}
          subtitle={"Number of clients we've"}
          icon={faHeart}
          bg={""}
        />
        <HelpCard
          numbers={"98%"}
          title={"Successful Cases"}
          subtitle={"Largest Winning Value"}
          icon={faStar}
          bg={""}
        />
        <HelpCard
          numbers={"15,890+"}
          title={"Criminal Defense"}
          subtitle={"Cases Served"}
          icon={""}
          bg={HelpCardBg}
        />
      </div>
    </div>
  );
};

export default Help;
