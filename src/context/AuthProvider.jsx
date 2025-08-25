import { useState } from "react";
import AuthContext from "./AuthContext"; // ✅ fixed import

const AuthProvider = ({ children }) => {
  const [memberDetails, setMemberDetails] = useState(() => {
    const saved = sessionStorage.getItem("MemberAuthToken");
    return saved
      ? JSON.parse(saved)
      : {
          role: "",
          name: "",
          email: "",
          id: "",
        };
  });
console.log(memberDetails);

  const updateMemberDetails = (data) => {
    setMemberDetails(data);
    sessionStorage.setItem("MemberAuthToken", JSON.stringify(data));
  };

  const clearMemberDetails = () => {
    setMemberDetails({ role: "", name: "", email: "", id: "" });
    sessionStorage.removeItem("MemberAuthToken");
  };

  return (
    <AuthContext.Provider value={{ memberDetails, updateMemberDetails, clearMemberDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
