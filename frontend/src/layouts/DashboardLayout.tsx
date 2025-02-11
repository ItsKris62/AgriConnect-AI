// src/layouts/DashboardLayout.tsx
import React from "react";
import Sidebar from "../components/Sidebar";
import MainLayout from "./MainLayout";

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: any | null;
  onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, user, onLogout }) => {
  return (
    <MainLayout user={user} onLogout={onLogout}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-8 px-4">
        <div className="md:col-span-1">
          <Sidebar user={user} />
        </div>
        <div className="md:col-span-3">{children}</div>
      </div>
    </MainLayout>
  );
};

export default DashboardLayout;