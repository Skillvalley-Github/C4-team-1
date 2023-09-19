import React from "react";
import { Link } from "react-router-dom";
import PayrollTable from "./PayrollTable";
import currentHomeRentData from "../../user/currentHomeRentData.json";
import Regim from "../../user/Regime.json";
import Section80deductions from "../../user/section80deductions.json";
import HomeLoan from "../../user/homeLoan.json";
import LeaveTravelAllowance from "../../user/leaveTravelAllowance.json";

const TaxDeductions = () => {
  return (
    <>
      <div className="flex flex-col justify-center overflow-x-hidden px-24 py-6 max-sm:w-screen max-sm:px-8">
        <div className=" w-full rounded-md  border-l-8 border-red-600 bg-red-300 p-6  shadow-xl">
          <div className="">
            <p>
              Please update your{" "}
              <Link to="" className="font-semibold text-blue-700">
                PAN
              </Link>
              . Without the PAN, TDS will be deducted @20% (if applicable).
            </p>
          </div>
        </div>

        <div className="flex justify-center px-4 py-8">
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

        <div className="">
          <PayrollTable
            title={Regim.title}
            columns={Regim.columns}
            rows={Regim.rows}
            buttonLink={"/payroll/taxdeductions/regime-selection"}
          />
        </div>

        <div className="flex justify-start p-4">
          <p>
            Your current chosen regime is <span className="font-semibold">Old tax regime.</span>
          </p>
        </div>

        <div className="flex w-full px-4  pl-5">
          <div className="   w-full rounded-md border-l-8 border-green-600 bg-green-300 p-6  shadow-xl">
            <div className="">
              <p>
                You should continue with your current selection. Please confirm your selection so that we can
                use it in future payroll calculations.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 p-4  max-sm:p-0  max-sm:pt-6">
          <button className=" btn btn-info btn-active border-none text-white hover:bg-blue-500 ">
            SWITCH REGIME
          </button>
          <button className="btn btn-error btn-active border-none text-white hover:bg-red-500">
            CONFIRM SELECTION
          </button>
        </div>

        <PayrollTable
          title={currentHomeRentData.title}
          columns={currentHomeRentData.columns}
          rows={currentHomeRentData.rows}
          buttonLink={"/payroll/taxdeductions/home-rent"}
        />
        <PayrollTable
          title={Section80deductions.title}
          columns={Section80deductions.columns}
          rows={Section80deductions.rows}
          buttonLink={"/payroll/taxdeductions/section-80-deductions"}
        />
        <PayrollTable
          title={HomeLoan.title}
          columns={HomeLoan.columns}
          rows={HomeLoan.rows}
          buttonLink={"/payroll/taxdeductions/home-loan"}
        />
        <PayrollTable
          title={LeaveTravelAllowance.title}
          columns={LeaveTravelAllowance.columns}
          rows={LeaveTravelAllowance.rows}
          buttonLink={"/payroll/taxdeductions/leave-travel-allowance"}
        />
      </div>
    </>
  );
};

export default TaxDeductions;
