import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  console.log("Current user in Navbar:", user); // Debugging line

  return (
    <header className="bg-gradient-to-b from-black to-transparent fixed top-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className="w-28 cursor-pointer"
          />
          {user && <p className="text-white">Welcome, {user.email}</p>}
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="/Icons/avatar.png"
            alt="Profile"
            className="w-8 h-8 rounded cursor-pointer"
            onClick={() => logout()}
          />
          <div className="text-white cursor-pointer" onClick={logout}>
            Logout
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
