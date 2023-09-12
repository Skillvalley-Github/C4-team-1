import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "../../app/Dashboard/Dashboard";
import EmployeeMgmt from "../../app/Employees/EmployeeMgmt";

const Layout = () => {
  return (
    <>
      <div className="drawer-mobile drawer lg:drawer-open bg-slate-300">
        <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Navbar pageTitle={'Dashboard'}/>
        </div>
        
        <Sidebar/>
      </div>
      <EmployeeMgmt/>
      <div>{<Outlet />}</div>
    </>
  );
};

export default Layout;
