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
import ContactSection from "../../sections/ContactSection/ContactSection";
import RecentBlogs from "../../sections/RecentBlogs/RecentBlogs";
import { Blogs } from "../../utils/data";

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
      <ContactSection page={page} />
      <RecentBlogs page={page} blogs={Blogs} />
    </>
  );
};

export default Home;
