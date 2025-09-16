import { Activity } from 'lucide-react';

const UserDistribution = ({ stats }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">User Distribution</h3>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View Details</button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Active Users</span>
          </div>
          <div className="text-right">
            <span className="text-sm font-medium">{stats.activeCustomers.toLocaleString()}</span>
            <div className="text-xs text-gray-500">71.9%</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Inactive Users</span>
          </div>
          <div className="text-right">
            <span className="text-sm font-medium">{stats.inactiveCustomers.toLocaleString()}</span>
            <div className="text-xs text-gray-500">28.1%</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">New Leads</span>
          </div>
          <div className="text-right">
            <span className="text-sm font-medium">{stats.leads.toLocaleString()}</span>
            <div className="text-xs text-gray-500">Potential</div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-slate-800 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-300">Total Platform Users</p>
              <p className="text-2xl font-semibold">{(stats.totalCustomers + stats.leads).toLocaleString()}</p>
            </div>
            <Activity className="w-8 h-8 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDistribution;