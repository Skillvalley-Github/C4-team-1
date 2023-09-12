import React from "react";
import { Outlet } from "react-router";
import Navbar2 from "./Navbar2";
import Sidebar2 from "./Sidebar2";

const Layout = () => {
  return (
      // <div>{<Outlet />}</div>
      <div className="drawer-mobile drawer">
        <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
         <Navbar2 />
        </div>
        <Sidebar2 />
    </div>
  );
};

export default Layout;
