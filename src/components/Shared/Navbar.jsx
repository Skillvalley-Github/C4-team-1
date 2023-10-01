import { themeChange } from "theme-change";
import React, { useEffect, useState} from "react";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";
import profilePhoto from "../../assets/images/profile-photo.png";
// import { openRightDrawer } from '../features/common/rightDrawerSlice';
// import { RIGHT_DRAWER_TYPES } from '../utils/globalConstantUtil'

import { NavLink, Routes, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // const {noOfNotifications, pageTitle} = useSelector(state => state.header)
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme"),
  );

  const [pageTitle, setPageTitle]  = useState("");
  const currentRoute = useLocation().pathname;

  useEffect(()=>{
    if(currentRoute==="/") setPageTitle("Dashboard")
    else if(currentRoute==="/employeedata") setPageTitle("Team")
    else if(currentRoute==="/payroll/taxdeductions") setPageTitle("Tax Deductions")
    else if(currentRoute==="/payroll/reimbursements") setPageTitle("Reimbursements")
    else if(currentRoute==="/payroll/settings") setPageTitle("Payroll Settings")
    else if(currentRoute==="/attendance") setPageTitle("Attendance")
    else if(currentRoute==="/leaveTracker") setPageTitle("Leave Tracker")
    else if(currentRoute==="/tasks") setPageTitle("Tasks")
    else if(currentRoute==="/profile") setPageTitle("Profile")
    else if(currentRoute==="/payroll/taxdeductions/regime-selection") setPageTitle("Regime Selection")
    else if(currentRoute==="/payroll/taxdeductions/home-rent") setPageTitle("Home Rent")
    else if(currentRoute==="/payroll/taxdeductions/section-80-deductions") setPageTitle("Section-80 Deductions")
    else if(currentRoute==="/payroll/taxdeductions/home-loan") setPageTitle("Home Loan")
    else if(currentRoute==="/payroll/taxdeductions/leave-travel-allowance") setPageTitle("Leave Travel Allowance")
    else setPageTitle("")
  })

  useEffect(() => {
    themeChange(false);
    if (currentTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
    // 👆 false parameter is required for react project
  }, []);

  // Opening right sidebar for notification
  // const openNotification = () => {
  //     dispatch(openRightDrawer({header : "Notifications", bodyType : RIGHT_DRAWER_TYPES.NOTIFICATION}))
  // }

  function logoutUser() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <>
      <div className="navbar z-10 flex justify-between  bg-base-100 shadow-md sticky top-0">
        {/* Menu toogle for mobile view or small screen */}
        <div className="">
          <label
            htmlFor="left-sidebar-drawer"
            className="drawer-button ml-1 mr-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-2 text-center text-white focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 lg:hidden"
          >
            <Bars3Icon className="inline-block h-5 w-5" />
          </label>
          <h1 className={`ml-2 text-2xl font-semibold` + (pageTitle.length>10 ? "ml-2 max-sm:text-base font-semibold" : "")}>{pageTitle}</h1>
        </div>

        <div className="order-last">
          {/* Multiple theme selection, uncomment this if you want to enable multiple themes selection, 
                also includes corporate and retro themes in tailwind.config file */}

          {/* <select className="select select-sm mr-4" data-choose-theme>
                    <option disabled selected>Theme</option>
                    <option value="light">Default</option>
                    <option value="dark">Dark</option>
                    <option value="corporate">Corporate</option>
                    <option value="retro">Retro</option>
                </select> */}

          {/* Light and dark theme selection toogle **/}
          <label className="swap">
            <input type="checkbox" />
            <SunIcon
              data-set-theme="light"
              data-act-class="ACTIVECLASS"
              className={
                "h-6 w-6 fill-current " +
                (currentTheme === "dark" ? "swap-on" : "swap-off")
              }
            />
            <MoonIcon
              data-set-theme="dark"
              data-act-class="ACTIVECLASS"
              className={
                "h-6 w-6 fill-current " +
                (currentTheme === "light" ? "swap-on" : "swap-off")
              }
            />
          </label>

          {/* Notification icon */}
          <button
            className="btn btn-circle btn-ghost  ml-4"
            // onClick={() => openNotification()}
          >
            <div className="indicator">
              <BellIcon className="h-6 w-6" />
              {/* {noOfNotifications > 0 ? */}
              <span className="badge indicator-item badge-secondary badge-sm bg-red-500">
                {/* {noOfNotifications} */}
              </span>
              {/* :null */}
            </div>
          </button>

          {/* Profile icon, opening menu on click */}
          <div className="dropdown dropdown-end ml-4">
            <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
              <div className="w-10 rounded-full">
                <img src={profilePhoto} alt="profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu-compact menu dropdown-content rounded-box mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li className="justify-between">
                <Link to={"profile"}>
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li className="">
                <Link to={"/app/settings-billing"}>Bill History</Link>
              </li>
              <div className="divider mb-0 mt-0"></div>
              <li>
                <a onClick={logoutUser}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
