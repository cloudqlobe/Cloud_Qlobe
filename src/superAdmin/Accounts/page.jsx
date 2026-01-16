import React, { useState } from 'react';
import { 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  CreditCard,
  Target,
  Activity,
  BarChart3,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Calculator,
  Receipt,
  AlertCircle,
  CheckCircle,
  Clock,
  Filter,
  FileText,
  PlusCircle,
} from 'lucide-react';
import Layout from '../layout/Layout';

const TelecomAccountsDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeFilter, setTimeFilter] = useState('30d');
  const [revenueFilter, setRevenueFilter] = useState('all');

  // Financial metrics data
  const financialMetrics = {
    totalRevenue: 12847632,
    salesRevenue: 8234567,
    carriersRevenue: 3456789,
    otherRevenue: 1156276,
    totalExpenses: 9234567,
    salesExpenses: 4567890,
    carriersExpenses: 2345678,
    operationalExpenses: 2320999,
    netProfit: 3613065,
    profitMargin: 28.1,
    growthRate: 15.7,
    monthlyRecurring: 3456789
  };

  // Department revenue breakdown
  const departmentRevenue = [
    { 
      department: 'Sales Department', 
      revenue: 8234567, 
      expenses: 4567890, 
      profit: 3666677,
      margin: 44.5,
      growth: 12.3,
      target: 9000000,
      accounts: 2847,
      avgDealSize: 2890,
      color: 'blue'
    },
    { 
      department: 'Carriers Division', 
      revenue: 3456789, 
      expenses: 2345678, 
      profit: 1111111,
      margin: 32.1,
      growth: 8.7,
      target: 4000000,
      accounts: 856,
      avgDealSize: 4038,
      color: 'green'
    },
    { 
      department: 'Network Services', 
      revenue: 1156276, 
      expenses: 890000, 
      profit: 266276,
      margin: 23.0,
      growth: -2.4,
      target: 1500000,
      accounts: 423,
      avgDealSize: 2734,
      color: 'purple'
    }
  ];

  // Monthly revenue growth data
  const monthlyGrowthData = [
    { month: 'Jan', sales: 6800000, carriers: 2900000, expenses: 7200000, profit: 2500000 },
    { month: 'Feb', sales: 7100000, carriers: 3100000, expenses: 7500000, profit: 2700000 },
    { month: 'Mar', sales: 7400000, carriers: 3200000, expenses: 7800000, profit: 2800000 },
    { month: 'Apr', sales: 7600000, carriers: 3300000, expenses: 8000000, profit: 2900000 },
    { month: 'May', sales: 7900000, carriers: 3400000, expenses: 8200000, profit: 3100000 },
    { month: 'Jun', sales: 8234567, carriers: 3456789, expenses: 8500000, profit: 3191356 }
  ];

  // Account categories
  const accountCategories = [
    { type: 'Enterprise Clients', count: 287, revenue: 4567890, avgValue: 15910, growth: 18.5, status: 'high' },
    { type: 'SMB Accounts', count: 1456, revenue: 2890456, avgValue: 1985, growth: 12.3, status: 'medium' },
    { type: 'Carrier Partners', count: 156, revenue: 3456789, avgValue: 22158, growth: 8.7, status: 'high' },
    { type: 'Government Contracts', count: 45, revenue: 1234567, avgValue: 27434, growth: 5.2, status: 'stable' },
    { type: 'Reseller Network', count: 789, revenue: 1567890, avgValue: 1987, growth: -1.2, status: 'low' }
  ];

  // Recent financial transactions
  const recentTransactions = [
    {
      id: 1,
      type: 'revenue',
      account: 'Reliance Jio Enterprise',
      amount: 2450000,
      category: 'Enterprise',
      date: '2 hours ago',
      status: 'completed',
      department: 'Sales'
    },
    {
      id: 2,
      type: 'expense',
      account: 'Carrier Infrastructure',
      amount: 890000,
      category: 'Operations',
      date: '4 hours ago',
      status: 'pending',
      department: 'Carriers'
    },
    {
      id: 3,
      type: 'revenue',
      account: 'Airtel Business Solutions',
      amount: 1567890,
      category: 'Carrier',
      date: '6 hours ago',
      status: 'completed',
      department: 'Carriers'
    },
    {
      id: 4,
      type: 'expense',
      account: 'Sales Team Commissions',
      amount: 345678,
      category: 'Personnel',
      date: '8 hours ago',
      status: 'completed',
      department: 'Sales'
    },
    {
      id: 5,
      type: 'revenue',
      account: 'BSNL Government Contract',
      amount: 2890000,
      category: 'Government',
      date: '12 hours ago',
      status: 'completed',
      department: 'Sales'
    }
  ];

  // Revenue Growth Chart Component
  const RevenueGrowthChart = () => {
    const maxValue = Math.max(...monthlyGrowthData.map(d => d.sales + d.carriers));
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">6-Month Revenue Trend</h4>
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Sales Revenue</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Carriers Revenue</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Expenses</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Profit</span>
            </div>
          </div>
        </div>
        {monthlyGrowthData.map((month, index) => {
          const salesPercentage = (month.sales / maxValue) * 100;
          const carriersPercentage = (month.carriers / maxValue) * 100;
          const expensesPercentage = (month.expenses / maxValue) * 100;
          const profitPercentage = (month.profit / maxValue) * 100;
          
          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-8 text-sm font-medium text-gray-700">
                {month.month}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex space-x-3">
                    <span className="text-blue-600 font-medium">₹{(month.sales / 10000000).toFixed(1)}Cr</span>
                    <span className="text-green-600 font-medium">₹{(month.carriers / 10000000).toFixed(1)}Cr</span>
                    <span className="text-red-600 font-medium">₹{(month.expenses / 10000000).toFixed(1)}Cr</span>
                  </div>
                  <span className="text-purple-600 font-bold">₹{(month.profit / 10000000).toFixed(1)}Cr</span>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="absolute bg-blue-500 h-3 rounded-full opacity-80"
                    style={{ width: `${salesPercentage}%` }}
                  ></div>
                  <div 
                    className="absolute bg-green-500 h-3 rounded-full opacity-70"
                    style={{ width: `${carriersPercentage}%`, left: `${salesPercentage * 0.3}%` }}
                  ></div>
                  <div 
                    className="absolute bg-purple-500 h-3 rounded-full opacity-90"
                    style={{ width: `${profitPercentage}%`, left: `${Math.max(salesPercentage, carriersPercentage) * 0.1}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Department Performance Chart
  const DepartmentChart = () => {
    const maxRevenue = Math.max(...departmentRevenue.map(d => d.revenue));
    
    return (
      <div className="space-y-4">
        {departmentRevenue.map((dept, index) => {
          const revenuePercentage = (dept.revenue / maxRevenue) * 100;
          const expensePercentage = (dept.expenses / maxRevenue) * 100;
          const targetAchieved = (dept.revenue / dept.target) * 100;
          
          return (
            <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{dept.department}</h4>
                <div className={`flex items-center text-sm font-semibold ${
                  dept.growth > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {dept.growth > 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                  {Math.abs(dept.growth)}%
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-3 mb-3 text-sm">
                <div>
                  <p className="text-gray-600">Revenue</p>
                  <p className="font-bold text-gray-900">₹{(dept.revenue / 10000000).toFixed(1)}Cr</p>
                </div>
                <div>
                  <p className="text-gray-600">Expenses</p>
                  <p className="font-bold text-red-600">₹{(dept.expenses / 10000000).toFixed(1)}Cr</p>
                </div>
                <div>
                  <p className="text-gray-600">Profit</p>
                  <p className="font-bold text-green-600">₹{(dept.profit / 10000000).toFixed(1)}Cr</p>
                </div>
                <div>
                  <p className="text-gray-600">Margin</p>
                  <p className="font-bold text-purple-600">{dept.margin}%</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Revenue vs Expenses</span>
                  <span>{dept.accounts} accounts</span>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`absolute h-2 rounded-full ${
                      dept.color === 'blue' ? 'bg-blue-500' :
                      dept.color === 'green' ? 'bg-green-500' :
                      'bg-purple-500'
                    }`}
                    style={{ width: `${revenuePercentage}%` }}
                  ></div>
                  <div 
                    className="absolute bg-red-500 h-2 rounded-full opacity-60"
                    style={{ width: `${expensePercentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Target Achievement</span>
                  <span>{targetAchieved.toFixed(1)}% of ₹{(dept.target / 10000000).toFixed(1)}Cr</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div 
                    className={`h-1 rounded-full ${
                      targetAchieved >= 100 ? 'bg-green-500' :
                      targetAchieved >= 80 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(targetAchieved, 100)}%` }}
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex">
      {/* Sidebar */}
      {/* <div className="w-64 bg-gradient-to-b from-indigo-900 to-purple-900 shadow-xl">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Calculator className="w-5 h-5 text-indigo-600" />
            </div>
            <h1 className="text-xl font-bold text-white">TelecomFin</h1>
          </div>
        </div>
        
        <nav className="mt-6">
          {[
            { id: 'overview', label: 'Financial Overview', icon: BarChart3 },
            { id: 'revenue', label: 'Revenue Analytics', icon: TrendingUp },
            { id: 'accounts', label: 'Account Management', icon: Users },
            { id: 'expenses', label: 'Expense Tracking', icon: CreditCard },
            { id: 'departments', label: 'Department P&L', icon: Building2 },
            { id: 'reports', label: 'Financial Reports', icon: FileText },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-white bg-opacity-20 text-white border-r-4 border-cyan-400 shadow-lg' 
                  : 'text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white'
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
              <span className="text-sm font-medium text-white">Finance Tip</span>
            </div>
            <p className="text-xs text-indigo-200">Carrier partnerships generate 35% higher margins than direct sales!</p>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        {/* <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-gray-900">Telecommunications Accounts Dashboard</h2>
              <div className="flex items-center space-x-2">
                <select 
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 3 months</option>
                  <option value="12m">Last 12 months</option>
                </select>
                <select 
                  value={revenueFilter}
                  onChange={(e) => setRevenueFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Revenue</option>
                  <option value="sales">Sales Only</option>
                  <option value="carriers">Carriers Only</option>
                  <option value="net">Net Profit</option>
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
                  placeholder="Search accounts..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button className="relative p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-medium">
                  FA
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header> */}

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Financial Overview Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { 
                title: 'Total Revenue', 
                value: `₹${(financialMetrics.totalRevenue / 10000000).toFixed(1)}Cr`, 
                change: '+15.7%', 
                trend: 'up', 
                icon: DollarSign, 
                color: 'blue',
                subtitle: 'Monthly recurring revenue',
                breakdown: `Sales: ₹${(financialMetrics.salesRevenue / 10000000).toFixed(1)}Cr` | `Carriers: ₹${(financialMetrics.carriersRevenue / 10000000).toFixed(1)}Cr`
              },
              { 
                title: 'Net Profit', 
                value: `₹${(financialMetrics.netProfit / 10000000).toFixed(1)}Cr`, 
                change: '+18.2%', 
                trend: 'up', 
                icon: TrendingUp, 
                color: 'green',
                subtitle: `${financialMetrics.profitMargin}% margin`,
                breakdown: `Growth rate: ${financialMetrics.growthRate}% YoY`
              },
              { 
                title: 'Total Expenses', 
                value: `₹${(financialMetrics.totalExpenses / 10000000).toFixed(1)}Cr`, 
                change: '+12.1%', 
                trend: 'up', 
                icon: CreditCard, 
                color: 'red',
                subtitle: 'Operational costs',
                breakdown: `Sales: ₹${(financialMetrics.salesExpenses / 10000000).toFixed(1)}Cr` | `Carriers: ₹${(financialMetrics.carriersExpenses / 10000000).toFixed(1)}Cr`
              },
              { 
                title: 'Active Accounts', 
                value: '4,126', 
                change: '+8.9%', 
                trend: 'up', 
                icon: Users, 
                color: 'purple',
                subtitle: 'Revenue generating',
                breakdown: 'Enterprise: 287 | SMB: 1,456 | Partners: 156'
              }
            ].map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    metric.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    metric.color === 'green' ? 'bg-green-50 text-green-600' :
                    metric.color === 'red' ? 'bg-red-50 text-red-600' :
                    'bg-purple-50 text-purple-600'
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
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">{metric.breakdown}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Revenue Analytics & Department Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Growth Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Revenue Growth Analysis</h3>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">View Detailed Report</button>
              </div>
              
              <RevenueGrowthChart />
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-700 font-medium">Revenue Growth</p>
                      <p className="text-xl font-bold text-blue-900">+{financialMetrics.growthRate}%</p>
                      <p className="text-xs text-blue-600 mt-1">vs last quarter</p>
                    </div>
                    <Activity className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-700 font-medium">Profit Margin</p>
                      <p className="text-xl font-bold text-green-900">{financialMetrics.profitMargin}%</p>
                      <p className="text-xs text-green-600 mt-1">Industry avg: 22%</p>
                    </div>
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Department Performance */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Department P&L Performance</h3>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">Export Data</button>
              </div>
              
              <DepartmentChart />
            </div>
          </div>

          {/* Account Categories & Recent Transactions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Account Categories Performance */}
            <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Account Categories</h3>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">Manage</button>
              </div>
              
              <div className="space-y-4">
                {accountCategories.map((category, index) => (
                  <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{category.type}</h4>
                      <div className={`w-2 h-2 rounded-full ${
                        category.status === 'high' ? 'bg-green-500' :
                        category.status === 'medium' ? 'bg-yellow-500' :
                        category.status === 'stable' ? 'bg-blue-500' :
                        'bg-red-500'
                      }`}></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div>
                        <p className="text-gray-600">Count</p>
                        <p className="font-bold text-gray-900">{category.count}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Revenue</p>
                        <p className="font-bold text-gray-900">₹{(category.revenue / 100000).toFixed(1)}L</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Avg: ₹{category.avgValue.toLocaleString()}</span>
                      <span className={`font-semibold ${
                        category.growth > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {category.growth > 0 ? '+' : ''}{category.growth}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Financial Transactions */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Recent Financial Transactions</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg ${
                        transaction.type === 'revenue' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                      }`}>
                        {transaction.type === 'revenue' ? 
                          <TrendingUp className="w-5 h-5" /> : 
                          <TrendingDown className="w-5 h-5" />
                        }
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{transaction.account}</p>
                        <p className="text-xs text-gray-600">{transaction.category} • {transaction.department}</p>
                        <p className="text-xs text-gray-400">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold text-sm ${
                        transaction.type === 'revenue' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'revenue' ? '+' : '-'}₹{(transaction.amount / 100000).toFixed(1)}L
                      </p>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                        transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {transaction.status === 'completed' ? <CheckCircle className="w-3 h-3 mr-1" /> : 
                         transaction.status === 'pending' ? <Clock className="w-3 h-3 mr-1" /> :
                         <AlertCircle className="w-3 h-3 mr-1" />}
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-indigo-700 font-medium">Today's Net Flow</p>
                    <p className="text-2xl font-bold text-indigo-900">+₹{((financialMetrics.totalRevenue - financialMetrics.totalExpenses) / 10000000 / 30).toFixed(1)}Cr</p>
                    <p className="text-xs text-indigo-600 mt-1">Daily average</p>
                  </div>
                  <Activity className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons & Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Quick Action Buttons */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-medium transition-colors flex flex-col items-center shadow-md hover:shadow-lg">
                  <Receipt className="w-6 h-6 mb-2" />
                  <span className="text-sm">Generate Invoice</span>
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg font-medium transition-colors flex flex-col items-center shadow-md hover:shadow-lg">
                  <PlusCircle className="w-6 h-6 mb-2" />
                  <span className="text-sm">Add Account</span>
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg font-medium transition-colors flex flex-col items-center shadow-md hover:shadow-lg">
                  <FileText className="w-6 h-6 mb-2" />
                  <span className="text-sm">P&L Report</span>
                </button>
                <button className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg font-medium transition-colors flex flex-col items-center shadow-md hover:shadow-lg">
                  <Download className="w-6 h-6 mb-2" />
                  <span className="text-sm">Export Data</span>
                </button>
              </div>
            </div>

            {/* Financial Summary Cards */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Financial Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Monthly Recurring Revenue</p>
                      <p className="text-xs text-gray-600">Subscription based income</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-blue-600">₹{(financialMetrics.monthlyRecurring / 10000000).toFixed(1)}Cr</p>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Profit Margin</p>
                      <p className="text-xs text-gray-600">Net profit percentage</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-green-600">{financialMetrics.profitMargin}%</p>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">YoY Growth</p>
                      <p className="text-xs text-gray-600">Annual growth rate</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-purple-600">+{financialMetrics.growthRate}%</p>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Customer LTV</p>
                      <p className="text-xs text-gray-600">Average lifetime value</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-orange-600">₹{Math.round(financialMetrics.totalRevenue / 4126 / 1000)}K</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <BarChart3 className="w-4 h-4 mr-2" />
              Generate Financial Report
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Calculator className="w-4 h-4 mr-2" />
              Run Revenue Forecast
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Users className="w-4 h-4 mr-2" />
              Account Analysis
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Download className="w-4 h-4 mr-2" />
              Export All Data
            </button>
          </div>
        </main>
      </div>
    </div>
    </Layout>
  );
};

export default TelecomAccountsDashboard;