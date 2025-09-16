import { Eye, RefreshCw, Activity } from 'lucide-react';

const ActionButtons = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
        <Eye className="w-4 h-4 mr-2" />
        View Activity Logs
      </button>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
        <RefreshCw className="w-4 h-4 mr-2" />
        Refresh Dashboard
      </button>
      <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
        <Activity className="w-4 h-4 mr-2" />
        Monitor Performance
      </button>
    </div>
  );
};

export default ActionButtons;