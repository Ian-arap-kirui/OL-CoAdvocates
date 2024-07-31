import React from "react";
import "./welcome.css";
import separator from "../../assets/separator.svg";
import UserCard from "../../components/Cards/UserCard/UserCard";
import intro from "../../assets/intro.jpg";
import intro1 from "../../assets/intro1.jpg";
const Welcome = () => {
  return (
    <div className="welcomeIntro">
      <div className="leftWelcomeIntro">
        <img src={intro} alt="" />
        <img src={intro1} alt="" />
      </div>
      <div className="rightWelcomeIntro">
        <div className="rightWelcomeTextArea">
          <h2>
            Welcome to Onesmus Langat & <br />
            Co. Advocates
          </h2>
          <img src={separator} style={{ height: "40px" }} alt="" />
          <p>
            We are located in Kericho County, our maritime lawyers are proud to
            help the injured throughout the nation, including workers who were
            working in foreign waters at the time of the incident go up against
            the largest offshore companies and win.
          </p>
        </div>
        <UserCard name="Onesmus Langat" successRate="95%" experience="35" />
      </div>
    </div>
  );
};

export default Welcome;
