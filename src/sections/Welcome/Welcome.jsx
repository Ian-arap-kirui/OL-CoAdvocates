import React from "react";
import corner1 from "../../assets/corner1.svg";
import UserCard from "../../components/Cards/UserCard/UserCard";
const Welcome = () => {
  return (
    <div className="welcomeIntro">
      <div className="leftWelcomeIntro">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="rightWelcomeIntro">
        <div className="rightWelcomeTextArea">
          <h2>
            Welcome to Attorney Law - <br />
            Lawyer & Law Firm Company
          </h2>
          <img src={corner1} style={{ height: "150px" }} alt="" />
          <p>
            Although we are located in Brooklyn, our maritime lawyers are proud
            to help the injured throughout the nation, including workers who
            were working in foreign waters at the time of the incident go up
            against the largest offshore companies and win.
          </p>
        </div>
        <UserCard name="Onesmus Langat" successRate="95%" experience="35" />
      </div>
    </div>
  );
};

export default Welcome;
