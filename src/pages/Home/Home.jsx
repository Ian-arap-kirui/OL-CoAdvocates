import React from "react";
import "./home.css";
import Hero from "../../sections/Hero/Hero";
import Welcome from "../../sections/Welcome/Welcome";
import Practices from "../../sections/Practices/Practices";
import Help from "../../sections/Help/Help";
import Partners from "../../sections/Partners/Partners";
import History from "../../sections/History/History";
import Testimonials from "../../sections/testimonials/Testimonials";
import Team from "../../sections/Team/Team";
import Consultation from "../../sections/Consultation/Consultation";

const Home = () => {
  let page = "home";
  return (
    <>
      {" "}
      <Hero page={page} />
      <Welcome />
      <Practices page={page} />
      <Help page={page} />
      <Partners page={page} />
      <History page={page} />
      <Testimonials page={page} />
      <Team page={page} />
      <Consultation page={page} />
    </>
  );
};

export default Home;
