import React from "react";
import Navbar from "../components/Navbar";
import EventIntro from "../components/EventIntro";
import Features from "../components/Features";
import UpcomingEvents from "../components/UpComingEvents";
const Home = () => {
  return (
    <div>
      <Navbar />
      <EventIntro />
      <Features />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
