import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const User = () => {
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="ml-[300px] p-6 w-full bg-slate-100 min-h-[calc(100vh-92px)] overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default User;
