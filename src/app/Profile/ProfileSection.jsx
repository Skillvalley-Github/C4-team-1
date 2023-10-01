import React, { useState } from "react";
import { Link } from "react-router-dom";
import Overview from "./ProfileSubPages/Overview"
import Salary from "./ProfileSubPages/Salary"
import Payslip from "./ProfileSubPages/Payslips"
import Forms from "./ProfileSubPages/Forms"
import ProfileSettings from "./ProfileSubPages/ProfileSettings";

const ProfileSection = () => {
  const [activeTab, setActiveTab] = useState("overview");
  function handleActiveTab(tab, data) {
    setActiveTab(tab);
  }

  return (
    <div className="draggable relative m-4 mb-6 flex h-fit min-w-0 flex-col break-words rounded-2xl border bg-base-100 bg-clip-border">
      <div className="min-h-[70px] flex-auto bg-transparent px-9 pb-0 pt-9">
        <div className="mb-6 flex flex-wrap xl:flex-nowrap">
          <div className="mb-5 mr-5">
            <div className="relative inline-block shrink-0 rounded-2xl">
              <img
                className="inline-block h-[80px] w-[80px] shrink-0 rounded-2xl lg:h-[160px] lg:w-[160px]"
                src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
                alt="image"
              />
              <div className="group/tooltip relative">
                <span className="absolute bottom-0 end-0 -mb-1 -mr-2 h-[15px] w-[15px] rounded-full border  border-white bg-success"></span>
                <span className="text-secondary-inverse absolute bottom-0 start-full z-10 -mb-2 ml-4 block transform whitespace-nowrap rounded-2xl bg-white px-3 py-2 text-center text-xs font-medium opacity-0 shadow-sm transition-opacity duration-300 ease-in-out group-hover/tooltip:opacity-100">
                  {" "}
                  Status: Active{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="grow">
            <div className="mb-2 flex flex-wrap items-start justify-between">
              <div className="flex flex-col">
                <div className="mb-2 flex items-center">
                  <Link
                    className="text-secondary-inverse mr-1 text-[1.5rem] font-semibold transition-colors duration-200 ease-in-out hover:text-primary"
                    to="">
                    {" "}
                    Khushal Sachdeva{" "}
                  </Link>
                </div>
                <div className="mb-4 flex flex-wrap pr-2 font-medium">
                  <Link className="text-secondary-dark mb-2 mr-5 flex items-center hover:text-primary" to="">
                    <span className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>{" "}
                    New Delhi, IN{" "}
                  </Link>
                  <Link className="text-secondary-dark mb-2 mr-5 flex items-center hover:text-primary" to="">
                    <span className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                    </span>{" "}
                    skillvalley@example.com{" "}
                  </Link>
                </div>
              </div>
              {/* <div className="my-auto flex flex-wrap">
                <Link
                  to=""
                  className="text-muted bg-light border-light hover:bg-light-dark active:bg-light-dark focus:bg-light-dark mr-3 inline-block cursor-pointer rounded-2xl border-0 px-6 py-3 text-center align-middle text-base font-medium leading-normal shadow-none transition-colors duration-150 ease-in-out ">
                  {" "}
                  Follow{" "}
                </Link>
                <Link
                  to=""
                  className="hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark inline-block cursor-pointer rounded-2xl border-0 bg-primary px-6 py-3 text-center align-middle text-base font-medium leading-normal text-white shadow-none transition-colors duration-150 ease-in-out ">
                  {" "}
                  Hire{" "}
                </Link>
              </div> */}
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-wrap items-center">
                <Link
                  to=""
                  className="text-secondary-inverse mb-2 mr-3 inline-flex items-center justify-center rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium leading-normal transition-all duration-200 ease-in-out hover:bg-neutral-200 text-black">
                  {" "}
                  Manager{" "}
                </Link>
                <Link
                  to=""
                  className="text-secondary-inverse mb-2 mr-3 inline-flex items-center justify-center rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium leading-normal transition-all duration-200 ease-in-out hover:bg-neutral-200 text-black">
                  {" "}
                  2.5 Years{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ul
          className={`active-${activeTab} group flex list-none items-stretch border-b-2 border-solid border-transparent text-base font-semibold max-sm:gap-6 max-sm:overflow-x-auto max-sm:overflow-y-hidden`}>
          <li className="-mb-[2px]  flex">
            <Link
              aria-controls="overview"
              className="text-muted mr-1 border-b-2 border-transparent pb-3 pt-2 transition-colors duration-200 ease-in-out hover:text-primary hover:border-primary group-[.active-overview]:border-primary group-[.active-overview]:text-primary sm:mr-3 lg:mr-10 max-sm:group-[.active-overview]:bg-slate-100 p-4 max-sm:rounded-lg max-sm:border-0"
              to="" onClick={e => {handleActiveTab("overview"); }}>
              {" "}
              Overview{" "}
            </Link>
          </li>
          <li className="-mb-[2px]  flex ">
            <Link
              aria-controls="salary"
              className="text-muted mr-1 border-b-2 border-transparent pb-3 pt-2 transition-colors duration-200 ease-in-out hover:text-primary hover:border-primary group-[.active-salary]:border-primary group-[.active-salary]:text-primary sm:mr-3 lg:mr-10 whitespace-nowrap max-sm:group-[.active-salary]:bg-slate-100 p-4 max-sm:rounded-lg max-sm:border-0"
              to="" onClick={e => handleActiveTab("salary")}>
              {" "}
              Salary Details{" "}
            </Link>
          </li>
          <li className="-mb-[2px]  flex">
            <Link
              aria-controls="payslip"
              className="text-muted mr-1 border-b-2 border-transparent pb-3 pt-2 transition-colors duration-200 ease-in-out hover:text-primary hover:border-primary group-[.active-payslip]:border-primary group-[.active-payslip]:text-primary sm:mr-3 lg:mr-10 max-sm:group-[.active-payslip]:bg-slate-100 p-4 max-sm:rounded-lg max-sm:border-0"
              to="" onClick={e => handleActiveTab("payslip")}>
              {" "}
              Payslips{" "}
            </Link>
          </li>
          <li className="-mb-[2px]  flex">
            <Link
              aria-controls="forms"
              className="text-muted mr-1 border-b-2 border-transparent pb-3 pt-2 transition-colors duration-200 ease-in-out hover:text-primary hover:border-primary group-[.active-forms]:border-primary group-[.active-forms]:text-primary sm:mr-3 lg:mr-10 max-sm:group-[.active-forms]:bg-slate-100 p-4 max-sm:rounded-lg max-sm:border-0"
              to="" onClick={e => handleActiveTab("forms")}>
              {" "}
              Forms{" "}
            </Link>
          </li>
          <li className="group -mb-[2px]  flex">
            <Link
              aria-controls="settings"
              className="text-muted mr-1 border-b-2 border-transparent pb-3 pt-2 transition-colors duration-200 ease-in-out hover:text-primary hover:border-primary group-[.active-settings]:border-primary group-[.active-settings]:text-primary sm:mr-3 lg:mr-10 max-sm:group-[.active-settings]:bg-slate-100 p-4 max-sm:rounded-lg max-sm:border-0"
              to="" onClick={e => handleActiveTab("settings")}>
              {" "}
              Settings{" "}
            </Link>
          </li>
        </ul>
        <hr className="h-px w-full border-neutral-200" />

      <div>{activeTab === "overview" && <Overview/>} {activeTab === "salary" && <Salary/>} {activeTab === "payslips" && <Payslip/>} {activeTab === "forms" && <Forms/>} {activeTab === "settings" && <ProfileSettings/>}</div>
      </div>
    </div>
  );
};

export default ProfileSection;
