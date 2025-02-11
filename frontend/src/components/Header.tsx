// src/components/Header.tsx
import React from "react";
import Link from "next/link";

interface HeaderProps {
  user: any | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <header className="bg-secondary py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Soko-Yetu</h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-highlight">
                Home
              </Link>
            </li>
            <li>
              <Link href="/marketplace" className="text-white hover:text-highlight">
                Marketplace
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link href="/dashboard" className="text-white hover:text-highlight">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={onLogout} className="text-white hover:text-highlight">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" className="text-white hover:text-highlight">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="text-white hover:text-highlight">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;