import { useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Register from "../Components/Register";
import Homeheader from "./Components/Homeheader";
import Homecontent1 from "./Components/Homecontent1";
import Homecontent2 from "./Components/Homecontent2";
import Homeanimation from "./Components/Homeanimation";
import Homeservices from "./Components/Homeservices";
import HomeAchievement from "../Components/Homeacheivemnet";
import Chatbot from "../chatbot/page";
import Homescroller from "../Components/Homescroller";

const Homepages = () => {
  const homeAnimationRef = useRef(null); // Ref for Homeanimation
  const homeContent1Ref = useRef(null);  // Ref for Homecontent1

  const handleScrollToAnimation = () => {
    if (homeAnimationRef.current) {
      homeAnimationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToContent1 = () => {
    if (homeContent1Ref.current) {
      homeContent1Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white">
      <Navbar />
      <Homeheader 
        onGetStartedClick={handleScrollToAnimation} 
        onLearnMoreClick={handleScrollToContent1} 
      /> 
      <Homescroller />
      <Homeservices />

      {/* Section to scroll to when "Learn More" is clicked */}
      <div ref={homeContent1Ref}>
        <Homecontent1 />
      </div>

      {/* Section to scroll to when "Get Started" is clicked */}
      <div ref={homeAnimationRef}>
        <Homeanimation />
      </div>

      <Homecontent2 />
      <HomeAchievement />
      <Chatbot />
      <Register />
      <Footer />
    </div>
  );
};

export default Homepages;
