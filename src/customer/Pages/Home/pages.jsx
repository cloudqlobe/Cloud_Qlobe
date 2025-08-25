import React from "react";
import Homeheader from "./Components/Homeheader";
import Homecontent1 from "./Components/Homecontent1";
import Homescroller from "./Components/Homescroller";
import Homecontent2 from "./Components/Homecontent2";
import Homeanimation from "./Components/Homeanimation";
import Footer from "../../Components/Footer";
import Homeservices from "./Components/Homeservices";
import Register from "../../Components/Register";
import Navbar from "../../Components/Navbar";
import HomeAchievement from "../../Components/Homeacheivemnet";

const Homepages = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Homeheader />
      <Homescroller />
      <Homeservices />
      <Homecontent1 />
      <Homeanimation />
      <Homecontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  );
};

export default Homepages;
