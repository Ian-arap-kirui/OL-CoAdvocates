import React from "react";
import "./home.css";
import Hero from "../../sections/Hero/Hero";
import Welcome from "../../sections/Welcome/Welcome";
import Practices from "../../sections/Practices/Practices";

const Home = () => {
  let page = "home";
  return (
    <>
      {" "}
      <Hero page={page} />
      <Welcome />
      <Practices page={page} />
    </>
  );
};

export default Home;
