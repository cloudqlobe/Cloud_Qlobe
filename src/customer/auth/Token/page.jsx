import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosinstance";
import CustomerAuthContext from "../../../context/customer/CustomerAuthContext";

const VerifyTokenPage = () => {
  const navigate = useNavigate();
  const { updateCustomerDetails } = useContext(CustomerAuthContext)
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const tempAuthToken = sessionStorage.getItem("tempAuthToken");
    if (!tempAuthToken) {
      navigate("/customer/login");
    }
  }, [navigate]);

  useEffect(() => {
    let timer;
    if (resendDisabled && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
      setCountdown(60);
    }
    return () => clearTimeout(timer);
  }, [resendDisabled, countdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const tempAuthToken = sessionStorage.getItem("tempAuthToken");
      const res = await axiosInstance.post(
        "/api/verify-token",
        { token, tempAuthToken },
        { withCredentials: true }
      );

      sessionStorage.setItem("authToken", JSON.stringify(res.data.authToken))
      sessionStorage.removeItem("tempAuthToken");
      updateCustomerDetails(res.data.authToken);
      navigate("/customer/dashboard");
    } catch (err) {
      console.error("Verification error:", err);
      setError(
        err.response?.data?.error ||
        "Verification failed. Please check the token and try again."
      );
    }

  };

  const handleResendToken = async () => {
    setResendDisabled(true);
    try {
      const tempAuthToken = sessionStorage.getItem("tempAuthToken");
      await axiosInstance.post("/api/resend-token", { tempAuthToken });
    } catch (err) {
      console.error("Resend error:", err);
      setError("Failed to resend token. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify Your Identity
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We've sent a 6-digit verification code to your email
          </p>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">{error}</h3>
              </div>
            </div>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="token" className="sr-only">
                Verification Token
              </label>
              <input
                id="token"
                name="token"
                type="text"
                pattern="\d{6}"
                maxLength="6"
                required
                value={token}
                onChange={(e) => setToken(e.target.value.replace(/\D/g, ''))}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm text-center text-xl tracking-widest"
                placeholder="Enter Your OTP Code "
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </>
              ) : 'Verify Token'}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={handleResendToken}
            disabled={resendDisabled}
            className={`text-sm text-yellow-600 hover:text-yellow-500 ${resendDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {resendDisabled ? `Resend in ${countdown}s` : "Didn't receive a code? Resend"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyTokenPage;