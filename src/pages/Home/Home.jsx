import React from "react";
import "./home.css";
import Hero from "../../sections/Hero/Hero";
import Welcome from "../../sections/Welcome/Welcome";
import Practices from "../../sections/Practices/Practices";
import Help from "../../sections/Help/Help";
import Partners from "../../sections/Partners/Partners";
import History from "../../sections/History/History";

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
    </>
  );
};

export default Home;
