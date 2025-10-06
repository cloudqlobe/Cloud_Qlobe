import { useRef } from "react";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Register from '../../Components/Register';
import Becomepartner from '../../Components/Becomepartner';
import HomeAchievement from '../../Components/Homeacheivemnet';
import Hostingheader from './Components/Hostingheader';
import Servercontent1 from './Components/Servercontent1';
import Serveranimation from './Components/Serveranimation';
import Servercontent2 from './Components/Servercontent2';

const Page = () => {
  const animationRef = useRef(null); // Scroll target for "Get Started"
  const content1Ref = useRef(null);  // Scroll target for "Learn More"

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

      <Hostingheader 
        onGetStartedClick={handleScrollToAnimation} 
        onLearnMoreClick={handleScrollToContent1} 
      />

      <Becomepartner />

      <div ref={content1Ref}>
        <Servercontent1 />
      </div>

      <div ref={animationRef}>
        <Serveranimation />
      </div>

      <Servercontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  );
};

export default Page;
