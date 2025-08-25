import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import HomeAchievement from "./registerBelow";
import ModernRegisterFlow from "./registerForm";
import SecurityPanelLayout from "./signupHeader";

const Signup = () => {
    return (
        <>
            <Navbar />
            <SecurityPanelLayout />
            <ModernRegisterFlow />
            <HomeAchievement />
            <Footer />
        </>
    );
};

export default Signup;