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
  const homeAnimationRef = useRef(null);
  const homeContent1Ref = useRef(null);

  const role = sessionStorage.getItem("role");
  const authToken = sessionStorage.getItem("authToken");

  const canShowScroller = role === "guest" || Boolean(authToken);

  const handleScrollToAnimation = () => {
    homeAnimationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleScrollToContent1 = () => {
    homeContent1Ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-white">
      <Navbar />

      <Homeheader
        onGetStartedClick={handleScrollToAnimation}
        onLearnMoreClick={handleScrollToContent1}
      />

      {/* Homescroller */}
      {canShowScroller && <Homescroller />}

      <Homeservices />

      {/* Learn More Section */}
      <div ref={homeContent1Ref}>
        <Homecontent1 />
      </div>

      {/* Get Started Section */}
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
