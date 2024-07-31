import React from "react";
import "./hero.css";
import HeroBg from "../../assets/hero.jpg";
import Nav from "../../components/Navigation/Nav";
import corner1 from "../../assets/corner1.svg";
const Hero = ({ page }) => {
  return (
    <div className="hero">
      <div className="heroOverlay"></div>
      <Nav />
      <div className="heroContentArea">
        {page === "home" ? (
          <>
            <div className="heroTextArea">
              <img src={corner1} alt="" loading="lazy" />
              <h1>We're Group Of Certified Law Professionals</h1>
              <p>
                We have helped countless maritime workers and their families go
                up against the largest offshore companies and win.
              </p>
              <button className="button"> Get In Touch</button>
            </div>
            <div className="heroContentImage">
              <img src="" alt="Onesmus Langat photo" loading="lazy" />
            </div>
          </>
        ) : (
          <>{page}</>
        )}
      </div>
    </div>
  );
};

export default Hero;
