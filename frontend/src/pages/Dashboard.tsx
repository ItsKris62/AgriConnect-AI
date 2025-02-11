// src/pages/Dashboard.tsx
import React from "react";
import Chart from "../components/Chart";

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-secondary mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Chart title="Sales Overview" type="pie" data={[50, 30, 20]} />
        <Chart title="Product Performance" type="bar" data={[10, 20, 30, 40]} />
      </div>
    </div>
  );
};

export default Dashboard;