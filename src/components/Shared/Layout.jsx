import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
      <Navbar  />
      <div>{<Outlet />}</div>
      <Sidebar />

    </div>
  );
};

export default Layout;
