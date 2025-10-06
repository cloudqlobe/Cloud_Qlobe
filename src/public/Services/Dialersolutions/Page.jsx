import { useRef } from "react";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Register from '../../Components/Register';
import Becomepartner from '../../Components/Becomepartner';
import HomeAchievement from '../../Components/Homeacheivemnet';
import Dailerheader from './Components/Dailerheader';
import Dailercontent1 from './Components/Dailercontent1';
import Daileranimation from './Components/Daileranimation';
import Dailercontent2 from './Components/Dailercontent2';

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

      <Dailerheader 
        onGetStartedClick={handleScrollToAnimation} 
        onLearnMoreClick={handleScrollToContent1} 
      />

      <Becomepartner />

      <div ref={content1Ref}>
        <Dailercontent1 />
      </div>

      <div ref={animationRef}>
        <Daileranimation />
      </div>

      <Dailercontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  );
};

export default Page;
