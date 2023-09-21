import React from "react";

import PayrollTable from "../PayrollTable";

const LeaveTravelAllowance = () => {
  return (
    <>
      <div className="text flex flex-row justify-start px-6 py-4 text-2xl font-bold">
        <h1>Leave Travel Allowance Tax Exemption</h1>
      </div>
      <div className=" p-6 text-lg">
        <div className="flex rounded-lg  bg-base-100 shadow-xl">
          <div className="flex px-20  py-10">
            To be eligible for HRA exemption, you must meet the following criteria:
            <br />
            <br /> - You can claim LTA exemption for a maximum of 2 trips in one block of 4 calendar years.
            <br /> - Current block started from 01 Jan 2022 and is upto 31 Dec 2025 .
            <br /> - You can claim LTA exemption for only one trip in one year.
            <br /> - In case you are unable to claim the LTA exemption twice in one block, you can carry
            forward one journey to the next block.
            <br /> - However, the carried forward LTA eligibility has to be utilised in the first year of the
            next block (not applicable now since 2022 is over).
            <br /> - The day of journey should not be a holiday in your organization.
            <br />
          </div>
        </div>
      </div>

      <div>
        <p className="flex px-8 py-6 font-bold">
          Except from the exemptions you claim here in this page, how many LTA exemption have you claimed
          already in 2022-2025 ?
        </p>

        <div className="flex px-8 drop-shadow-md">
          <input className="input input-bordered" placeholder="0" type="number" min="0" />
        </div>

        <div className="text text-md flex flex-row justify-start px-8 py-6 font-bold">
          <h1>LTA claims in 2022-2025 :</h1>
        </div>
        <div className="px-6 py-2 max-sm:w-fit max-sm:p-0 max-sm:pt-3">
          <div className="card card-body bg-base-100 shadow-xl max-sm:w-screen">
            <div className=" flex">
              <table className="min-w-full table">
                {/* head */}
                <thead className="text text-lg font-bold">
                  <tr className="bg-base-200">
                    <th>Amount</th>
                    <th>Travel Start Date</th>
                    <th>Origin</th>
                    <th>Destination</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>
                      <input className="input input-bordered" placeholder="₹" type="number" min="0" />
                    </td>
                    <td>
                      <input
                        className="input input-bordered"
                        placeholder="Travel Start Date"
                        type="calendar"
                      />
                    </td>
                    <td>
                      <input className="input input-bordered" placeholder="Origin Place" type="text" />
                    </td>
                    <td>
                      <input className="input input-bordered" placeholder="Destination Place" type="text" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex p-8 drop-shadow-md">
          <button className=" text rounded-md bg-sky-500 px-12 py-3 text-lg font-semibold text-gray-200 hover:bg-sky-600 ">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default LeaveTravelAllowance;
