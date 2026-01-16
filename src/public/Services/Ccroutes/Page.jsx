import { useRef } from "react";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Register from '../../Components/Register';
import Becomepartner from '../../Components/Becomepartner';
import HomeAchievement from '../../Components/Homeacheivemnet';
import Ccheader from './Components/Ccheader';
import Cccontent1 from './Components/Cccontent1';
import Ccanimation from './Components/Ccanimation';
import Cccontent2 from './Components/Cccontent2';

const Page = () => {
  const ccAnimationRef = useRef(null); // Scroll target for "Get Started"
  const ccContent1Ref = useRef(null);  // Scroll target for "Learn More"

  const handleScrollToAnimation = () => {
    if (ccAnimationRef.current) {
      ccAnimationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToContent1 = () => {
    if (ccContent1Ref.current) {
      ccContent1Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Navbar />
      
      <Ccheader 
        onGetStartedClick={handleScrollToAnimation} 
        onLearnMoreClick={handleScrollToContent1} 
      />

      <Becomepartner />

      <div ref={ccContent1Ref}>
        <Cccontent1 />
      </div>

      <div ref={ccAnimationRef}>
        <Ccanimation />
      </div>

      <Cccontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  );
};

export default Page;
