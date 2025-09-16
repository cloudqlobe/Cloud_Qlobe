import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  UserX, 
  Target, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  MessageSquare,
  Mail,
  Phone,
  Smartphone,
  Search,
  ChevronDown,
  BarChart3,
  Calendar,
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
  Filter,
  Download,
  RefreshCw,
  Eye,
  MoreHorizontal,
  Send,
  ExternalLink,
  Star,
  Zap,
  MousePointer,
  Monitor,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Settings,
  Shield,
  Trash2,
  AlertTriangle,
  Wifi,
  Signal,
  Router,
  PhoneCall,
  MapPin,
  Globe,
  HeadphonesIcon,
  CreditCard,
  Package,
  Truck,
  Building2,
  Network,
  Server
} from 'lucide-react';
import Layout from '../layout/Layout';

const CarriersManagementDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [timeFilter, setTimeFilter] = useState('7d');
  const [carrierFilter, setCarrierFilter] = useState('all');

  // Carriers focused data
  const carrierStats = {
    totalCarriers: 1247,
    activeCarriers: 856,
    inactiveCarriers: 234,
    junkCarriers: 157,
    totalRevenue: 5847632,
    avgPerformanceScore: 87.3,
    avgDeliveryTime: 24.5,
    networkCoverage: 94.2
  };

  const carrierActivity = [
    { 
      id: 1, 
      type: 'registration', 
      name: 'Mumbai Express Logistics', 
      contact: '+91-9876543210', 
      action: 'New carrier registration approved', 
      time: '15 minutes ago', 
      priority: 'high', 
      status: 'active', 
      location: 'Mumbai, MH',
      capacity: '500 packages/day',
      rating: 4.8
    },
    { 
      id: 2, 
      type: 'performance', 
      name: 'Delhi Fast Couriers', 
      contact: '+91-9123456789', 
      action: 'Performance score updated: 92%', 
      time: '32 minutes ago', 
      priority: 'medium', 
      status: 'active', 
      location: 'Delhi, DL',
      capacity: '750 packages/day',
      rating: 4.9
    },
    { 
      id: 3, 
      type: 'inactive', 
      name: 'Chennai Local Delivery', 
      contact: '+91-8765432109', 
      action: 'No activity for 15 days', 
      time: '2 hours ago', 
      priority: 'low', 
      status: 'inactive', 
      location: 'Chennai, TN',
      capacity: '200 packages/day',
      rating: 3.2
    },
    { 
      id: 4, 
      type: 'junk', 
      name: 'Invalid Carrier XYZ', 
      contact: '+91-1111111111', 
      action: 'Flagged as invalid registration', 
      time: '3 hours ago', 
      priority: 'junk', 
      status: 'junk', 
      location: 'Unknown',
      capacity: 'N/A',
      rating: 0
    },
    { 
      id: 5, 
      type: 'achievement', 
      name: 'Bangalore Premium Logistics', 
      contact: '+91-9988776655', 
      action: 'Achieved 5-star rating milestone', 
      time: '5 hours ago', 
      priority: 'high', 
      status: 'active', 
      location: 'Bangalore, KA',
      capacity: '1200 packages/day',
      rating: 5.0
    },
    { 
      id: 6, 
      type: 'alert', 
      name: 'Kolkata Speed Services', 
      contact: '+91-7654321098', 
      action: 'Delivery delays reported', 
      time: '6 hours ago', 
      priority: 'medium', 
      status: 'active', 
      location: 'Kolkata, WB',
      capacity: '400 packages/day',
      rating: 3.8
    }
  ];

  const carrierCategories = [
    { name: 'Express Delivery', carriers: 287, performance: 91.5, revenue: 1890000, trend: 'up', avgDelivery: '12 hours' },
    { name: 'Standard Shipping', carriers: 423, performance: 88.2, revenue: 2340000, trend: 'up', avgDelivery: '24 hours' },
    { name: 'Economy Service', carriers: 234, performance: 82.7, revenue: 890000, trend: 'down', avgDelivery: '48 hours' },
    { name: 'Premium Logistics', carriers: 89, performance: 95.8, revenue: 1200000, trend: 'up', avgDelivery: '6 hours' }
  ];

  // Carrier performance funnel
  const carrierFunnelData = [
    { stage: 'Applications', count: 2847, percentage: 100, color: 'bg-blue-500' },
    { stage: 'Verified', count: 1876, percentage: 65.9, color: 'bg-indigo-500' },
    { stage: 'Approved', count: 1456, percentage: 77.6, color: 'bg-purple-500' },
    { stage: 'Onboarded', count: 1247, percentage: 85.6, color: 'bg-pink-500' },
    { stage: 'Active', count: 856, percentage: 68.6, color: 'bg-orange-500' },
    { stage: 'High Performers', count: 287, percentage: 33.5, color: 'bg-green-500' }
  ];

  // Chart component for carrier funnel
  const CarrierFunnelChart = () => {
    const maxCount = Math.max(...carrierFunnelData.map(d => d.count));
    
    return (
      <div className="space-y-4">
        {carrierFunnelData.map((stage, index) => {
          const percentage = (stage.count / maxCount) * 100;
          const conversionRate = index > 0 ? ((stage.count / carrierFunnelData[index - 1].count) * 100).toFixed(1) : '100.0';
          
          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-28 text-sm font-medium text-gray-700">
                {stage.stage}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">{stage.count.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">{conversionRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`${stage.color} h-3 rounded-full transition-all duration-700 relative`}
                    style={{ width: `${percentage}%` }}
                  >
                    <div className="absolute right-0 top-0 h-full w-2 bg-black bg-opacity-20 rounded-r-full"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Performance chart data for carriers
  const performanceData = [
    { name: 'Jan', active: 720, inactive: 180, junk: 100, total: 1000 },
    { name: 'Feb', active: 780, inactive: 160, junk: 110, total: 1050 },
    { name: 'Mar', active: 820, inactive: 150, junk: 120, total: 1090 },
    { name: 'Apr', active: 850, inactive: 140, junk: 130, total: 1120 },
    { name: 'May', active: 890, inactive: 130, junk: 140, total: 1160 },
    { name: 'Jun', active: 856, inactive: 234, junk: 157, total: 1247 }
  ];

  const CarrierTrendsChart = () => {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">6-Month Carrier Trends</h4>
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Active</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Inactive</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Junk</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Total</span>
            </div>
          </div>
        </div>
        {performanceData.map((month, index) => {
          const maxValue = Math.max(...performanceData.map(d => d.total));
          const activePercentage = (month.active / maxValue) * 100;
          const inactivePercentage = (month.inactive / maxValue) * 100;
          const junkPercentage = (month.junk / maxValue) * 100;
          const totalPercentage = (month.total / maxValue) * 100;
          
          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-8 text-sm font-medium text-gray-700">
                {month.name}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="text-xs text-green-600 font-medium">{month.active}</span>
                    <span className="text-xs text-yellow-600 font-medium">{month.inactive}</span>
                    <span className="text-xs text-red-600 font-medium">{month.junk}</span>
                  </div>
                  <span className="text-xs text-blue-600 font-bold">{month.total}</span>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="absolute bg-green-500 h-2 rounded-full"
                    style={{ width: `${activePercentage}%` }}
                  ></div>
                  <div 
                    className="absolute bg-yellow-500 h-2 rounded-full opacity-60"
                    style={{ width: `${inactivePercentage}%`, left: `${activePercentage}%` }}
                  ></div>
                  <div 
                    className="absolute bg-red-500 h-2 rounded-full opacity-60"
                    style={{ width: `${junkPercentage}%`, left: `${activePercentage + inactivePercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      {/* Sidebar */}
      {/* <div className="w-64 bg-gradient-to-b from-blue-900 to-indigo-900 shadow-xl">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-blue-600" />
            </div>
            <h1 className="text-xl font-bold text-white">CarrierPro</h1>
          </div>
        </div>
        
        <nav className="mt-6">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'carriers', label: 'Carrier Management', icon: Truck },
            { id: 'network', label: 'Network Coverage', icon: Network },
            { id: 'performance', label: 'Performance', icon: TrendingUp },
            { id: 'analytics', label: 'Analytics', icon: Activity },
            { id: 'reports', label: 'Reports', icon: Eye },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-white bg-opacity-20 text-white border-r-4 border-cyan-400 shadow-lg' 
                  : 'text-blue-200 hover:bg-white hover:bg-opacity-10 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-64 p-6">
          <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-white">Carrier Tip</span>
            </div>
            <p className="text-xs text-blue-200">Express carriers show 35% higher customer satisfaction rates!</p>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        {/* <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-gray-900">Carriers Management Dashboard</h2>
              <div className="flex items-center space-x-2">
                <select 
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1d">Last 24 hours</option>
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 3 months</option>
                </select>
                <select 
                  value={carrierFilter}
                  onChange={(e) => setCarrierFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Carriers</option>
                  <option value="active">Active Only</option>
                  <option value="inactive">Inactive Only</option>
                  <option value="junk">Junk/Invalid</option>
                </select>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search carriers..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="relative p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">8</span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-medium">
                  CM
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header> */}

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Carrier Status Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { 
                title: 'Total Carriers', 
                value: carrierStats.totalCarriers.toLocaleString(), 
                change: '+12.3%', 
                trend: 'up', 
                icon: Building2, 
                color: 'blue',
                subtitle: 'Registered carriers' 
              },
              { 
                title: 'Active Carriers', 
                value: carrierStats.activeCarriers.toLocaleString(), 
                change: '+8.7%', 
                trend: 'up', 
                icon: UserCheck, 
                color: 'green',
                subtitle: 'Currently operational' 
              },
              { 
                title: 'Inactive Carriers', 
                value: carrierStats.inactiveCarriers.toLocaleString(), 
                change: '+3.2%', 
                trend: 'up', 
                icon: Clock, 
                color: 'yellow',
                subtitle: 'Temporarily offline' 
              },
              { 
                title: 'Junk Carriers', 
                value: carrierStats.junkCarriers.toLocaleString(), 
                change: '-5.8%', 
                trend: 'down', 
                icon: Trash2, 
                color: 'red',
                subtitle: 'Invalid/Flagged' 
              }
            ].map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    metric.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    metric.color === 'green' ? 'bg-green-50 text-green-600' :
                    metric.color === 'yellow' ? 'bg-yellow-50 text-yellow-600' :
                    'bg-red-50 text-red-600'
                  }`}>
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <div className={`flex items-center text-sm font-semibold ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.trend === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                    {metric.change}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                  <p className="text-gray-600 text-sm font-medium">{metric.title}</p>
                  <p className="text-gray-400 text-xs mt-1">{metric.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Network Performance Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <Network className="w-8 h-8 text-purple-600" />
                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium">Coverage</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{carrierStats.networkCoverage}%</h3>
              <p className="text-gray-600 text-sm">Network Coverage</p>
              <div className="mt-4 w-full bg-purple-100 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium">Score</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{carrierStats.avgPerformanceScore}%</h3>
              <p className="text-gray-600 text-sm">Avg Performance</p>
              <div className="mt-4 w-full bg-green-100 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">Speed</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{carrierStats.avgDeliveryTime}h</h3>
              <p className="text-gray-600 text-sm">Avg Delivery Time</p>
              <div className="mt-4 w-full bg-blue-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-8 h-8 text-orange-600" />
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium">Revenue</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">₹{(carrierStats.totalRevenue / 10000000).toFixed(1)}Cr</h3>
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <div className="mt-4 w-full bg-orange-100 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Carrier Funnel */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Carrier Onboarding Funnel</h3>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View Details</button>
              </div>
              
              <CarrierFunnelChart />
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-700 font-medium">Conversion Rate</p>
                    <p className="text-xl font-bold text-blue-900">{((carrierStats.activeCarriers / carrierFunnelData[0].count) * 100).toFixed(1)}%</p>
                  </div>
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Carrier Categories Performance */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Category Performance</h3>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
              </div>
              
              <div className="space-y-4">
                {carrierCategories.map((category, index) => (
                  <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{category.name}</h4>
                      <div className={`flex items-center text-sm ${
                        category.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {category.trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {category.performance}%
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Carriers</p>
                        <p className="font-semibold text-gray-900">{category.carriers}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Revenue</p>
                        <p className="font-semibold text-gray-900">₹{(category.revenue / 100000).toFixed(1)}L</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-blue-600 font-medium">Avg: {category.avgDelivery}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carrier Trends Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Carrier Trends</h3>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">Export</button>
              </div>
              
              <CarrierTrendsChart />
              
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-700 font-medium">Growth Rate</p>
                    <p className="text-xl font-bold text-green-900">+24.7%</p>
                    <p className="text-xs text-green-600 mt-1">vs last quarter</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity & Performance Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Carrier Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Recent Carrier Activity</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {carrierActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      activity.status === 'active' ? 'bg-green-500' :
                      activity.status === 'inactive' ? 'bg-yellow-500' :
                      activity.status === 'junk' ? 'bg-red-500' :
                      'bg-gray-500'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-gray-900">{activity.name}</p>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          activity.priority === 'high' ? 'bg-red-100 text-red-600' :
                          activity.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                          activity.priority === 'junk' ? 'bg-red-100 text-red-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {activity.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{activity.action}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{activity.contact}</span>
                        </div>
                        <span className="text-xs text-blue-600 font-medium">★{activity.rating}</span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{activity.location}</span>
                        </div>
                        <span className="text-xs text-gray-400">{activity.time}</span>
                      </div>
                      <div className="mt-1">
                        <span className="text-xs text-purple-600 font-medium">{activity.capacity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carrier Performance Analytics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Performance Analytics</h3>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View Details</button>
              </div>
              
              <div className="space-y-6">
                {[
                  { metric: 'Network Coverage', value: `${carrierStats.networkCoverage}%`, percentage: 94, icon: Network, color: 'blue', trend: '+2.3%' },
                  { metric: 'On-Time Delivery', value: '89.7%', percentage: 90, icon: Clock, color: 'green', trend: '+4.1%' },
                  { metric: 'Customer Satisfaction', value: '4.6/5', percentage: 92, icon: Star, color: 'yellow', trend: '+0.2%' },
                  { metric: 'Cost Efficiency', value: '₹12.8/km', percentage: 78, icon: DollarSign, color: 'purple', trend: '-5.4%' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${
                      item.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                      item.color === 'green' ? 'bg-green-50 text-green-600' :
                      item.color === 'yellow' ? 'bg-yellow-50 text-yellow-600' :
                      'bg-purple-50 text-purple-600'
                    }`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-900">{item.metric}</p>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-900">{item.value}</span>
                          <span className={`text-xs font-medium ${
                            item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>{item.trend}</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            item.color === 'blue' ? 'bg-blue-500' :
                            item.color === 'green' ? 'bg-green-500' :
                            item.color === 'yellow' ? 'bg-yellow-500' :
                            'bg-purple-500'
                          }`}
                          style={{ width: `${item.percentage}%`}}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-200">Monthly Target</p>
                    <p className="text-2xl font-bold">1,200 carriers</p>
                    <p className="text-xs text-blue-300 mt-1">{((carrierStats.activeCarriers / 1200) * 100).toFixed(0)}% achieved</p>
                  </div>
                  <Target className="w-8 h-8 text-blue-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <UserCheck className="w-4 h-4 mr-2" />
              Activate Carriers
            </button>
           
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Truck className="w-4 h-4 mr-2" />
              Add New Carrier
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Clock className="w-4 h-4 mr-2" />
              Review Inactive
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Trash2 className="w-4 h-4 mr-2" />
              Remove Junk Carriers
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Download className="w-4 h-4 mr-2" />
              Export Carrier Report
            </button>
          </div>
        </main>
      </div>
    </div>
    </Layout>
  );
};

export default CarriersManagementDashboard;