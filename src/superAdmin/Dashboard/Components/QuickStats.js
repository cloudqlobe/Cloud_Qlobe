import { Target, Shield, Users } from 'lucide-react';

const QuickStats = ({ stats }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Overview</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Total Leads</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.leads.toLocaleString()}</p>
          </div>
          <Target className="w-8 h-8 text-blue-600" />
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Total Admins</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.totalAdmins}</p>
          </div>
          <Shield className="w-8 h-8 text-indigo-600" />
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Team Member</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.totalMembers} people</p>
          </div>
          <Users className="w-8 h-8 text-green-600" />
        </div>
      </div>
    </div>
  );
};

export default QuickStats;