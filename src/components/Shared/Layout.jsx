import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <div className="drawer-mobile drawer h-fit overscroll-none bg-red-200 bg-gradient-to-b from-red-200 via-red-300 to-red-400 lg:drawer-open">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex min-w-full flex-col">
          <Navbar pageTitle={"Dashboard"} />
          <div className="">
            <Outlet />
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Layout;
