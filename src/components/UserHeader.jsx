import React from "react";
import { FiChevronDown } from "react-icons/fi";

const UserHeader = () => {
  return (
    <div className="w-full flex justify-between items-centerS px-4 py-2">
      <h1 className="md:text-3xl text-2xl">
        good morning, <span className="text-blue-700">paul</span>
      </h1>

      <div className="flex items-center cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user profile"
          className="w-8 h-8 rounded-full object-cover"
        />

        <p className="ml-3 text-sm">Paul Manual</p>
        <FiChevronDown className="text-sm ml-3 text-gray-500" />
      </div>
    </div>
  );
};

export default UserHeader;
