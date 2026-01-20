import Navbar from "../../../public/Components/Navbar";
import Footer from "../../../public/Components/Footer";
import HomeAchievement from "./registerBelow";
import ModernRegisterFlow from "./registerForm";
import SecurityPanelLayout from "./signupHeader";
import { useRef, useState } from "react";

const Signup = () => {
  const Ref = useRef(null);
  const [formType, setFormType] = useState("customer"); // ⭐ SOURCE OF TRUTH

  const handleScroll = (type) => {
    setFormType(type); // ⭐ update form type
    if (Ref.current) {
      Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />

      <SecurityPanelLayout onRegisterClick={handleScroll} selectedType={formType} />

      <div ref={Ref}>
        <ModernRegisterFlow FormType={formType} />
      </div>

      <HomeAchievement />
      <Footer />
    </>
  );
};

export default Signup;
