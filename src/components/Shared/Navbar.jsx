import React, { useContext } from "react";

import LogoFull from "../../assets/images/logoFull.svg";
import { HiOutlineSun } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="w-full left-0 top-0 right-0 h-[76px] px-6 py-4 bg-white border-b border-neutral-200 justify-between items-center gap-[20px] inline-flex  drop-shadow-lg">
        <div className=" flex gap-6 items-center ">
          <div className=" border-r pr-6 border-[#e4e4e4]">
            <img src={LogoFull} alt="logo" />
          </div>
          <div className=" text-xl font-semibold leading-8 text-[#19191C]">
            Dashboard
          </div>
        </div>
        <div className="justify-start items-start gap-8 flex">
          <div className="hidden rounded-[50px] border border-neutral-200 justify-start items-start md:flex">
            <div className="px-8 py-2.5 hover:bg-neutral-200 rounded-l-full duration-300 justify-start items-center gap-2 flex">
              <div className="w-6 h-6 relative">
                <div className=" h-5 left-[5.62px] top-[3px] absolute">
                  <HiOutlineSun className="text-xl" />
                </div>
              </div>
              <div className="text-zinc-900 text-base font-normal leading-normal">
                theme
              </div>
            </div>
            <div className="px-8 py-2.5 hover:bg-neutral-200 rounded-r-full duration-300 border-l border-neutral-200 justify-start items-center gap-2 flex">
              <div className="w-6 h-6 relative">
                <div className=" h-5 left-[6.58px] top-[3px] absolute">
                  <MdOutlineNotificationsNone className="text-xl" />
                </div>
              </div>
              <div className="text-zinc-900 text-base font-normal leading-normal">
                notify
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-8 flex">
            <img
              className="w-11 h-11 rounded-full"
              src="https://via.placeholder.com/44x44"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
