import React from "react";
import { Link } from "react-router-dom";

const HomeLoan = () => {
  return (
    <>
      <div className="">
        <div className="text p-6 text-4xl font-bold">
          <h1>Deductions Under House Property</h1>
        </div>
        <p className="px-6 font-semibold">
          Homeowners can claim a deduction of up to ₹2,00,000 on their home loan interest under Section 24.
          For more information, please{" "}
          <Link to={"https://cleartax.in/s/deductions-under-section24-income-from-house-property"}>
            <span className="   text-blue-800">click here.</span>
          </Link>
        </p>

        <div className="px-6 py-2 max-sm:w-fit max-sm:p-0 max-sm:pt-3">
          <div className="card card-body bg-base-100 shadow-xl max-sm:w-screen">
            <div className=" flex">
              <table className="table min-w-full">
                {/* head */}
                <thead className="text text-lg font-bold">
                  <tr className="bg-base-200">
                    <th>Annual interest payable / paid</th>
                    <th>Name of lender</th>
                    <th>PAN of lender</th>
                    <th>Address of lender</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>
                      <input className="input input-bordered" placeholder="0" type="number" min="0" />
                    </td>
                    <td>
                      <input className="input input-bordered" placeholder="Name of lender" type="calendar" />
                    </td>
                    <td>
                      <input className="input input-bordered" placeholder="PAN of lender" type="text" />
                    </td>
                    <td>
                      <input className="input input-bordered" placeholder="Address of lender" type="text" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLoan;
