import React from "react";
import routes from "../../routes/sidebar";
import { NavLink, Routes, Link, useLocation } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import logo from "../../assets/images/logo-black.svg";

const Sidebar2 = () => {
  const location = useLocation();
  const close = (e) => {
    document.getElementById("left-sidebar-drawer").click();
  };
  return (
    <div className="drawer-side ">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu  w-80 bg-base-100 pt-2 text-base-content">
        <button
          className="btn btn-circle btn-ghost  absolute right-0 top-0 z-50 mr-2 mt-4 bg-base-300 lg:hidden"
          onClick={() => close()}>
          <XMarkIcon className="inline-block h-5 w-5" />
        </button>

        <li className="mb-2 text-xl font-semibold">
          <Link to={"/app/welcome"}>
            <img className="mask mask-squircle w-10" src={logo} alt="DashWind Logo" />
            DashWind
          </Link>{" "}
        </li>
        {routes.map((route, k) => {
          return (
            <li className="" key={k}>
              {route.submenu ? (
                <SidebarSubmenu {...route} />
              ) : (
                <NavLink
                  end
                  to={route.path}
                  className={({ isActive }) => `${isActive ? "bg-base-200  font-semibold " : "font-normal"}`}>
                  {route.icon} {route.name}
                  {location.pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-br-md rounded-tr-md bg-primary "
                      aria-hidden="true"></span>
                  ) : null}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar2;
