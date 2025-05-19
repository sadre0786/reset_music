import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiSettings,
  FiHelpCircle,
  FiClock,
  FiCreditCard,
} from "react-icons/fi";
import { UserData } from "../context/User";

const UserHeader = () => {
  const { user } = UserData();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-4 py-4 relative">
      <h1 className="md:text-3xl text-xl">
        Good morning,{" "}
        <span className="text-blue-700">{user ? user.name : "Guest"}</span>
      </h1>

      {/* Profile with dropdown */}
      <div className="relative">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user profile"
            className="md:w-8 md:h-8 w-6 h-6 rounded-full object-cover"
          />
          <p className="md:ml-3 ml-2 md:text-sm text-sm">
            {user ? user.name : "Guest"}
          </p>
          {/* Toggle Icon */}
          {open ? (
            <FiChevronUp className="md:text-sm text-xs md:ml-3 ml-2 text-gray-500" />
          ) : (
            <FiChevronDown className="md:text-sm text-xs md:ml-3 ml-2 text-gray-500" />
          )}
        </div>

        {open && (
          <div className="absolute right-0 mt-3 w-52 bg-image rounded-xl border border-blue-500 shadow-[0_0_8px_1px_#3b82f6] z-50">
            <ul className="py-2 text-sm text-gray-400">
              <li className="px-4 py-2 flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-blue-500">
                <FiCreditCard className="text-inherit" />
                Manage Subscription
              </li>
              <li className="px-4 py-2 flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-blue-500">
                <FiClock className="text-inherit" />
                History
              </li>
              <li className="px-4 py-2 flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-blue-500">
                <FiSettings className="text-inherit" />
                Settings
              </li>
              <li className="px-4 py-2 flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-blue-500">
                <FiHelpCircle className="text-inherit" />
                Help & Support
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserHeader;
