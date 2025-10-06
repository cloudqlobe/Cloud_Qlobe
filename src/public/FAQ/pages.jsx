import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Register from "../Components/Register";
import Becomepartner from "../Components/Becomepartner";
import HomeAchievement from "../Components/Homeacheivemnet";
import FaqHeader from "./Components/Faqheader";
import Faqquires from "./Components/Faqquires";

const Faqpages = () => {
  const registerRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <Navbar />
      <FaqHeader
        onGetStartedClick={scrollToRegister}
        onLearnMoreClick={scrollToFaq}
      />
      <Becomepartner />
      <div ref={faqRef}>
        <Faqquires />
      </div>
      <HomeAchievement />
      <div ref={registerRef}>
        <Register />
      </div>
      <Footer />
    </div>
  );
};

export default Faqpages;
