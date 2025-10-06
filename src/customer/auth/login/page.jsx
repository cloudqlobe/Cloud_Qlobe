import { useRef } from "react";
import Navbar from "../../../public/Components/Navbar";
import Footer from "../../../public/Components/Footer";
import Register from "../../../public/Components/Register";
import Loginpagemain from "./loginForm";
import SecurityPanelLayout from "./loginHeader";

const LoginPage = () => {
  const loginRef = useRef(null);

  const handleScrollToLogin = () => {
    if (loginRef.current) {
      loginRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />
      <SecurityPanelLayout onLoginClick={handleScrollToLogin} />

      {/* Add ref here */}
      <div ref={loginRef}>
        <Loginpagemain />
      </div>

      <Register />
      <Footer />
    </>
  );
};

export default LoginPage;
