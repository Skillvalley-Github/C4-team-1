import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <div className="bg-sky-200">navbar</div>
      <div className="bg-teal-200">sidebar</div>
      <div >{<Outlet />}</div>
      <div>footer</div>
      </div>
    
  );
};

export default Layout;
