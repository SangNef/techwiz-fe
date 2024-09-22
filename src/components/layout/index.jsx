import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../footer";

const Layout = () => {
  return (
    <div className="relative">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
