import { 
  UserCheck, 
  Target, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  MessageSquare,
  Mail,
  Phone,
  Globe,
  Search,
  Activity,
  CheckCircle,
  Clock,
  Filter,
  Download,
  Eye,
  Send,
  ExternalLink,
  Star,
  MousePointer,
  Smartphone,
  Monitor,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import Layout from '../layout/Layout';

const MarketingDashboard = () => {

  // Marketing-focused data
  const stats = {
    totalLeads: 3847,
    activeLeads: 2156,
    inactiveLeads: 1691,
    convertedLeads: 892,
    totalQueries: 1234,
    emailQueries: 678,
    phoneQueries: 321,
    webformQueries: 235,
    revenue: 1847632,
    conversionRate: 23.2,
    avgDealValue: 2072
  };

  const leadActivity = [
    { id: 1, type: 'new_lead', name: 'Sarah Johnson', source: 'Website Form', action: 'Submitted contact form', time: '5 minutes ago', priority: 'high', status: 'new' },
    { id: 2, type: 'email_query', name: 'Mike Chen', source: 'Email Campaign', action: 'Responded to email campaign', time: '12 minutes ago', priority: 'medium', status: 'active' },
    { id: 3, type: 'phone_inquiry', name: 'Emma Davis', source: 'Phone Call', action: 'Requested product demo', time: '23 minutes ago', priority: 'high', status: 'qualified' },
    { id: 4, type: 'web_visit', name: 'David Wilson', source: 'Organic Search', action: 'Downloaded whitepaper', time: '45 minutes ago', priority: 'medium', status: 'nurturing' },
    { id: 5, type: 'conversion', name: 'Lisa Garcia', source: 'Social Media', action: 'Completed purchase', time: '1 hour ago', priority: 'converted', status: 'converted' }
  ];

  const topPerformingSources = [
    { name: 'Website Forms', leads: 1247, conversion: 28.5, revenue: 580000, trend: 'up' },
    { name: 'Email Campaigns', leads: 892, conversion: 31.2, revenue: 420000, trend: 'up' },
    { name: 'Social Media', leads: 634, conversion: 18.7, revenue: 290000, trend: 'down' },
    { name: 'Organic Search', leads: 578, conversion: 24.3, revenue: 350000, trend: 'up' }
  ];

  // Lead funnel data for the last 7 days
  const salesFunnelData = [
    { stage: 'Visitors', count: 12847, day: 'Mon', color: 'bg-blue-500' },
    { stage: 'Leads', count: 3847, day: 'Tue', color: 'bg-indigo-500' },
    { stage: 'Qualified', count: 2156, day: 'Wed', color: 'bg-purple-500' },
    { stage: 'Proposals', count: 1234, day: 'Thu', color: 'bg-pink-500' },
    { stage: 'Negotiations', count: 892, day: 'Fri', color: 'bg-orange-500' },
    { stage: 'Closed Won', count: 456, day: 'Sat', color: 'bg-green-500' },
    { stage: 'Follow-up', count: 234, day: 'Sun', color: 'bg-teal-500' }
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
          )
        })}
      </div>
    );
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      <div className="flex-1 overflow-hidden">
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Key Marketing Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { 
                title: 'Total Leads', 
                value: stats.totalLeads.toLocaleString(), 
                change: '+18.7%', 
                trend: 'up', 
                icon: Target, 
                color: 'indigo',
                subtitle: 'This month' 
              },
              { 
                title: 'Active Leads', 
                value: stats.activeLeads.toLocaleString(), 
                change: '+12.3%', 
                trend: 'up', 
                icon: UserCheck, 
                color: 'green',
                subtitle: 'In pipeline' 
              },
              { 
                title: 'Conversion Rate', 
                value: `${stats.conversionRate}%`, 
                change: '+3.2%', 
                trend: 'up', 
                icon: TrendingUp, 
                color: 'blue',
                subtitle: 'Lead to customer' 
              },
              { 
                title: 'Monthly Revenue', 
                value: `$${(stats.revenue / 1000000).toFixed(1)}M`, 
                change: '+27.4%', 
                trend: 'up', 
                icon: DollarSign, 
                color: 'emerald',
                subtitle: 'From marketing' 
              }
            ].map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    metric.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                    metric.color === 'green' ? 'bg-green-50 text-green-600' :
                    metric.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    'bg-emerald-50 text-emerald-600'
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

          {/* Communication Queries Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">+15%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stats.totalQueries.toLocaleString()}</h3>
              <p className="text-gray-600 text-sm">Total Queries</p>
              <div className="mt-4 w-full bg-blue-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <Mail className="w-8 h-8 text-green-600" />
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium">+22%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stats.emailQueries.toLocaleString()}</h3>
              <p className="text-gray-600 text-sm">Email Queries</p>
              <div className="mt-4 w-full bg-green-100 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <Phone className="w-8 h-8 text-orange-600" />
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium">+8%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stats.phoneQueries.toLocaleString()}</h3>
              <p className="text-gray-600 text-sm">Phone Calls</p>
              <div className="mt-4 w-full bg-orange-100 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium">+31%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stats.webformQueries.toLocaleString()}</h3>
              <p className="text-gray-600 text-sm">Web Forms</p>
              <div className="mt-4 w-full bg-purple-100 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '52%' }}></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Sales Funnel */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Sales Funnel</h3>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">View Details</button>
              </div>
              
              <SalesFunnelChart />
              
              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-indigo-700 font-medium">Avg. Deal Value</p>
                    <p className="text-xl font-bold text-indigo-900">${stats.avgDealValue.toLocaleString()}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
            </div>

            {/* Top Performing Sources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Lead Sources</h3>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">View All</button>
              </div>
              
              <div className="space-y-4">
                {topPerformingSources.map((source, index) => (
                  <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{source.name}</h4>
                      <div className={`flex items-center text-sm ${
                        source.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {source.trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {source.conversion}%
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Leads</p>
                        <p className="font-semibold text-gray-900">{source.leads.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Revenue</p>
                        <p className="font-semibold text-gray-900">${(source.revenue / 1000).toFixed(0)}K</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Status Distribution */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Lead Status</h3>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">Manage</button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-900">Active Leads</p>
                      <p className="text-sm text-green-700">{stats.activeLeads.toLocaleString()} leads</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-green-900">56%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-semibold text-yellow-900">Inactive Leads</p>
                      <p className="text-sm text-yellow-700">{stats.inactiveLeads.toLocaleString()} leads</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-yellow-900">44%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-blue-900">Converted</p>
                      <p className="text-sm text-blue-700">{stats.convertedLeads.toLocaleString()} customers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-blue-900">23%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-200">Monthly Goal</p>
                    <p className="text-xl font-bold">4,500 leads</p>
                    <p className="text-xs text-purple-300 mt-1">85% achieved</p>
                  </div>
                  <Target className="w-8 h-8 text-purple-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity & Communication Queries */}
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
                      activity.status === 'new' ? 'bg-blue-500' :
                      activity.status === 'active' ? 'bg-green-500' :
                      activity.status === 'qualified' ? 'bg-purple-500' :
                      activity.status === 'converted' ? 'bg-emerald-500' :
                      'bg-yellow-500'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-gray-900">{activity.name}</p>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          activity.priority === 'high' ? 'bg-red-100 text-red-600' :
                          activity.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                          activity.priority === 'converted' ? 'bg-green-100 text-green-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {activity.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{activity.action}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs text-gray-500">{activity.time}</p>
                        <span className="text-xs text-indigo-600 font-medium">{activity.source}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Website Traffic Sources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Traffic Sources</h3>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">View Analytics</button>
              </div>
              
              <div className="space-y-6">
                {[
                  { source: 'Direct Traffic', visitors: 4234, percentage: 35, icon: Monitor, color: 'blue' },
                  { source: 'Organic Search', visitors: 3156, percentage: 26, icon: Search, color: 'green' },
                  { source: 'Social Media', visitors: 2847, percentage: 24, icon: Smartphone, color: 'purple' },
                  { source: 'Email Campaigns', visitors: 1823, percentage: 15, icon: Mail, color: 'orange' }
                ].map((traffic, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${
                      traffic.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                      traffic.color === 'green' ? 'bg-green-50 text-green-600' :
                      traffic.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                      'bg-orange-50 text-orange-600'
                    }`}>
                      <traffic.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-900">{traffic.source}</p>
                        <span className="text-sm font-medium text-gray-600">{traffic.percentage}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              traffic.color === 'blue' ? 'bg-blue-500' :
                              traffic.color === 'green' ? 'bg-green-500' :
                              traffic.color === 'purple' ? 'bg-purple-500' :
                              'bg-orange-500'
                            }`}
                            style={{ width: `${traffic.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 ml-3">{traffic.visitors.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-indigo-200">Total Visitors Today</p>
                    <p className="text-2xl font-bold">12,847</p>
                  </div>
                  <MousePointer className="w-8 h-8 text-indigo-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Eye className="w-4 h-4 mr-2" />
              View Lead Details
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Send className="w-4 h-4 mr-2" />
              Launch Campaign
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <Activity className="w-4 h-4 mr-2" />
              Analytics Report
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shadow-md hover:shadow-lg">
              <ExternalLink className="w-4 h-4 mr-2" />
              Export Data
            </button>
          </div>
        </main>
      </div>
    </div>
    </Layout>
  );
};

export default MarketingDashboard;