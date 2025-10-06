import { useRef } from "react";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Register from '../Components/Register';
import Becomepartner from '../Components/Becomepartner';
import Contactheader from './Components/Contactheader';
import Contactcontent1 from './Components/Contactcontent1';
import Contactanimation from './Components/Contactanimation';

const Contactpages = () => {
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

      <Contactheader
        onGetStartedClick={handleScrollToAnimation}
        onLearnMoreClick={handleScrollToContent1}
      />

      <Becomepartner />

      <div ref={content1Ref}>
        <Contactcontent1 />
      </div>
      <Contactanimation />
      <div ref={animationRef}>
        <Register />
      </div>
      <Footer />
    </div>
  );
};

export default Contactpages;
