import Navbar from "../../../public/Components/Navbar";
import Footer from "../../../public/Components/Footer";
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