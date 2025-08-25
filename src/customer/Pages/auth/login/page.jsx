import Footer from "../../../Components/Footer";
import Navbar from "../../../Components/Navbar";
import Register from "../../../Components/Register";
import Loginpagemain from "./loginForm";
import SecurityPanelLayout from "./loginHeader";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <SecurityPanelLayout />
      <Loginpagemain />
      <Register />
      <Footer />
    </>
  );
};

export default LoginPage;