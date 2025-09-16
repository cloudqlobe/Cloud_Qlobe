import { useEffect, useState } from 'react';
import KeyMetrics from './Components/KeyMetrics';
import UserDistribution from './Components/UserDistribution';
import QuickStats from './Components/QuickStats';
import TopPerformers from './Components/TopPerformers';
import RecentActivity from './Components/RecentActivity';
import TradingGrowthChart from './Components/TradingGrowthChart';
import ActionButtons from './Components/ActionButtons';
import axiosInstance from '../../utils/axiosinstance';
import Layout from '../layout/Layout';

const SuperAdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [dashboardData, setDashboardData] = useState({
        stats: {
            totalCustomers: 0,
            activeCustomers: 0,
            inactiveCustomers: 0,
            leads: 0,
            totalAdmins: 0,
            totalMembers: 0,
            revenue: 0,
            conversionRate: 34.2,
            teamSize: 0
        },
        recentActivity: [
            { id: 1, type: 'user_registration', user: 'John Smith', action: 'Registered new account', time: '2 minutes ago', status: 'success' },
            { id: 2, type: 'admin_action', user: 'Sarah Johnson', action: 'Updated user permissions', time: '15 minutes ago', status: 'info' },
            { id: 3, type: 'system', user: 'System', action: 'Database backup completed', time: '1 hour ago', status: 'success' },
            { id: 4, type: 'error', user: 'Mike Davis', action: 'Login attempt failed', time: '2 hours ago', status: 'warning' },
            { id: 5, type: 'purchase', user: 'Emma Wilson', action: 'Completed subscription purchase', time: '3 hours ago', status: 'success' }
        ],
        topPerformers: [
            { name: 'Alex Chen', role: 'Sales Manager', performance: 98, avatar: '👨‍💼' },
            { name: 'Maria Garcia', role: 'Marketing Lead', performance: 95, avatar: '👩‍💼' },
            { name: 'David Kim', role: 'Product Manager', performance: 92, avatar: '👨‍💻' },
            { name: 'Lisa Park', role: 'Customer Success', performance: 89, avatar: '👩‍💻' }
        ],
        tradingData: [
            { day: 'Mon', value: 2847, change: 0.8, high: 2892, low: 2823 },
            { day: 'Tue', value: 2912, change: 2.3, high: 2945, low: 2876 },
            { day: 'Wed', value: 2889, change: -0.8, high: 2923, low: 2856 },
            { day: 'Thu', value: 2956, change: 2.3, high: 2988, low: 2921 },
            { day: 'Fri', value: 3021, change: 2.2, high: 3054, low: 2989 },
            { day: 'Sat', value: 2998, change: -0.8, high: 3032, low: 2967 },
            { day: 'Sun', value: 3087, change: 3.0, high: 3121, low: 3045 }
        ]
    });
    console.log(dashboardData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch customers
                const customerResponse = await axiosInstance.get("api/customers");
                const fetchedCustomers = customerResponse.data.customer || [];

                // Fetch admins
                const adminResponse = await axiosInstance.get("api/superAdmin/getAllAdmin");
                const fetchedAdmins = adminResponse.data.admin || [];

                // Fetch team members
                const [
                    accountResponse,
                    supportResponse,
                    leadResponse,
                    carrierResponse,
                    saleResponse,
                ] = await Promise.all([
                    axiosInstance.get("api/admin/allaccountMember"),
                    axiosInstance.get("api/admin/allsupportMember"),
                    axiosInstance.get("api/admin/allleadMember"),
                    axiosInstance.get("api/admin/allcarriermember"),
                    axiosInstance.get("api/admin/allsaleMember"),
                ]);

                const fetchedTeams = {
                    account: accountResponse.data || [],
                    support: supportResponse.data || [],
                    lead: leadResponse.data || [],
                    carrier: carrierResponse.data || [],
                    sale: saleResponse.data || [],
                };

                // ✅ Update dashboard stats dynamically
                setDashboardData((prev) => ({
                    ...prev,
                    stats: {
                        ...prev.stats,
                        totalCustomers: fetchedCustomers.length,
                        totalAdmins: fetchedAdmins.length,
                        totalMembers:
                            fetchedTeams.account.members.length +
                            fetchedTeams.support.members.length +
                            fetchedTeams.lead.members.length +
                            fetchedTeams.carrier.members.length +
                            fetchedTeams.sale.members.length,
                    },
                }));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
    <Layout>
      <KeyMetrics stats={dashboardData.stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <UserDistribution stats={dashboardData.stats} />
        <QuickStats stats={dashboardData.stats} />
        <TopPerformers topPerformers={dashboardData.topPerformers} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity recentActivity={dashboardData.recentActivity} />
        <TradingGrowthChart tradingData={dashboardData.tradingData} />
      </div>

      <ActionButtons />
    </Layout>
    );
};

export default SuperAdminDashboard;