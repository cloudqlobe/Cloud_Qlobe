   const TradingChart = ({tradingData}) => {
    const maxValue = Math.max(...tradingData?.map(d => d.high));
    const minValue = Math.min(...tradingData?.map(d => d.low));
    const range = maxValue - minValue;


    return (
      <div className="relative h-64 bg-gray-900 rounded-lg p-4 border">
        {/* Grid lines */}
        <div className="absolute inset-4">
          {[0, 25, 50, 75, 100].map((percent) => (
            <div
              key={percent}
              className="absolute w-full border-t border-gray-700"
              style={{ top: `${percent}%` }}
            />
          ))}
        </div>

        {/* Chart area */}
        <div className="relative h-full flex items-end justify-between px-2 pb-8">
          {tradingData.map((point, index) => {
            const valueHeight = ((point.value - minValue) / range) * 100;
            const highHeight = ((point.high - minValue) / range) * 100;
            const lowHeight = ((point.low - minValue) / range) * 100;
            const isPositive = point.change >= 0;

            return (
              <div key={index} className="flex flex-col items-center space-y-2 group relative">
                {/* Candlestick */}
                <div className="relative">
                  {/* High-Low line */}
                  <div
                    className="absolute w-0.5 bg-gray-400 left-1/2 transform -translate-x-1/2"
                    style={{
                      height: `${(highHeight - lowHeight) * 0.8}px`,
                      bottom: `${lowHeight * 0.8}px`
                    }}
                  />

                  {/* Candle body */}
                  <div
                    className={`w-6 border transition-all duration-300 ${isPositive
                        ? 'bg-green-500 border-green-600'
                        : 'bg-red-500 border-red-600'
                      } hover:opacity-80`}
                    style={{ height: `${Math.max(valueHeight * 0.8, 8)}px` }}
                  />
                </div>

                {/* Hover tooltip */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-16 bg-gray-800 text-white text-xs px-2 py-1 rounded z-10 whitespace-nowrap">
                  <div>Value: ${(point.value / 1000).toFixed(1)}K</div>
                  <div>High: ${(point.high / 1000).toFixed(1)}K</div>
                  <div>Low: ${(point.low / 1000).toFixed(1)}K</div>
                </div>

                {/* Day label */}
                <span className="text-xs text-gray-400">{point.day}</span>

                {/* Change indicator */}
                <span className={`text-xs font-medium ${isPositive ? 'text-green-400' : 'text-red-400'
                  }`}>
                  {isPositive ? '+' : ''}{point.change}%
                </span>
              </div>
            );
          })}
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-4 bottom-12 flex flex-col justify-between text-xs text-gray-400">
          <span>${(maxValue / 1000).toFixed(0)}K</span>
          <span>${(((maxValue + minValue) / 2) / 1000).toFixed(0)}K</span>
          <span>${(minValue / 1000).toFixed(0)}K</span>
        </div>
      </div>
    );
  };

  export default TradingChart;