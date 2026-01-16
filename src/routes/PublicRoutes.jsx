import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

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
import SocialMediaIcons from "../public/Components/Socialmediaicons.jsx";
import Specialrate from "../public/Components/Specialrate.jsx";
import Ratespages from "../public/Rates/pages.jsx";

const PublicRoutes = () => {
  const location = useLocation();
  const isRatePage = location.pathname === "/rates";

  const role = sessionStorage.getItem("role");
  const authToken = sessionStorage.getItem("authToken");

  const canAccessRates = role === "guest" || Boolean(authToken);

  return (
    <>
      {!isRatePage && <SocialMediaIcons />}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<Aboutpages />} />
        <Route path="/contact" element={<Contactpages />} />
        <Route path="/faq" element={<Faqpages />} />

        {/* Protected Rates Page */}
        <Route
          path="/rates"
          element={
            canAccessRates ? <Ratespages /> : <Navigate to="/customer/login" replace />
          }
        />

        {/* Service Pages */}
        <Route path="/services/cc-routes" element={<CcRoutes />} />
        <Route path="/services/cli-voice" element={<CliVoice />} />
        <Route path="/services/dialer-solutions" element={<DialerSolutions />} />
        <Route path="/services/did-solutions" element={<DidSolutions />} />
        <Route path="/services/server-hosting" element={<ServerHosting />} />
        <Route path="/services/voip-websites" element={<VoipWebsites />} />
      </Routes>

      {/* Special Rate Section */}
      {canAccessRates && <Specialrate />}
    </>
  );
};

export default PublicRoutes;
