import React from "react";

const Overview = () => {
  return (
    <>
      {/* Emp Id 
      Phone Number 
      Gender 
      Joining Date 
      PAN 
      Address 
      DOB 
      PF acoount Number 
      Father's Name
      Language
      about */}

      <div className="mx-2 my-3 w-full md:w-9/12">
        <div className="">
          <div className="grid text-base md:grid-cols-2">
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 font-semibold">First Name</div>
              <div className="px-4 py-3">Khushal</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 font-semibold">Last Name</div>
              <div className="px-4 py-3">Sachdeva</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 font-semibold">Employee Id</div>
              <div className="px-4 py-3">EXCETA3647ETS</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 font-semibold">Contact No.</div>
              <div className="px-4 py-3">+91 9980010018</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 font-semibold">Joining Date</div>
              <div className="px-4 py-3">Aug 21, 2021</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 font-semibold">PAN</div>
              <div className="px-4 py-3">ABCDEF1234</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 font-semibold">Gender</div>
              <div className="px-4 py-3">Male</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 font-semibold">Permanant Address</div>
              <div className="px-4 py-3">New Delhi, India</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 font-semibold">Email</div>
              <div className="px-4 py-3">
                <a className="text-blue-800 text-sm" href="mailto:jane@example.com">
                skillvalley@gmail.com
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 font-semibold">Birthday</div>
              <div className="px-4 py-3">Feb 06, 1998</div>
            </div>
          </div>
        </div>

        <div className="my-8"></div>

        <div className="grid p-3 max-sm:p-0 max-sm:pb-8 pb-8 sm:grid-cols-2">
          <div className="grid-cols-2 lg:space-x-2 max-md:mb-10 max-sm:ml-4">
            <div className="mb-3 flex items-center  font-semibold leading-8">
              <span clas="">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Experience</span>
            </div>
            <ul className="list-inside space-y-4">
              <li>
                <div className="text-teal-600">Owner at  Company Inc.</div>
                <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
              <li>
                <div className="text-teal-600">Owner at  Company Inc.</div>
                <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
              <li>
                <div className="text-teal-600">Owner at  Company Inc.</div>
                <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
              <li>
                <div className="text-teal-600">Owner at  Company Inc.</div>
                <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
            </ul>
          </div>
          <div className="grid-cols-2 lg:space-x-2 max-sm:ml-4">
            <div className="mb-3 flex items-center space-x-2 font-semibold leading-8">
              <span clas="">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    fill="#fff"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Education</span>
            </div>
            <ul className="list-inside space-y-2">
              <li>
                <div className="text-teal-600">Masters Degree in Oxford</div>
                <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
              <li>
                <div className="text-teal-600">Bachelors Degreen in LPU</div>
                <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
