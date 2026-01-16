import { 
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Users,
  Target,
  Activity,
  BarChart3,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Filter,
  PlusCircle,
  AlertTriangle,
  UserCheck,
  MessageCircle,
  Wrench,
  CheckCircle2,
  Pause,
  Play,
  ThumbsUp,
} from 'lucide-react';
import Layout from '../layout/Layout';

const TechnicalSupportDashboard = () => {

  // Support metrics data
  const supportMetrics = {
    totalTickets: 2847,
    openTickets: 456,
    resolvedTickets: 2391,
    pendingTickets: 189,
    avgResolutionTime: 4.2,
    firstResponseTime: 1.8,
    customerSatisfaction: 94.5,
    slaCompliance: 87.3,
    escalatedTickets: 23,
    repeatTickets: 67
  };

  // Department performance data
  const departmentPerformance = [
    { 
      department: 'Network Support', 
      totalTickets: 1234, 
      resolved: 1089, 
      pending: 78,
      avgTime: 3.5,
      satisfaction: 92.1,
      target: 95.0,
      agents: 12,
      escalations: 8,
      color: 'blue'
    },
    { 
      department: 'Hardware Support', 
      totalTickets: 867, 
      resolved: 789, 
      pending: 45,
      avgTime: 5.2,
      satisfaction: 89.7,
      target: 95.0,
      agents: 8,
      escalations: 12,
      color: 'green'
    },
    { 
      department: 'Software Support', 
      totalTickets: 746, 
      resolved: 513, 
      pending: 66,
      avgTime: 6.8,
      satisfaction: 87.4,
      target: 95.0,
      agents: 6,
      escalations: 3,
      color: 'purple'
    }
  ];

  // Weekly ticket trend data
  const weeklyTrendData = [
    { week: 'Week 1', created: 420, resolved: 380, escalated: 8, satisfaction: 92 },
    { week: 'Week 2', created: 465, resolved: 425, escalated: 12, satisfaction: 89 },
    { week: 'Week 3', created: 398, resolved: 456, escalated: 6, satisfaction: 94 },
    { week: 'Week 4', created: 512, resolved: 487, escalated: 15, satisfaction: 91 },
    { week: 'Week 5', created: 445, resolved: 478, escalated: 9, satisfaction: 93 },
    { week: 'Week 6', created: 389, resolved: 412, escalated: 5, satisfaction: 96 }
  ];

  // Ticket categories
  const ticketCategories = [
    { type: 'Network Issues', count: 387, resolved: 342, avgTime: 3.2, priority: 'high', trend: 'down' },
    { type: 'Hardware Failures', count: 298, resolved: 276, avgTime: 4.8, priority: 'high', trend: 'up' },
    { type: 'Software Bugs', count: 456, resolved: 398, avgTime: 5.5, priority: 'medium', trend: 'stable' },
    { type: 'Configuration Help', count: 234, resolved: 221, avgTime: 2.1, priority: 'low', trend: 'down' },
    { type: 'Account Issues', count: 189, resolved: 167, avgTime: 1.8, priority: 'medium', trend: 'up' }
  ];

  // Recent tickets
  const recentTickets = [
    {
      id: 'TKT-2024-1567',
      title: 'Network connectivity issues in Mumbai region',
      customer: 'Reliance Enterprises',
      priority: 'high',
      status: 'in-progress',
      assignee: 'Rahul Kumar',
      department: 'Network',
      created: '2 hours ago',
      lastUpdate: '45 mins ago',
      type: 'incident'
    },
    {
      id: 'TKT-2024-1568',
      title: 'Router configuration assistance needed',
      customer: 'TechCorp Solutions',
      priority: 'medium',
      status: 'pending',
      assignee: 'Priya Sharma',
      department: 'Hardware',
      created: '4 hours ago',
      lastUpdate: '2 hours ago',
      type: 'request'
    },
    {
      id: 'TKT-2024-1569',
      title: 'Software licensing query for enterprise package',
      customer: 'Global Communications Ltd',
      priority: 'low',
      status: 'resolved',
      assignee: 'Amit Singh',
      department: 'Software',
      created: '6 hours ago',
      lastUpdate: '1 hour ago',
      type: 'question'
    },
    {
      id: 'TKT-2024-1570',
      title: 'Critical server outage - immediate attention required',
      customer: 'DataFlow Systems',
      priority: 'critical',
      status: 'escalated',
      assignee: 'Sneha Patel',
      department: 'Network',
      created: '8 hours ago',
      lastUpdate: '30 mins ago',
      type: 'incident'
    },
    {
      id: 'TKT-2024-1571',
      title: 'Billing discrepancy in monthly statement',
      customer: 'Metro Telecom',
      priority: 'medium',
      status: 'awaiting-customer',
      assignee: 'Vikram Reddy',
      department: 'Billing',
      created: '12 hours ago',
      lastUpdate: '5 hours ago',
      type: 'question'
    }
  ];

  // Ticket Trend Chart Component
  const TicketTrendChart = () => {
    const maxValue = Math.max(...weeklyTrendData.map(d => Math.max(d.created, d.resolved)));
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">6-Week Ticket Trend</h4>
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Created</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Resolved</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Escalated</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Satisfaction</span>
            </div>
          </div>
        </div>
        {weeklyTrendData.map((week, index) => {
          const createdPercentage = (week.created / maxValue) * 100;
          const resolvedPercentage = (week.resolved / maxValue) * 100;
          const escalatedPercentage = (week.escalated / maxValue) * 100;
          
          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-gray-700">
                {week.week}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex space-x-3">
                    <span className="text-blue-600 font-medium">{week.created} created</span>
                    <span className="text-green-600 font-medium">{week.resolved} resolved</span>
                    <span className="text-red-600 font-medium">{week.escalated} escalated</span>
                  </div>
                  <span className="text-purple-600 font-bold">{week.satisfaction}% satisfaction</span>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="absolute bg-blue-500 h-3 rounded-full opacity-80"
                    style={{ width: `${createdPercentage}%` }}
                  ></div>
                  <div 
                    className="absolute bg-green-500 h-3 rounded-full opacity-70"
                    style={{ width: `${resolvedPercentage}%`, left: `${createdPercentage * 0.1}%` }}
                  ></div>
                  {week.escalated > 0 && (
                    <div 
                      className="absolute bg-red-500 h-3 rounded-full opacity-90"
                      style={{ width: `${escalatedPercentage}%`, right: '2%' }}
                    ></div>
                  )}
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
    return (
      <div className="space-y-4">
        {departmentPerformance.map((dept, index) => {
          const resolvedPercentage = (dept.resolved / dept.totalTickets) * 100;
          const pendingPercentage = (dept.pending / dept.totalTickets) * 100;
          const satisfactionStatus = dept.satisfaction >= dept.target ? 'excellent' : dept.satisfaction >= 90 ? 'good' : 'needs-improvement';
          
          return (
            <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{dept.department}</h4>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm px-2 py-1 rounded-full font-medium ${
                    satisfactionStatus === 'excellent' ? 'bg-green-100 text-green-800' :
                    satisfactionStatus === 'good' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {dept.satisfaction}% satisfaction
                  </span>
                  <span className="text-xs text-gray-500">{dept.agents} agents</span>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-3 mb-3 text-sm">
                <div>
                  <p className="text-gray-600">Total Tickets</p>
                  <p className="font-bold text-gray-900">{dept.totalTickets}</p>
                </div>
                <div>
                  <p className="text-gray-600">Resolved</p>
                  <p className="font-bold text-green-600">{dept.resolved}</p>
                </div>
                <div>
                  <p className="text-gray-600">Pending</p>
                  <p className="font-bold text-orange-600">{dept.pending}</p>
                </div>
                <div>
                  <p className="text-gray-600">Avg Time</p>
                  <p className="font-bold text-blue-600">{dept.avgTime}h</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Resolution Rate: {resolvedPercentage.toFixed(1)}%</span>
                  <span>{dept.escalations} escalations</span>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`absolute h-2 rounded-full ${
                      dept.color === 'blue' ? 'bg-blue-500' :
                      dept.color === 'green' ? 'bg-green-500' :
                      'bg-purple-500'
                    }`}
                    style={{ width: `${resolvedPercentage}%` }}
                  ></div>
                  <div 
                    className="absolute bg-orange-500 h-2 rounded-full opacity-60"
                    style={{ width: `${pendingPercentage}%, left: ${resolvedPercentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Target Achievement</span>
                  <span>{dept.satisfaction}% of {dept.target}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div 
                    className={`h-1 rounded-full ${
                      dept.satisfaction >= dept.target ? 'bg-green-500' :
                      dept.satisfaction >= 90 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${(dept.satisfaction / dept.target) * 100}%` }}
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
              <Headphones className="w-5 h-5 text-indigo-600" />
            </div>
            <h1 className="text-xl font-bold text-white">TechSupport</h1>
          </div>
        </div>
        
        <nav className="mt-6">
          {[
            { id: 'overview', label: 'Support Overview', icon: BarChart3 },
            { id: 'tickets', label: 'Ticket Management', icon: MessageSquare },
            { id: 'agents', label: 'Agent Dashboard', icon: Users },
            { id: 'analytics', label: 'Performance Analytics', icon: TrendingUp },
            { id: 'knowledge', label: 'Knowledge Base', icon: FileText },
            { id: 'escalations', label: 'Escalations', icon: AlertTriangle },
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
              <span className="text-sm font-medium text-white">Support Tip</span>
            </div>
            <p className="text-xs text-indigo-200">First response within 2 hours increases satisfaction by 40%!</p>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        {/* <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-gray-900">Technical Support Dashboard</h2>
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
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Priorities</option>
                  <option value="critical">Critical Only</option>
                  <option value="high">High Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="low">Low Priority</option>
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
                  placeholder="Search tickets..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button className="relative p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-medium">
                  TS
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header> */}

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Support Overview Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { 
                title: 'Total Tickets', 
                value: supportMetrics.totalTickets.toLocaleString(), 
                change: '+12.3%', 
                trend: 'up', 
                icon: MessageSquare, 
                color: 'blue',
                subtitle: 'This month',
                breakdown: `Open: ${supportMetrics.openTickets}` | `Resolved: ${supportMetrics.resolvedTickets}`
              },
              { 
                title: 'Resolution Time', 
                value: `${supportMetrics.avgResolutionTime}h`, 
                change: '-8.7%', 
                trend: 'down', 
                icon: Clock, 
                color: 'green',
                subtitle: 'Average resolution',
                breakdown: `First response: ${supportMetrics.firstResponseTime}h avg`
              },
              { 
                title: 'Customer Satisfaction', 
                value: `${supportMetrics.customerSatisfaction}%`, 
                change: '+5.2%', 
                trend: 'up', 
                icon: ThumbsUp, 
                color: 'purple',
                subtitle: 'Customer rating',
                breakdown: `SLA compliance: ${supportMetrics.slaCompliance}%`
              },
              { 
                title: 'Active Agents', 
                value: '26', 
                change: '+2.1%', 
                trend: 'up', 
                icon: UserCheck, 
                color: 'orange',
                subtitle: 'Currently online',
                breakdown: `Escalations: ${supportMetrics.escalatedTickets}` | `Repeats: ${supportMetrics.repeatTickets}`
              }
            ].map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    metric.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    metric.color === 'green' ? 'bg-green-50 text-green-600' :
                    metric.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                    'bg-orange-50 text-orange-600'
                  }`}>
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <div className={`flex items-center text-sm font-semibold ${
                    metric.trend === 'up' && metric.title !== 'Resolution Time' ? 'text-green-600' : 
                    metric.trend === 'down' && metric.title === 'Resolution Time' ? 'text-green-600' :
                    metric.trend === 'up' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {(metric.trend === 'up' && metric.title !== 'Resolution Time') || 
                     (metric.trend === 'down' && metric.title === 'Resolution Time') ? 
                      <ArrowUpRight className="w-4 h-4 mr-1" /> : 
                      <ArrowDownRight className="w-4 h-4 mr-1" />}
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

          {/* Ticket Analytics & Department Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Ticket Trend Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Ticket Trend Analysis</h3>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">View Detailed Report</button>
              </div>
              
              <TicketTrendChart />
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-700 font-medium">Resolution Rate</p>
                      <p className="text-xl font-bold text-blue-900">{((supportMetrics.resolvedTickets / supportMetrics.totalTickets) * 100).toFixed(1)}%</p>
                      <p className="text-xs text-blue-600 mt-1">This month</p>
                    </div>
                    <CheckCircle2 className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-700 font-medium">SLA Compliance</p>
                      <p className="text-xl font-bold text-green-900">{supportMetrics.slaCompliance}%</p>
                      <p className="text-xs text-green-600 mt-1">Target: 95%</p>
                    </div>
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Department Performance */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Department Performance</h3>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">View All Teams</button>
              </div>
              
              <DepartmentChart />
            </div>
          </div>

          {/* Ticket Categories & Recent Tickets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Ticket Categories Performance */}
            <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Ticket Categories</h3>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">Manage</button>
              </div>
              
              <div className="space-y-4">
                {ticketCategories.map((category, index) => (
                  <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{category.type}</h4>
                      <div className={`w-2 h-2 rounded-full ${
                        category.priority === 'high' || category.priority === 'critical' ? 'bg-red-500' :
                        category.priority === 'medium' ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div>
                        <p className="text-gray-600">Total</p>
                        <p className="font-bold text-gray-900">{category.count}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Resolved</p>
                        <p className="font-bold text-green-600">{category.resolved}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Avg: {category.avgTime}h</span>
                      <div className={`flex items-center ${
                        category.trend === 'up' ? 'text-red-600' : 
                        category.trend === 'down' ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {category.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> :
                         category.trend === 'down' ? <TrendingDown className="w-3 h-3 mr-1" /> :
                         <Activity className="w-3 h-3 mr-1" />}
                        <span className="text-xs font-medium">{category.trend}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Support Tickets */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Recent Support Tickets</h3>
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
                {recentTickets.map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg ${
                        ticket.priority === 'critical' ? 'bg-red-50 text-red-600' :
                        ticket.priority === 'high' ? 'bg-orange-50 text-orange-600' :
                        ticket.priority === 'medium' ? 'bg-yellow-50 text-yellow-600' :
                        'bg-green-50 text-green-600'
                      }`}>
                        {ticket.type === 'incident' ? <AlertTriangle className="w-5 h-5" /> : 
                         ticket.type === 'request' ? <Wrench className="w-5 h-5" /> :
                         <MessageCircle className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{ticket.title}</p>
                        <p className="text-xs text-gray-600">{ticket.customer} • {ticket.department}</p>
                        <p className="text-xs text-gray-400">{ticket.created} • Updated {ticket.lastUpdate}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600 mb-1">#{ticket.id}</p>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        ticket.status === 'resolved' ? 'bg-green-100 text-green-800' :
                        ticket.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                        ticket.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        ticket.status === 'escalated' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {ticket.status === 'resolved' ? <CheckCircle2 className="w-3 h-3 mr-1" /> : 
                         ticket.status === 'in-progress' ? <Play className="w-3 h-3 mr-1" /> :
                         ticket.status === 'pending' ? <Pause className="w-3 h-3 mr-1" /> :
                         ticket.status === 'escalated' ? <AlertTriangle className="w-3 h-3 mr-1" /> :
                         <Clock className="w-3 h-3 mr-1" />}
                        {ticket.status.replace('-', ' ')}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{ticket.assignee}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-indigo-700 font-medium">Today's Activity</p>
                    <p className="text-2xl font-bold text-indigo-900">{supportMetrics.openTickets} Active Tickets</p>
                    <p className="text-xs text-indigo-600 mt-1">{Math.round(supportMetrics.openTickets / 26)} avg per agent</p>
                  </div>
                  <Activity className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions & Support Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Quick Action Buttons */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-medium transition-colors flex flex-col items-center shadow-md hover:shadow-lg">
                  <PlusCircle className="w-6 h-6 mb-2" />
                  <span className="text-sm">Create Ticket</span>
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg font-medium transition-colors flex flex-col items-center shadow-md hover:shadow-lg">
                  <Users className="w-6 h-6 mb-2" />
                  <span className="text-sm">Assign Agent</span>
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg font-medium transition-colors flex flex-col items-center shadow-md hover:shadow-lg">
                  <BarChart3 className="w-6 h-6 mb-2" />
                  <span className="text-sm">Analytics Report</span>
                </button>
                <button className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg font-medium transition-colors flex flex-col items-center shadow-md hover:shadow-lg">
                  <AlertTriangle className="w-6 h-6 mb-2" />
                  <span className="text-sm">View Escalations</span>
                </button>
              </div>
            </div>

            {/* Support Highlights */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Support Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Avg Response Time</p>
                      <p className="text-xs text-gray-600">First customer contact</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-blue-600">{supportMetrics.firstResponseTime}h</p>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Resolution Rate</p>
                      <p className="text-xs text-gray-600">Monthly success rate</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-green-600">{((supportMetrics.resolvedTickets / supportMetrics.totalTickets) * 100).toFixed(1)}%</p>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <ThumbsUp className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Customer Rating</p>
                      <p className="text-xs text-gray-600">Satisfaction score</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-purple-600">{supportMetrics.customerSatisfaction}%</p>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Critical Tickets</p>
                      <p className="text-xs text-gray-600">High priority issues</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-orange-600">{supportMetrics.escalatedTickets}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <BarChart3 className="w-4 h-4 mr-2" />
              Generate Support Report
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <MessageSquare className="w-4 h-4 mr-2" />
              Bulk Ticket Actions
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Users className="w-4 h-4 mr-2" />
              Agent Performance
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

export default TechnicalSupportDashboard;