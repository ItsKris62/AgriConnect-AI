// src/pages/Profile.tsx
import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-secondary mb-8">My Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">Name: John Doe</p>
        <p className="text-gray-600 mt-2">Email: john.doe@example.com</p>
      </div>
    </div>
  );
};

export default Profile;