// src/layouts/MainLayout.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  user: any | null;
  onLogout: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, user, onLogout }) => {
  return (
    <>
      <Header user={user} onLogout={onLogout} />
      <main className="min-h-screen bg-background">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;