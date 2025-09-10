import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import CcRoutes from "../customer/Pages/Services/Ccroutes/Page.jsx";
import CliVoice from "../customer/Pages/Services/Clivoiceterminations/Page.jsx";
import DialerSolutions from "../customer/Pages/Services/Dialersolutions/Page.jsx";
import DidSolutions from "../customer/Pages/Services/Didsolutions/Page.jsx";
import ServerHosting from "../customer/Pages/Services/Serverhosting/Page.jsx";
import VoipWebsites from "../customer/Pages/Services/Voipwebsites/Page.jsx";
import Homepages from "../customer/Pages/Home/pages.jsx";
import Aboutpages from "../customer/Pages/About/pages.jsx";
import Contactpages from "../customer/Pages/contact/pages.jsx";
import Faqpages from "../customer/Pages/FAQ/pages.jsx";
import Ratepages from "../customer/Pages/Rates/pages.jsx";
import SocialMediaIcons from "../customer/Components/Socialmediaicons.jsx";
import Specialrate from "../customer/Components/Specialrate.jsx";

const PublicRoutes = () => {
  const location = useLocation();
  const isRatePage = location.pathname === "/rates";

  return (
    <>
      {!isRatePage && <SocialMediaIcons />}
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<Aboutpages />} />
        <Route path="/contact" element={<Contactpages />} />
        <Route path="/rates" element={<Ratepages />} />
        <Route path="/faq" element={<Faqpages />} />

        {/* Service Pages */}
        <Route path="/cc-routes" element={<CcRoutes />} />
        <Route path="/cli-voice" element={<CliVoice />} />
        <Route path="/dialer-solutions" element={<DialerSolutions />} />
        <Route path="/did-solutions" element={<DidSolutions />} />
        <Route path="/server-hosting" element={<ServerHosting />} />
        <Route path="/voip-websites" element={<VoipWebsites />} />
      </Routes>
      {!isRatePage && <Specialrate />}
    </>
  );
};

export default PublicRoutes;