import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Specialrate from "./customer/Components/Specialrate.jsx";
import PublicRoutes from "./routes/PublicRoutes.jsx";
import CustomerRoutes from "./routes/CustomerRoutes.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";
import SuperAdminRoutes from "./routes/SuperAdminRoutes.jsx";
import MemberRoutes from "./routes/MemberRoutes.jsx";

function App() {
  return (
    <Router>
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

      <Specialrate />
    </Router>
  );
}

export default App;