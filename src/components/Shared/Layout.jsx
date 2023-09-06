import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import profilePhoto from "../../assets/images/profile-photo.png";

const Layout = () => {
  return (
    <div>
      <Navbar profileImage={profilePhoto} />
      <div >{<Outlet />}</div>
      <div>footer</div>
      </div>
    
  );
};

export default Layout;
