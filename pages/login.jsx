import React, { useState } from 'react';
import { FaUserCircle, FaLock } from 'react-icons/fa';
import '../app/globals.css';
import RootLayout from "../app/layout";

export default function Login() {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleLogin = () => {
    // Handle user login here
    console.log('User logged in:', user.username);
  };

  return (
    <RootLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg p-8 rounded-md w-80">
          <h2 className="text-2xl font-semibold mb-4">Login to Your Account</h2>
          <div className="mb-4">
            <div className="flex items-center border rounded-full p-2">
              <FaUserCircle className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Username"
                className="w-full outline-none"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center border rounded-full p-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white rounded-full py-2 px-6 hover-bg-blue-700 w-full"
          >
            Login
          </button>
        </div>
      </div>
    </RootLayout>
  );
}
