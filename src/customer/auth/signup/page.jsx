import Navbar from "../../../public/Components/Navbar";
import Footer from "../../../public/Components/Footer";
import HomeAchievement from "./registerBelow";
import ModernRegisterFlow from "./registerForm";
import SecurityPanelLayout from "./signupHeader";
import { useRef } from "react";

const Signup = () => {

    const Ref = useRef(null);

    const handleScroll = () => {
        if (Ref.current) {
            Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <Navbar />
            <SecurityPanelLayout onRegisterClick={handleScroll} />
            <div ref={Ref}>
                <ModernRegisterFlow />
            </div>
            <HomeAchievement />
            <Footer />
        </>
    );
};

export default Signup;