// src/components/Chart.tsx
import React from "react";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface ChartProps {
  title: string;
  type: "pie" | "bar";
  data: number[];
}

const Chart: React.FC<ChartProps> = ({ title, type, data }) => {
  const chartData = data.map((value, index) => ({
    name: `Category ${index + 1}`,
    value,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-secondary mb-4">{title}</h3>
      {type === "pie" && (
        <PieChart width={300} height={300}>
          <Pie data={chartData} dataKey="value" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
        </PieChart>
      )}
      {type === "bar" && (
        <BarChart width={400} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      )}
    </div>
  );
};

export default Chart;