import React, { useState } from 'react';
import {
    Building2,
    Hash,
    Mail,
    Users,
    Globe,
    Activity,
    Trophy,
    LogOut
} from 'lucide-react';
import Homescroller from '../../Components/Homescroller';
import axiosInstance from '../../../utils/axiosinstance';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [selectedCard, setSelectedCard] = useState(0);
    const [profileData] = useState({
        customerId: 'CUST123456',
        companyName: 'Example Corp',
        companyEmail: 'contact@example.com',
        country: 'India'
    });

    const stats = [
        { icon: Users, label: 'Active Users', value: '500', trend: '+12%' },
        { icon: Trophy, label: 'Success Ratio', value: '98%', trend: '+1%' },
        { icon: Globe, label: 'Destinations', value: '50', trend: '+8%' },
        { icon: Activity, label: 'Carriers Interconnections', value: '250+', trend: '+2%' },
    ];

    const company = {
        id: profileData?.customerId || "NA",
        name: profileData?.companyName || "NA",
        email: profileData?.companyEmail || "NA",
        country: profileData?.country || "NA"
    };

const handleLogout = async () => {
    try {
        await axiosInstance.post("/api/logout", {}, { withCredentials: true }); // ✅ send cookies
        sessionStorage.removeItem("authToken");
        navigate('/login');
    } catch (err) {
        console.error("Logout error:", err);
    }
    sessionStorage.clear();
};

    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
            {/* Top Bar */}
            <div className="flex justify-between items-center bg-white shadow-sm px-6 py-4 sticky top-0 z-10">
                <h1 className="text-xl font-bold text-gray-800">📊 Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>

            <div className="flex flex-col items-center space-y-8 px-4 py-8 w-full max-w-[1400px] mx-auto">
                {/* Welcome + Company Info */}
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 gap-6 w-full">
                    {/* Welcome Section */}
                    <div className="md:w-1/3 flex flex-col justify-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                            <Building2 className="text-orange-600" size={28} />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
                            Welcome back to our<br />dashboard 👋
                        </h1>
                        <p className="text-gray-500">Stay updated with our latest updates</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px bg-gray-200" />

                    {/* Company Details */}
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: Hash, label: 'Customer ID', value: company.id },
                            { icon: Building2, label: 'Company Name', value: company.name },
                            { icon: Mail, label: 'Contact Email', value: company.email },
                            { icon: Globe, label: 'Country', value: company.country }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group bg-orange-50 hover:bg-orange-100 rounded-lg p-4 transition-all duration-200 shadow-sm"
                            >
                                <div className="flex items-center space-x-3 mb-2">
                                    <item.icon size={18} className="text-orange-600" />
                                    <span className="text-sm font-medium text-gray-500">{item.label}</span>
                                </div>
                                <p className="text-gray-800 font-medium pl-7">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        const backgroundColors = [
                            'bg-green-500',
                            'bg-orange-400',
                            'bg-blue-400',
                            'bg-rose-500'
                        ];

                        return (
                            <div
                                key={index}
                                className={`p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${selectedCard === index ? 'ring-2 ring-offset-2 ring-gray-200' : ''
                                    } ${backgroundColors[index % backgroundColors.length]}`}
                                onClick={() => setSelectedCard(index)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="p-2 bg-white/20 rounded-lg">
                                        <Icon className="text-white" size={24} />
                                    </div>
                                    <span className={`text-sm font-medium ${stat.trend.startsWith('+') ? 'text-white' : 'text-red-100'}`}>
                                        {stat.trend}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mt-4">{stat.value}</h3>
                                <p className="text-white text-sm">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Scroller Section */}
                <div className="bg-white p-4 rounded-xl shadow-sm w-full">
                    <Homescroller />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
