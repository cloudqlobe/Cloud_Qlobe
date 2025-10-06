import { useRef } from "react";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Register from '../../Components/Register';
import Becomepartner from '../../Components/Becomepartner';
import HomeAchievement from '../../Components/Homeacheivemnet';
import Cliheader from './Components/Cliheader';
import Clicontent1 from './Components/Clicontent1';
import Clianimation from './Components/Clianimation';
import Clicontent2 from './Components/Clicontent2';

const Page = () => {
  const cliAnimationRef = useRef(null); // Scroll target for "Get Started"
  const cliContent1Ref = useRef(null);  // Scroll target for "Learn More"

  const handleScrollToAnimation = () => {
    if (cliAnimationRef.current) {
      cliAnimationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToContent1 = () => {
    if (cliContent1Ref.current) {
      cliContent1Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Navbar />

      <Cliheader
        onGetStartedClick={handleScrollToAnimation}
        onLearnMoreClick={handleScrollToContent1}
      />

      <Becomepartner />

      <div ref={cliContent1Ref}>
        <Clicontent1 />
      </div>

      <div ref={cliAnimationRef}>
        <Clianimation />
      </div>

      <Clicontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  );
};

export default Page;
