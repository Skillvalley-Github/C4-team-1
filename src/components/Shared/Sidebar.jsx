import React from "react";
import Menus from "../Menus/MenuData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav>
        <ul className=" p-2 w-48 overflow-hidden min-h-screen border-r bg-[#1B1A47] text-base-content drop-shadow-blue-lg">
          {Menus.map((menu, index) => {
            return (
              <Link
                className="flex items-center px-2 py-2 text-white transition-colors duration-300 transform rounded-lg   dark:hover:bg-[#303056] hover:text-blue-500 "
                to={menu.path}
                key={index}
              >
                <li>
                  <div className="flex flex-row">
                    <span>
                      {React.cloneElement(menu.icon, {
                        className: " h-4 w-4 ",
                      })}
                    </span>
                    <span className={`mx-2 text-sm font-normal `}>
                      {menu.title}
                    </span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
