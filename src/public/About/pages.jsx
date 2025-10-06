import { useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Register from "../Components/Register";
import Becomepartner from "../Components/Becomepartner";
import HomeAchievement from "../Components/Homeacheivemnet";
import Aboutheader from "./Components/Aboutheader";
import Aboutcontent1 from "./Components/Aboutcontent1";
import Aboutanimation from "./Components/Aboutanimation";
import Aboutcontent2 from "./Components/Aboutcontent2";

const Aboutpages = () => {
  const aboutAnimationRef = useRef(null);  // Scroll target for "Get Started"
  const aboutContent1Ref = useRef(null);   // Scroll target for "Learn More"

  const handleScrollToAnimation = () => {
    if (aboutAnimationRef.current) {
      aboutAnimationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToContent1 = () => {
    if (aboutContent1Ref.current) {
      aboutContent1Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Navbar />

      <Aboutheader 
        onGetStartedClick={handleScrollToAnimation} 
        onLearnMoreClick={handleScrollToContent1} 
      />

      <Becomepartner />

      {/* Section to scroll to when Learn More is clicked */}
      <div ref={aboutContent1Ref}>
        <Aboutcontent1 />
      </div>

      {/* Section to scroll to when Get Started is clicked */}
      <div ref={aboutAnimationRef}>
        <Aboutanimation />
      </div>

      <Aboutcontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  );
};

export default Aboutpages;
