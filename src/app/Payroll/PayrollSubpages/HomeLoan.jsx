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
          <Link
            to={"https://cleartax.in/s/deductions-under-section24-income-from-house-property"}
            target="_blank">
            <span className="   text-blue-800">click here.</span>
          </Link>
        </p>

        <div className="flex flex-col overflow-x-auto p-6  max-sm:p-0 max-sm:pt-3">
          <div className="card card-body min-w-full bg-base-100 shadow-xl ">
            <div className="overflow-x-auto">
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

        <div>
          <div className="text p-6 text-4xl font-bold">
            <h1>Section 80EE/80EEA Deductions</h1>
          </div>

          <p className="px-6 font-semibold ">
            Section 80EE/80EEA allows further tax benefits for first time home buyers. Through these sections,
            an additional deduction of ₹1,50,000 can be claimed on home loan interest, under certain
            conditions. This is in addition to deduction of ₹2,00,000 allowed under section 24.
          </p>
        </div>

        <div className="flex flex-row ">
          {" "}
          <div className="flex flex-col overflow-x-auto p-6  max-sm:p-0 max-sm:pt-3">
            <div className="card card-body min-w-full bg-base-100 shadow-xl ">
              <div className=" overflow-x-auto">
                <h1 className="font-semibold">Section 80EE</h1>
                <p>
                  - Rebate under Section 80EE is available only to those individual borrowers whose loan was
                  sanctioned between 1 April 2016 and 31 March 2017.
                  <br /> - Value of the house should be Rs 50 lakh or less.
                  <br /> - Loan taken for the house must be Rs 35 lakh or less.
                  <br /> - For more information, please{" "}
                  <Link
                    to={"https://cleartax.in/s/section-80ee-income-tax-deduction-for-interest-on-home-loan"}
                    target="_blank">
                    <span className="text-blue-600">click here </span>
                  </Link>
                </p>

                <div className="mt-4 flex flex-row gap-x-2">
                  <div className="text flex w-4/12 flex-col p-1  font-semibold">
                    <p className=" p-2">Annual interest payable / paid</p>
                    <input type="number" className="input input-bordered" />
                  </div>
                  <div className="text flex flex-col p-1  font-semibold">
                    <p className="p-2">Upload the proofs : </p>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-x-auto p-6  max-sm:p-0 max-sm:pt-3">
            <div className="card card-body min-w-full bg-base-100 shadow-xl ">
              <div className=" overflow-x-auto">
                <h1 className="font-semibold">Section 80EEA</h1>
                <p>
                  - Rebate under Section 80EEA is available only to those individual borrowers whose loan was
                  sanctioned between 1 April 2019 and 31 March 2022.
                  <br /> - Value of the house should be Rs 45 lakh or less.
                  <br /> - For more information, please{" "}
                  <Link
                    to={"https://cleartax.in/s/section-80eea-deduction-affordable-housing"}
                    target="_blank">
                    <span className="text-blue-600">click here </span>
                  </Link>
                </p>

                <div className="mt-4 flex flex-row gap-x-2">
                  <div className="text flex w-4/12 flex-col p-1  font-semibold">
                    <p className=" p-2">Annual interest payable / paid</p>
                    <input type="number" className="input input-bordered" />
                  </div>
                  <div className="text flex flex-col p-1  font-semibold">
                    <p className="p-2">Upload the proofs : </p>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex p-8 drop-shadow-md">
        <button className=" text rounded-md bg-sky-500 px-12 py-3 text-lg font-semibold text-gray-200 hover:bg-sky-600 ">
          Continue
        </button>
      </div>
    </>
  );
};

export default HomeLoan;
