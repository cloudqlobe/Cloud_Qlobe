import { useRef } from "react";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Register from '../../Components/Register';
import Becomepartner from '../../Components/Becomepartner';
import HomeAchievement from '../../Components/Homeacheivemnet';
import Voipwebsitesheader from './Components/Voipwebsitesheader';
import Voipcontent1 from './Components/Voipcontent1';
import Voipanimation from './Components/Voipanimation';
import Voipcontent2 from './Components/Voipcontent2';

const Page = () => {
  const animationRef = useRef(null); // Scroll target for "Get Started"
  const content1Ref = useRef(null);  // Scroll target for "Learn More"

  const handleScrollToAnimation = () => {
    animationRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollToContent1 = () => {
    content1Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <Navbar />

      <Voipwebsitesheader
        onGetStartedClick={handleScrollToAnimation}
        onLearnMoreClick={handleScrollToContent1}
      />

      <Becomepartner />

      <div ref={content1Ref}>
        <Voipcontent1 />
      </div>

      <div ref={animationRef}>
        <Voipanimation />
      </div>

      <Voipcontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  );
};

export default Page;
