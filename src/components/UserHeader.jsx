import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { UserData } from "../context/User";

const UserHeader = () => {
  const { user } = UserData();
  return (
    <div className="w-full flex justify-between items-centerS px-4 py-4">
      <h1 className="md:text-3xl text-xl">
        good morning,{" "}
        <span className="text-blue-700">{user ? user.name : "Guest"}</span>
      </h1>

      <div className="flex items-center cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user profile"
          className="md:w-8 md:h-8 w-6 h-6 rounded-full object-cover"
        />

        <p className="md:ml-3 ml-2 md:text-sm text-sm">
          {user ? user.name : "Guest"}
        </p>
        <FiChevronDown className="md:text-sm text-xs md:ml-3 ml-2 text-gray-500" />
      </div>
    </div>
  );
};

export default UserHeader;
