import Navbar from "../../../public/Components/Navbar";
import Footer from "../../../public/Components/Footer";
import Register from "../../../public/Components/Register";
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