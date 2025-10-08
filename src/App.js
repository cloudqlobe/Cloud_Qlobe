import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes.jsx";
import CustomerRoutes from "./routes/CustomerRoutes.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";
import SuperAdminRoutes from "./routes/SuperAdminRoutes.jsx";
import MemberRoutes from "./routes/MemberRoutes.jsx";
import ScrollToTop from "./ScrollToTop.js";
import { useEffect } from "react";

function App() {

  useEffect(() => {
  const hideGoogleTranslate = () => {
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate { display: none !important; }
      body { top: 0px !important; }
    `;
    document.head.appendChild(style);
  };
  hideGoogleTranslate();
}, []);


  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<PublicRoutes />} />

        {/* Customer Routes */}
        <Route path="/customer/*" element={<CustomerRoutes />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* SuperAdmin Routes */}
        <Route path="/superadmin/*" element={<SuperAdminRoutes />} />

        {/* Member Routes */}
        <Route path="/member/*" element={<MemberRoutes />} />
      </Routes>

    </Router>
  );
}

export default App;