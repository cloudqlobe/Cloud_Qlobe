import { useContext } from "react";
import AdminAuthContext from "../context/admin/AdminAuthContext";
import Topbar from "./navbar/AdminNavbar";


const MemberDashboard = () => {
  const { adminDetails } = useContext(AdminAuthContext);
  if (!adminDetails || !adminDetails.id) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">You are not authorized to view this page.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <Topbar />
    </div>

  );
};



export default MemberDashboard;