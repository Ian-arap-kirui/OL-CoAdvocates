import React from "react";
import "./home.css";
import Hero from "../../sections/Hero/Hero";
import Welcome from "../../sections/Welcome/Welcome";

const Home = () => {
  return (
    <>
      {" "}
      <Hero page="home" />
      <Welcome />
    </>
  );
};

export default Home;
