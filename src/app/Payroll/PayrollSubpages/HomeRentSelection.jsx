import React from "react";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import { Link } from "react-router-dom";

const HomeRentSelection = () => {
  return (
    <>
      <div className="text flex flex-row justify-start p-4 text-2xl font-bold">
        <h1>Paying home rent?</h1>
      </div>
      <div className="flex flex-row p-4 text-lg">
        <div className="flex rounded-lg  bg-base-100 shadow-xl">
          <div className="flex px-20  py-10">
            To be eligible for HRA exemption, you must meet the following criteria:
            <br />
            <br /> - You must be living in a rented accommodation.
            <br /> - You must be paying rent to the landlord
            <br /> - You must be able to provide the rent receipts and/or rent agreement as proof
            <br /> - If your rent is above Rs 1 lakh per annum, you have to submit your landlord's PAN
            <br />
            <br /> You can generate rent receipts a here, and submit them as proof. However, they must be
            signed by your landlord.
            <br />
            <br />
            For your current rented accommodation, leave the "to month" blank. To enter multiple rents, enter
            the first, press Continue and come back to this page. A metro city implies Chennai, Kolkata,
            Mumbai or Delhi. All other cities in India including Gurgaon, Hyderabad and Bengaluru are
            non-metros.
          </div>
        </div>
      </div>
      <div className="flex px-8 py-6 drop-shadow-md">
        <button className="btn ">
          Add Another Rent House
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-col overflow-x-auto p-6  max-sm:p-0 max-sm:pt-3">
        <div className="card card-body min-w-full bg-base-100 shadow-xl ">
          <div className="overflow-x-auto">
            <table className="table min-w-full ">
              {/* head */}
              <thead className="text text-sm font-bold">
                <tr className="bg-base-200">
                  <th>Monthly Rent Amount</th>
                  <th>From Month (yyyy-mm)</th>
                  <th>To Month (yyyy-mm)</th>
                  <th>Landlord Name</th>
                  <th>Landlord PAN</th>
                  <th>Landlord Address</th>
                  <th>Metro</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="">
                  <td>
                    <input className="input input-bordered " placeholder="₹" type="number" min="0" />
                  </td>
                  <td>
                    <input className="input input-bordered" placeholder="(yyyy-mm)" type="calendar" />
                  </td>
                  <td>
                    <input className="input input-bordered" placeholder="(yyyy-mm)" type="text" />
                  </td>
                  <td>
                    <input className="input input-bordered" placeholder="	Landlord Name" type="text" />
                  </td>
                  <td>
                    <input className="input input-bordered" placeholder="	Landlord PAN" type="text" />
                  </td>
                  <td>
                    <input className="input input-bordered" placeholder="Landlord Address" type="text" />
                  </td>
                  <td>
                    <input className="input input-bordered" placeholder="Destination Place" type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text flex flex-col p-3 text-xl font-semibold">
            <p className="flex p-4">Upload the proofs : </p>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
          </div>
        </div>
      </div>

   
    </>
  );
};

export default HomeRentSelection;
