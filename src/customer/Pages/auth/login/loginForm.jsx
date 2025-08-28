import { useState } from "react";
import { Lightbulb, Briefcase, Megaphone, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../utils/axiosinstance";

const Loginpagemain = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "shanu",
    password: "Aa123456@",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axiosInstance.post("/api/login", formData);
      sessionStorage.setItem("tempAuthToken",response?.data.tempAuthToken)
      navigate('/verify-token')
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || 
        "Login failed. Please check your credentials and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-gray-100">
      {/* Main content */}
      <div className="flex flex-1">
        {/* Left Side - Stacked blocks */}
        <div className="hidden md:flex w-1/2 flex-col justify-center bg-gradient-to-b from-blue-800 to-teal-800 p-8 gap-6">
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
            <div
              key={index}
              className="flex bg-white shadow-md rounded-md overflow-hidden"
            >
              {/* Icon box */}
              <div
                className={`${block.color} p-5 flex items-center justify-center`}
              >
                {block.icon}
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{block.title}</h3>
                <p className="text-gray-600 text-sm">{block.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Username / Customer ID
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username or customerid"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none bg-white"
                  required
                />
              </div>
              <div className="text-right">
                <a href="/forgot-password" className="text-sm text-yellow-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
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