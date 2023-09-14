import React from "react";
import { Link } from "react-router-dom";
import PayrollTable from "./PayrollTable";
import currentHomeRentData from "../../user/currentHomeRentData.json";
import Regim from "../../user/Regime.json";
import Section80deductions from "../../user/section80deductions.json";

const TaxDeductions = () => {
  return (
    <>
      <div className="flex flex-col justify-center px-24 py-4">
        <div className=" card border-l-8 border-red-600 bg-red-300 shadow-xl">
          <div className="	card-body">
            <p>
              Please update your{" "}
              <Link to="" className="font-semibold text-blue-700">
                PAN
              </Link>
              . Without the PAN, TDS will be deducted @20% (if applicable).
            </p>
          </div>
        </div>
        <div className="flex justify-center p-4">
          <div className=" card bg-base-100 shadow-xl">
            <div className="card-body ">
              <p>
                You have the option of either using a new tax regime (with no tax deductions), or using the
                same regime as FY 2019-20. To help you make an informed decision, we are displaying your tax
                liability in both these regimes, and you can choose the option that you prefer. For us to
                accurately calculate your tax liabilities, please ensure you fill in all the information
                requested below, irrespective of the regime that you pick.
              </p>
            </div>
          </div>
        </div>

        <PayrollTable columns={Regim.columns} rows={Regim.rows} />

        <div className="flex justify-start p-4">
          <p>
            Your current chosen regime is <span className="font-semibold">Old tax regime.</span>
          </p>
        </div>

        <div className=" card border-l-8 border-green-600 bg-green-300 shadow-xl">
          <div className="	card-body">
            <p>
              You should continue with your current selection. Please confirm your selection so that we can
              use it in future payroll calculations.
            </p>
          </div>
        </div>
        <div className="flex gap-x-6 py-4">
          <button className=" btn btn-neutral btn-active  ">SWITCH REGIME</button>
          <button className="btn btn-info btn-active  ">CONFIRM SELECTION</button>
        </div>

        <PayrollTable
          title={currentHomeRentData.title}
          columns={currentHomeRentData.columns}
          rows={currentHomeRentData.rows}
        />
        <PayrollTable
          title={Section80deductions.title}
          columns={Section80deductions.columns}
          rows={Section80deductions.rows}
        />
      </div>
    </>
  );
};

export default TaxDeductions;
