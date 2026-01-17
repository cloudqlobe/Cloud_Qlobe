import { useState } from "react";
import { Lightbulb, Briefcase, Megaphone, Award, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosinstance";
import { useLoader } from "../../../context/LoaderContext/page";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Loginpagemain = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { isLoading, setIsLoading } = useLoader();
  const [error, setError] = useState("");
  const [isGuest, setIsGuest] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let response;

      if (isGuest) {
        // 👉 Guest Login
        response = await axiosInstance.post("/api/guest/login", {
          customerId: formData.username,
          password: formData.password,
        });

        sessionStorage.setItem("role", "guest");

        toast.success("Guest login successful 🎉");

        navigate("/rates");
      }
      else {
        // 👉 Customer Login
        response = await axiosInstance.post("/api/login", formData);

        sessionStorage.setItem("tempAuthToken", response.data.tempAuthToken);
        navigate("/customer/verify-token");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message ||
        "Login failed. Please check your credentials and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex flex-col h-[600px] bg-gray-100">
      {/* Main content */}
      <div className="flex flex-1">
        {/* Left Side - Stacked blocks */}
        {/* SEO-friendly section */}
        <section className="hidden md:flex w-1/2 flex-col justify-center bg-gradient-to-b from-blue-800 to-teal-800 p-8 gap-6">
          <h2 className="sr-only">Our Core Strengths</h2> {/* Section heading for SEO */}

          {[
            {
              color: "bg-orange-500",
              icon: <Lightbulb size={28} className="text-white" />,
              title: "Creative",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh sit amet.",
            },
            {
              color: "bg-purple-600",
              icon: <Briefcase size={28} className="text-white" />,
              title: "Planning",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh sit amet.",
            },
            {
              color: "bg-cyan-500",
              icon: <Megaphone size={28} className="text-white" />,
              title: "Marketing",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh sit amet.",
            },
            {
              color: "bg-green-500",
              icon: <Award size={28} className="text-white" />,
              title: "Success",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh sit amet.",
            },
          ].map((block, index) => (
            <article
              key={index}
              className="flex bg-white shadow-md rounded-md overflow-hidden"
            >
              {/* Icon box */}
              <div
                className={`${block.color} p-5 flex items-center justify-center`}
                aria-hidden="true" // icons are decorative, not needed for SEO
              >
                {block.icon}
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{block.title}</h3>
                <p className="text-gray-600 text-sm">{block.text}</p>
              </div>
            </article>
          ))}
        </section>


        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
          <div className="w-full max-w-md">
            <div className="flex justify-between items-baseline">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Login</h1>
              <p
                className="text-blue-500 font-semibold cursor-pointer hover:underline"
                onClick={() => setIsGuest(!isGuest)}
              >
                Switch to {isGuest ? "Customer Login" : "Guest Login"}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  {isGuest ? "Customer ID" : "Username / Customer ID"}
                </label>

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder={
                    isGuest
                      ? "Enter your Customer ID"
                      : "Enter your username or customer ID"
                  }
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none bg-white"
                  required
                />

              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-600">
                  Password
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="mt-1 block w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none bg-white"
                  required
                />

                {/* Eye Icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {!isGuest && (
                <div className="flex justify-between items-center text-sm">
                  <a
                    href="/customer/forgot-password"
                    className="text-yellow-500 hover:underline"
                  >
                    Forgot password?
                  </a>

                  <a
                    href="/customer/register"
                    className="text-yellow-500 hover:underline"
                  >
                    Don’t have an account? Register
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-yellow-400 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition flex justify-center items-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpagemain;