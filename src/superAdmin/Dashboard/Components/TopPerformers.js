const TopPerformers = ({ topPerformers }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Top Performers</h3>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
      </div>

      <div className="space-y-4">
        {topPerformers.map((performer, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-lg">
              {performer.avatar}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{performer.name}</p>
              <p className="text-sm text-gray-600">{performer.role}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-green-600">{performer.performance}%</p>
              <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${performer.performance}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformers;