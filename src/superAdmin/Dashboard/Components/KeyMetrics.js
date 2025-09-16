import { Users, UserCheck, DollarSign, Target, TrendingUp, TrendingDown } from 'lucide-react';

const KeyMetrics = ({ stats }) => {
  const metrics = [
    { title: 'Total Customers', value: stats.totalCustomers.toLocaleString(), change: '+12.5%', trend: 'up', icon: Users, color: 'blue' },
    { title: 'Active Customers', value: stats.activeCustomers.toLocaleString(), change: '+8.2%', trend: 'up', icon: UserCheck, color: 'green' },
    { title: 'Monthly Revenue', value: `$${(stats.revenue / 1000000).toFixed(1)}M`, change: '+23.1%', trend: 'up', icon: DollarSign, color: 'indigo' },
    { title: 'Conversion Rate', value: `${stats.conversionRate}%`, change: '-2.4%', trend: 'down', icon: Target, color: 'orange' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className={`p-3 rounded-lg ${metric.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                metric.color === 'green' ? 'bg-green-50 text-green-600' :
                  metric.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                    'bg-orange-50 text-orange-600'
              }`}>
              <metric.icon className="w-6 h-6" />
            </div>
            <div className={`flex items-center text-sm font-medium ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
              {metric.trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
              {metric.change}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900">{metric.value}</h3>
            <p className="text-gray-600 text-sm mt-1">{metric.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyMetrics;