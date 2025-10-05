import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import CcRoutes from "../public/Services/Ccroutes/Page.jsx";
import CliVoice from "../public/Services/Clivoiceterminations/Page.jsx";
import DialerSolutions from "../public/Services/Dialersolutions/Page.jsx";
import DidSolutions from "../public/Services/Didsolutions/Page.jsx";
import ServerHosting from "../public/Services/Serverhosting/Page.jsx";
import VoipWebsites from "../public/Services/Voipwebsites/Page.jsx";
import Homepages from "../public/Home/pages.jsx";
import Aboutpages from "../public/About/pages.jsx";
import Contactpages from "../public/contact/pages.jsx";
import Faqpages from "../public/FAQ/pages.jsx";
import Ratepages from "../public/Rates/pages.jsx";
import SocialMediaIcons from "../public/Components/Socialmediaicons.jsx";
import Specialrate from "../public/Components/Specialrate.jsx";

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
        <Route path="/services/cc-routes" element={<CcRoutes />} />
        <Route path="/services/cli-voice" element={<CliVoice />} />
        <Route path="/services/dialer-solutions" element={<DialerSolutions />} />
        <Route path="/services/did-solutions" element={<DidSolutions />} />
        <Route path="/services/server-hosting" element={<ServerHosting />} />
        <Route path="/services/voip-websites" element={<VoipWebsites />} />
      </Routes>
      {!isRatePage && <Specialrate />}
    </>
  );
};

export default PublicRoutes;