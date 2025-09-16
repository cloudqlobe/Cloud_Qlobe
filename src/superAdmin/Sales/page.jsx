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
  Package
} from 'lucide-react';
import Layout from '../layout/Layout';

const TelecomSalesDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [timeFilter, setTimeFilter] = useState('7d');
  const [leadFilter, setLeadFilter] = useState('all');

  // Telecom Sales focused data
  const stats = {
    totalLeads: 8945,
    activeLeads: 3847,
    inactiveLeads: 2156,
    junkLeads: 1891,
    spamLeads: 1051,
    convertedLeads: 1243,
    totalRevenue: 2847632,
    conversionRate: 13.9,
    avgDealValue: 2291,
    activePlans: {
      prepaid: 2156,
      postpaid: 1691,
      broadband: 892,
      enterprise: 234
    }
  };

  const leadActivity = [
    { id: 1, type: 'new_lead', name: 'Rajesh Kumar', phone: '+91-9876543210', service: 'Postpaid Plan', action: 'Requested 5G plan details', time: '2 minutes ago', priority: 'high', status: 'active', location: 'Mumbai, MH' },
    { id: 2, type: 'callback', name: 'Priya Singh', phone: '+91-9123456789', service: 'Broadband', action: 'Scheduled installation call', time: '8 minutes ago', priority: 'high', status: 'active', location: 'Delhi, DL' },
    { id: 3, type: 'inactive', name: 'Amit Sharma', phone: '+91-8765432109', service: 'Prepaid', action: 'No response for 7 days', time: '1 hour ago', priority: 'low', status: 'inactive', location: 'Bangalore, KA' },
    { id: 4, type: 'junk', name: 'Test User', phone: '+91-1111111111', service: 'Enterprise', action: 'Invalid contact details', time: '2 hours ago', priority: 'junk', status: 'junk', location: 'Unknown' },
    { id: 5, type: 'conversion', name: 'Sunita Patel', phone: '+91-9988776655', service: '5G Postpaid', action: 'Plan activated successfully', time: '3 hours ago', priority: 'converted', status: 'converted', location: 'Chennai, TN' },
    { id: 6, type: 'spam', name: 'Sales Bot', phone: '+91-0000000000', service: 'Multiple', action: 'Automated spam inquiry', time: '4 hours ago', priority: 'spam', status: 'spam', location: 'Bot' }
  ];

  const telecomPlans = [
    { name: '5G Unlimited', leads: 1847, conversion: 18.5, revenue: 890000, trend: 'up', price: '₹599/month' },
    { name: 'Broadband Pro', leads: 1234, conversion: 22.3, revenue: 720000, trend: 'up', price: '₹999/month' },
    { name: 'Prepaid Smart', leads: 892, conversion: 8.7, revenue: 290000, trend: 'down', price: '₹299/month' },
    { name: 'Enterprise Suite', leads: 456, conversion: 45.2, revenue: 1200000, trend: 'up', price: '₹5999/month' }
  ];

  // Lead funnel data for telecom sales
  const salesFunnelData = [
    { stage: 'Inquiries', count: 12847, percentage: 100, color: 'bg-blue-500' },
    { stage: 'Qualified', count: 8945, percentage: 69.6, color: 'bg-indigo-500' },
    { stage: 'Active Leads', count: 3847, percentage: 43.0, color: 'bg-purple-500' },
    { stage: 'Demo/Trial', count: 2156, percentage: 56.0, color: 'bg-pink-500' },
    { stage: 'Proposals', count: 1543, percentage: 71.6, color: 'bg-orange-500' },
    { stage: 'Negotiations', count: 892, percentage: 57.8, color: 'bg-yellow-500' },
    { stage: 'Activated', count: 456, percentage: 51.1, color: 'bg-green-500' }
  ];

  const SalesFunnelChart = () => {
    const maxCount = Math.max(...salesFunnelData.map(d => d.count));
    
    return (
      <div className="space-y-4">
        {salesFunnelData.map((stage, index) => {
          const percentage = (stage.count / maxCount) * 100;
          const conversionRate = index > 0 ? ((stage.count / salesFunnelData[index - 1].count) * 100).toFixed(1) : '100.0';
          
          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-24 text-sm font-medium text-gray-700">
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

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      {/* Sidebar */}
      {/* <div className="w-64 bg-gradient-to-b from-blue-900 to-indigo-900 shadow-xl">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Signal className="w-5 h-5 text-blue-600" />
            </div>
            <h1 className="text-xl font-bold text-white">TelecomPro</h1>
          </div>
        </div>
        
        <nav className="mt-6">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'leads', label: 'Lead Management', icon: Users },
            { id: 'plans', label: 'Service Plans', icon: Package },
            { id: 'customers', label: 'Customer Care', icon: HeadphonesIcon },
            { id: 'analytics', label: 'Sales Analytics', icon: TrendingUp },
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
              <span className="text-sm font-medium text-white">Sales Tip</span>
            </div>
            <p className="text-xs text-blue-200">5G plans have 45% higher conversion rate. Focus on speed benefits!</p>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-gray-900">Telecom Sales Dashboard</h2>
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
                  value={leadFilter}
                  onChange={(e) => setLeadFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Leads</option>
                  <option value="active">Active Only</option>
                  <option value="inactive">Inactive Only</option>
                  <option value="junk">Junk/Spam</option>
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
                  placeholder="Search leads by phone..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="relative p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">12</span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-medium">
                  TS
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Lead Status Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {[
              { 
                title: 'Total Leads', 
                value: stats.totalLeads.toLocaleString(), 
                change: '+24.8%', 
                trend: 'up', 
                icon: Target, 
                color: 'blue',
                subtitle: 'All inquiries' 
              },
              { 
                title: 'Active Leads', 
                value: stats.activeLeads.toLocaleString(), 
                change: '+18.3%', 
                trend: 'up', 
                icon: UserCheck, 
                color: 'green',
                subtitle: 'In follow-up' 
              },
              { 
                title: 'Inactive Leads', 
                value: stats.inactiveLeads.toLocaleString(), 
                change: '+5.7%', 
                trend: 'up', 
                icon: Clock, 
                color: 'yellow',
                subtitle: 'No response' 
              },
              { 
                title: 'Junk Leads', 
                value: stats.junkLeads.toLocaleString(), 
                change: '+12.1%', 
                trend: 'up', 
                icon: Trash2, 
                color: 'orange',
                subtitle: 'Invalid data' 
              },
              { 
                title: 'Spam Leads', 
                value: stats.spamLeads.toLocaleString(), 
                change: '-8.3%', 
                trend: 'down', 
                icon: Shield, 
                color: 'red',
                subtitle: 'Blocked/Filtered' 
              }
            ].map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    metric.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    metric.color === 'green' ? 'bg-green-50 text-green-600' :
                    metric.color === 'yellow' ? 'bg-yellow-50 text-yellow-600' :
                    metric.color === 'orange' ? 'bg-orange-50 text-orange-600' :
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

          {/* Telecom Service Plans Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <Smartphone className="w-8 h-8 text-purple-600" />
                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium">Prepaid</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stats.activePlans.prepaid.toLocaleString()}</h3>
              <p className="text-gray-600 text-sm">Active Plans</p>
              <div className="mt-4 w-full bg-purple-100 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <PhoneCall className="w-8 h-8 text-blue-600" />
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">Postpaid</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stats.activePlans.postpaid.toLocaleString()}</h3>
              <p className="text-gray-600 text-sm">Active Plans</p>
              <div className="mt-4 w-full bg-blue-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <Wifi className="w-8 h-8 text-green-600" />
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium">Broadband</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stats.activePlans.broadband.toLocaleString()}</h3>
              <p className="text-gray-600 text-sm">Active Plans</p>
              <div className="mt-4 w-full bg-green-100 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <Router className="w-8 h-8 text-indigo-600" />
                <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full font-medium">Enterprise</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stats.activePlans.enterprise.toLocaleString()}</h3>
              <p className="text-gray-600 text-sm">Active Plans</p>
              <div className="mt-4 w-full bg-indigo-100 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Sales Funnel */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Sales Funnel</h3>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View Details</button>
              </div>
              
              <SalesFunnelChart />
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-700 font-medium">Avg. Deal Value</p>
                    <p className="text-xl font-bold text-blue-900">₹{stats.avgDealValue.toLocaleString()}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Top Performing Plans */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Plan Performance</h3>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
              </div>
              
              <div className="space-y-4">
                {telecomPlans.map((plan, index) => (
                  <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                      <div className={`flex items-center text-sm ${
                        plan.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {plan.trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {plan.conversion}%
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Leads</p>
                        <p className="font-semibold text-gray-900">{plan.leads.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Revenue</p>
                        <p className="font-semibold text-gray-900">₹{(plan.revenue / 100000).toFixed(1)}L</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-blue-600 font-medium">{plan.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Status Distribution with Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Lead Distribution</h3>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">Manage</button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <UserCheck className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-900">Active</p>
                      <p className="text-sm text-green-700">{stats.activeLeads.toLocaleString()} leads</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-green-900">43%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-semibold text-yellow-900">Inactive</p>
                      <p className="text-sm text-yellow-700">{stats.inactiveLeads.toLocaleString()} leads</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-yellow-900">24%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Trash2 className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="font-semibold text-orange-900">Junk</p>
                      <p className="text-sm text-orange-700">{stats.junkLeads.toLocaleString()} leads</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-orange-900">21%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-semibold text-red-900">Spam</p>
                      <p className="text-sm text-red-700">{stats.spamLeads.toLocaleString()} leads</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-red-900">12%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-200">Monthly Target</p>
                    <p className="text-xl font-bold">5,000 activations</p>
                    <p className="text-xs text-blue-300 mt-1">{((stats.convertedLeads / 5000) * 100).toFixed(0)}% achieved</p>
                  </div>
                  <Target className="w-8 h-8 text-blue-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity & Revenue Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Lead Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Recent Lead Activity</h3>
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
                {leadActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      activity.status === 'active' ? 'bg-green-500' :
                      activity.status === 'inactive' ? 'bg-yellow-500' :
                      activity.status === 'junk' ? 'bg-orange-500' :
                      activity.status === 'spam' ? 'bg-red-500' :
                      activity.status === 'converted' ? 'bg-blue-500' :
                      'bg-gray-500'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-gray-900">{activity.name}</p>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          activity.priority === 'high' ? 'bg-red-100 text-red-600' :
                          activity.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                          activity.priority === 'converted' ? 'bg-green-100 text-green-600' :
                          activity.priority === 'junk' ? 'bg-orange-100 text-orange-600' :
                          activity.priority === 'spam' ? 'bg-red-100 text-red-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {activity.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{activity.action}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{activity.phone}</span>
                        </div>
                        <span className="text-xs text-blue-600 font-medium">{activity.service}</span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{activity.location}</span>
                        </div>
                        <span className="text-xs text-gray-400">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue & Performance Metrics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Revenue Analytics</h3>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View Details</button>
              </div>
              
              <div className="space-y-6">
                {[
                  { metric: 'Total Revenue', value: `₹${(stats.totalRevenue / 10000000).toFixed(1)}Cr`, percentage: 28, icon: DollarSign, color: 'green', trend: '+28.4%' },
                  { metric: 'Conversion Rate', value: `${stats.conversionRate}%`, percentage: 14, icon: TrendingUp, color: 'blue', trend: '+3.2%' },
                  { metric: 'Avg Deal Value', value: `₹${stats.avgDealValue.toLocaleString()}`, percentage: 23, icon: CreditCard, color: 'purple', trend: '+12.8%' },
                  { metric: 'Customer Retention', value: '94.2%', percentage: 94, icon: Star, color: 'orange', trend: '+2.1%' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${
                      item.color === 'green' ? 'bg-green-50 text-green-600' :
                      item.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                      item.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                      'bg-orange-50 text-orange-600'
                    }`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-900">{item.metric}</p>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-900">{item.value}</span>
                          <span className="text-xs text-green-600 font-medium">{item.trend}</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            item.color === 'green' ? 'bg-green-500' :
                            item.color === 'blue' ? 'bg-blue-500' :
                            item.color === 'purple' ? 'bg-purple-500' :
                            'bg-orange-500'
                          }`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-200">Monthly Target</p>
                    <p className="text-2xl font-bold">₹3.5Cr</p>
                    <p className="text-xs text-green-300 mt-1">{((stats.totalRevenue / 35000000) * 100).toFixed(0)}% achieved</p>
                  </div>
                  <Target className="w-8 h-8 text-green-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <UserCheck className="w-4 h-4 mr-2" />
              Follow-up Active Leads
            </button>
           
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Package className="w-4 h-4 mr-2" />
              Create Plan Quote
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Trash2 className="w-4 h-4 mr-2" />
              Clean Junk Leads
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Shield className="w-4 h-4 mr-2" />
              Block Spam Sources
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Download className="w-4 h-4 mr-2" />
              Export Lead Report
            </button>
          </div>
        </main>
      </div>
    </div>
    </Layout>
  );
};

export default TelecomSalesDashboard;