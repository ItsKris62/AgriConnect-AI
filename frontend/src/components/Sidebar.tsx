// src/components/Sidebar.tsx
import React from "react";
import Link from "next/link";

interface SidebarProps {
  user: any | null;
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  if (!user) return null;

  return (
    <aside className="bg-primary/10 p-4 sticky top-0">
      <h2 className="text-xl font-bold text-secondary mb-4">Hello, {user.name}!</h2>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard" className="block py-2 text-primary hover:text-highlight">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/profile" className="block py-2 text-primary hover:text-highlight">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/marketplace" className="block py-2 text-primary hover:text-highlight">
              Marketplace
            </Link>
          </li>
          <li>
            <Link href="/community-feed" className="block py-2 text-primary hover:text-highlight">
              Community Feed
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;