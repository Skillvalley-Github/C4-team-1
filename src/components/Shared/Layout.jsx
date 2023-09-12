import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <div className="drawer-mobile drawer bg-slate-300 lg:drawer-open overscroll-none h-screen">
        <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col min-w-full">
          <Navbar pageTitle={"Dashboard"} />

          <Outlet />
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Layout;
