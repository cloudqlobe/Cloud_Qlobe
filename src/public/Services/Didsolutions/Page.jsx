import { useRef } from "react";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Register from '../../Components/Register';
import Becomepartner from '../../Components/Becomepartner';
import HomeAchievement from '../../Components/Homeacheivemnet';
import Didheader from './Components/Didheader';
import Didcontent1 from './Components/Didcontent1';
import Didanimation from './Components/Didanimation';
import Didcontent2 from './Components/Didcontent2';

const Page = () => {
  const animationRef = useRef(null);  // Scroll target for "Get Started"
  const content1Ref = useRef(null);   // Scroll target for "Learn More"

  const handleScrollToAnimation = () => {
    if (animationRef.current) {
      animationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToContent1 = () => {
    if (content1Ref.current) {
      content1Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Navbar />

      <Didheader 
        onGetStartedClick={handleScrollToAnimation} 
        onLearnMoreClick={handleScrollToContent1} 
      />

      <Becomepartner />

      <div ref={content1Ref}>
        <Didcontent1 />
      </div>

      <div ref={animationRef}>
        <Didanimation />
      </div>

      <Didcontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  );
};

export default Page;
