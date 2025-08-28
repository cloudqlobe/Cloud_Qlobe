import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    User, Wifi,
    Phone, Router, Smartphone, Network,
    Settings, CreditCard, LogOut,
    Bell, ChevronDown, DollarSign, MessageCircle,
    Zap, Shield, TrendingUp, Activity
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import CustomerAuthContext from "../../../context/customer/CustomerAuthContext";
import axiosInstance from "../../../utils/axiosinstance";

const Dashboard = () => {
    const { customerDetails } = useContext(CustomerAuthContext);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [notifications, setNotifications] = useState(3);
    const navigate = useNavigate();

    const quickActions = [
        { icon: Phone, title: "CC Routes ", desc: "Manage voice calls & routing", color: "text-green-600", bgColor: "from-green-50 to-emerald-50", borderColor: "border-green-200" },
        { icon: Smartphone, title: "CLI Routes", desc: "Monitor mobile connectivity", color: "text-blue-600", bgColor: "from-blue-50 to-sky-50", borderColor: "border-blue-200" },
        { icon: Router, title: "DID Solutions", desc: "Configure network settings", color: "text-purple-600", bgColor: "from-purple-50 to-violet-50", borderColor: "border-purple-200" },
        { icon: Network, title: "Voip Websites", desc: "View network performance", color: "text-orange-600", bgColor: "from-orange-50 to-amber-50", borderColor: "border-orange-200" },
        { icon: Shield, title: "Hosting Solutions", desc: "Network security monitoring", color: "text-red-600", bgColor: "from-red-50 to-rose-50", borderColor: "border-red-200" },
        { icon: Activity, title: "Dailer Solutions", desc: "Real-time performance metrics", color: "text-indigo-600", bgColor: "from-indigo-50 to-blue-50", borderColor: "border-indigo-200" },
    ];

    const recentActivity = [
        { title: "Network optimization completed", time: "5 mins ago", status: "success", icon: Zap },
        { title: "New base station activated", time: "12 mins ago", status: "info", icon: Wifi },
        { title: "Security scan completed", time: "25 mins ago", status: "success", icon: Shield },
        { title: "Bandwidth usage alert", time: "1 hour ago", status: "warning", icon: TrendingUp },
    ];

    // ✅ Handle menu item clicks
    const handleUserMenuClick = async (label) => {
        if (label === "My Account") {
            navigate("/profile"); // ✅ Navigate to My Account page
        } else if (label === "Settings") {
            navigate("/settings"); // ✅ Navigate to Settings page
        } else if (label === "Logout") {
            try {
                await axiosInstance.post('/api/logout', {}, { withCredentials: true }); // ✅ API logout
                sessionStorage.removeItem('authToken'); // ✅ Remove token
                navigate('/login'); // ✅ Redirect to login
            } catch (error) {
                console.error("Logout error:", error);
                // Optionally show a toast or alert here
            }
        }
        setUserMenuOpen(false); // ✅ Close dropdown after action
    };


    const userMenuItems = [
        { icon: User, label: "My Account", color: "text-blue-600" },
        { icon: Settings, label: "Settings", color: "text-gray-600" },
        { icon: LogOut, label: "Logout", color: "text-red-600" },
    ];

    // Action Tabs for Right Side with navigation paths
    const actionTabs = [
        {
            label: "Payment Center",
            icon: CreditCard,
            gradient: "from-emerald-400 to-green-500",
            bgGradient: "from-emerald-50 to-green-50",
            description: "Manage billing & payments",
            delay: 0.4,
            path: "/payment" // ✅ route
        },
        {
            label: "My Rates",
            icon: DollarSign,
            gradient: "from-blue-400 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50",
            description: "View & upgrade plans",
            delay: 0.5,
            path: "/my-rates"
        },
        {
            label: "24/7 Support",
            icon: MessageCircle,
            gradient: "from-purple-400 to-indigo-500",
            bgGradient: "from-purple-50 to-indigo-50",
            description: "Get instant help",
            delay: 0.6,
            path: "/support"
        },
        {
            label: "Profile Settings",
            icon: Settings,
            gradient: "from-orange-400 to-amber-500",
            bgGradient: "from-orange-50 to-amber-50",
            description: "Account preferences",
            delay: 0.7,
            path: "/profile"
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="p-6 space-y-8 mt-[100px]">
                {/* Welcome Section */}
                <motion.div
                    className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Left Welcome Card */}
                        <motion.div
                            className="lg:col-span-2 bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 text-white p-6 rounded-2xl relative overflow-hidden group h-[250px]"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Notification & User Menu */}
                            <div className="absolute top-4 right-4 flex items-center space-x-4 z-20">
                                {/* Notifications */}
                                <motion.button
                                    className="relative p-3 bg-white/20 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Bell className="w-5 h-5 text-white" />
                                    {notifications > 0 && (
                                        <motion.span
                                            className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-md"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 500, damping: 15 }}
                                        >
                                            {notifications}
                                        </motion.span>
                                    )}
                                </motion.button>

                                {/* User Dropdown */}
                                <div className="relative">
                                    <motion.button
                                        className="flex items-center space-x-2 px-3 py-2 bg-white/30 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300"
                                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="w-8 h-8 bg-white/30 rounded-lg flex items-center justify-center">
                                            <User className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="hidden sm:block text-left text-white">
                                            <div className="text-xs font-bold">{customerDetails.name}</div>
                                            <div className="text-[10px] opacity-80">Administrator</div>
                                        </div>
                                        <ChevronDown
                                            className={`w-4 h-4 text-white transition-transform duration-300 ${userMenuOpen ? "rotate-180" : ""}`}
                                        />
                                    </motion.button>

                                    <AnimatePresence>
                                        {userMenuOpen && (
                                            <motion.div
                                                className="absolute right-0 mt-2 w-52 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 py-3"
                                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {userMenuItems.map((item, i) => (
                                                    <motion.button
                                                        key={i}
                                                        onClick={() => handleUserMenuClick(item.label)} // ✅ Added
                                                        className="w-full flex items-center space-x-3 px-5 py-2 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-200 rounded-lg"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center">
                                                            <item.icon className={`w-4 h-4 ${item.color}`} />
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-700">
                                                            {item.label}
                                                        </span>
                                                    </motion.button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Welcome Content */}
                            <div className="relative z-10 flex justify-between h-full mt-8">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <motion.div
                                            className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <User className="w-6 h-6" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-default">Welcome back!</h3>
                                            <p className="text-yellow-400 flex items-center space-x-2 text-sm">
                                                <span>{customerDetails.name}</span>
                                                <span>👋</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mt-[50px]">
                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div>
                                                <p className="text-white">ID: {customerDetails.customerId}</p>
                                                <p className="text-white">Company Name : {customerDetails.companyName}</p>
                                            </div>
                                            <div>
                                                <p className="text-white">{customerDetails.address}</p>
                                                <p className="text-white">{customerDetails.companyEmail}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side Action Tabs */}
                        <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                            {actionTabs.map((tab, i) => (
                                <motion.div
                                    key={i}
                                    className={`bg-gradient-to-br ${tab.bgGradient} border border-white/50 p-4 rounded-xl group hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden h-[100px]`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: tab.delay }}
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    onClick={() => navigate(tab.path)} // ✅ Navigate on click
                                >
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
                                    <div className="relative z-10 flex items-center space-x-3 h-full">
                                        <motion.div
                                            className={`w-10 h-10 bg-gradient-to-r ${tab.gradient} rounded-xl flex items-center justify-center shadow-md`}
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <tab.icon className="w-5 h-5 text-white" />
                                        </motion.div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-800 text-sm mb-1">{tab.label}</h3>
                                            <p className="text-xs text-gray-600">{tab.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-default text-gray-800 mb-6 flex items-center">
                            <Zap className="w-6 h-6 mr-3 text-blue-600" />
                            Quick Actions
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {quickActions.map((action, i) => (
                                <motion.div
                                    key={i}
                                    className={`group p-6 rounded-2xl border-2 ${action.borderColor} cursor-pointer transition-all duration-300 hover:shadow-xl bg-gradient-to-br ${action.bgColor} hover:scale-105`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 + 0.6 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <motion.div
                                            className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <action.icon className={`w-6 h-6 ${action.color}`} />
                                        </motion.div>
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-2">{action.title}</h3>
                                    <p className="text-sm text-gray-600">{action.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <motion.div
                        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                            <Activity className="w-5 h-5 mr-2 text-blue-600" />
                            Recent Activity
                        </h2>
                        <div className="space-y-4">
                            {recentActivity.map((activity, i) => (
                                <motion.div
                                    key={i}
                                    className={`p-4 rounded-xl border-l-4 ${activity.status === "success"
                                        ? "border-green-500 bg-green-50"
                                        : activity.status === "warning"
                                            ? "border-yellow-500 bg-yellow-50"
                                            : "border-blue-500 bg-blue-50"
                                        } hover:shadow-md transition-shadow duration-300`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.8 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="flex items-start space-x-3">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <activity.icon className={`w-5 h-5 mt-0.5 ${activity.status === "success"
                                                ? "text-green-600"
                                                : activity.status === "warning"
                                                    ? "text-yellow-600"
                                                    : "text-blue-600"
                                                }`} />
                                        </motion.div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-sm text-gray-800">{activity.title}</p>
                                            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
