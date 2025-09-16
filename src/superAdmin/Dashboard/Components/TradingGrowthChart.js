import { useState } from "react";
import { Area, XAxis, YAxis, CartesianGrid } from "recharts";

import {
  AreaChart,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const growthStats = {
  leads: [
    { name: "Apr 1", value: 132 },
    { name: "Apr 5", value: 134 },
    { name: "Apr 10", value: 130 },
    { name: "Apr 15", value: 136 },
    { name: "Apr 20", value: 133 },
    { name: "Apr 25", value: 138 },
    { name: "Apr 30", value: 135 },
    { name: "May 5", value: 139 },
    { name: "May 10", value: 137 },
    { name: "May 15", value: 143 },
    { name: "May 20", value: 140 },
    { name: "May 25", value: 144 },
    { name: "May 30", value: 142 },
  ],
  customers: [
    { name: "Apr 1", value: 80 },
    { name: "Apr 5", value: 82 },
    { name: "Apr 10", value: 79 },
    { name: "Apr 15", value: 85 },
    { name: "Apr 20", value: 81 },
    { name: "Apr 25", value: 87 },
    { name: "Apr 30", value: 83 },
    { name: "May 5", value: 88 },
    { name: "May 10", value: 84 },
    { name: "May 15", value: 90 },
    { name: "May 20", value: 86 },
    { name: "May 25", value: 91 },
    { name: "May 30", value: 89 },
    { name: "Apr 1", value: 80 },
    { name: "Apr 5", value: 82 },
    { name: "Apr 10", value: 79 },
    { name: "Apr 15", value: 85 },
    { name: "Apr 20", value: 81 },
    { name: "Apr 25", value: 87 },
    { name: "Apr 30", value: 83 },
    { name: "May 5", value: 88 },
    { name: "May 10", value: 84 },
    { name: "May 15", value: 90 },
    { name: "May 20", value: 86 },
    { name: "May 25", value: 91 },
    { name: "May 30", value: 89 },
  ],
  carriers: [
    { name: "Apr 1", value: 60 },
    { name: "Apr 5", value: 62 },
    { name: "Apr 10", value: 59 },
    { name: "Apr 15", value: 65 },
    { name: "Apr 20", value: 61 },
    { name: "Apr 25", value: 67 },
    { name: "Apr 30", value: 63 },
    { name: "May 5", value: 68 },
    { name: "May 10", value: 64 },
    { name: "May 15", value: 70 },
    { name: "May 20", value: 66 },
    { name: "May 25", value: 71 },
    { name: "May 30", value: 69 },

  ],
};


const GrowthTabChart = () => {
  const [tab, setTab] = useState("leads");

  return (
    <div className="bg-white max-w-[870px] border border-gray-300 rounded-lg p-4">
      {/* Tabs */}
      <div className="flex gap-4 mb-3 justify-center">
        {["leads", "customers", "carriers"].map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-2 text-sm rounded ${tab === key ? "bg-green-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
          >
            {`Active ${key.charAt(0).toUpperCase() + key.slice(1)}`}
          </button>
        ))}
      </div>

      {/* Top Stats */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Active {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </h2>
          <div className="text-sm text-gray-500">
            2.5K <span className="mx-1 text-gray-400">→</span> 3.1K
          </div>
        </div>
        <div className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full font-medium">
          +5.4%
        </div>
      </div>

      {/* Jagged Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={growthStats[tab]}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="jaggedFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            domain={["dataMin - 2", "dataMax + 2"]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              fontSize: "12px",
              color: "#111827",
            }}
            labelStyle={{ color: "#6b7280" }}
            cursor={{ stroke: "#22c55e", strokeWidth: 1 }}
          />

          <Area
            type="linear" // Jagged line
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={2}
            fill="url(#jaggedFill)"
            dot={false}
            strokeLinejoin="miter"
            strokeLinecap="square"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};


export default GrowthTabChart;