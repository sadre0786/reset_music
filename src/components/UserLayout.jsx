import React from "react";
import UserSidebar from "./UserSidebar";

const UserLayout = ({ children }) => {
  return (
    <div className="h-full bg-image">
      <div className="flex">
        <UserSidebar />
        <div className="w-full  overflow-auto text-white">{children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
