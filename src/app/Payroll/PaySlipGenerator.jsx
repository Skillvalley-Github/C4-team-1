import React from "react";
import PlusCircleIcon from "@heroicons/react/24/outline/PlusCircleIcon";
import { MdFileDownload } from "react-icons/md";
import { PiPaperPlaneRight } from "react-icons/pi";

// Reusable Input Component
const InputField = ({ id, label, type, placeholder, required, min }) => {
  return (
    <div className="card rounded-box my-2 flex h-20 flex-grow place-items-start">
      <label htmlFor={id} className="text flex justify-start text-sm font-bold">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        id={id}
        className="mb-4 mt-2 flex w-full justify-start rounded-md border-b border-gray-200 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required}
        min={min}
      />
    </div>
  );
};

const PaySlipGenerator = () => {
  return (
    <>
      <div className="flex flex-col overflow-x-auto p-6 max-sm:p-0 max-sm:pt-3">
        <div className="card card-body min-w-full bg-base-100 shadow-xl">
          <div className="text flex justify-center rounded-lg border border-gray-200 bg-slate-400 p-2 text-2xl font-bold">
            <h1>Employee Pay slip Generator</h1>
          </div>
          {/* Employee Information */}
          <div className="mt-8 flex flex-row gap-x-4">
            <div className="flex w-6/12 flex-col">
              <InputField
                id="EmployeeName"
                label="Employee Name"
                type="text"
                placeholder="Employee name"
                required
              />
              <InputField
                id="EmployeePosition"
                label="Employee Position"
                type="text"
                placeholder="Employee position"
                required
              />
              <InputField
                id="JoiningDate"
                label="Joining Date (YYYY-MM-DD)"
                type="date"
                placeholder="(YYYY-MM-DD)"
                required
              />
              <InputField
                id="PF"
                label="PF Account Number"
                type="text"
                placeholder="TN/AAA/00000/000/00000"
                required
              />
              <InputField
                id="PaidDays"
                label="Paid Days"
                type="number"
                placeholder="Number of days"
                required
                min="0"
              />
            </div>
            <div className="flex w-6/12 flex-col">
              <InputField
                id="EmployeeEmail"
                label="Employee Email"
                type="text"
                placeholder="Employee email"
                required
              />
              <InputField
                id="EmployeeId"
                label="Employee Id"
                type="text"
                placeholder="Employee id"
                required
              />
              <InputField
                id="AccountNumber"
                label="Account Number"
                type="text"
                placeholder="Account number"
                required
              />
              <InputField
                id="UAN"
                label="Universal Account Number (UAN)"
                type="text"
                placeholder="Universal account number (UAN)"
                required
              />
              <InputField id="LOPDays" label="LOP Days" type="number" placeholder="0" required min="0" />
            </div>
          </div>

          {/* Earnings */}
          <div className="">
            <div className="text text-3xl font-semibold">Earnings</div>
            <div className="flex flex-row gap-x-4">
              <InputField id="EarningsName" label="Name" type="text" placeholder="Earnings name" required />
              <InputField
                id="EarningsAmount"
                label="Amount"
                type="text"
                placeholder="Earnings amount"
                required
              />
              <div>
                <button className="btn btn-active px-3">
                  <PlusCircleIcon className="h-5 w-5" /> Add
                </button>
              </div>
            </div>
          </div>

          {/* Deductions */}
          <div className="">
            <div className="text text-3xl font-semibold">Deductions</div>
            <div className="flex flex-row gap-x-4">
              <InputField
                id="DeductionsName"
                label="Name"
                type="text"
                placeholder="Deductions name"
                required
              />
              <InputField
                id="DeductionsAmount"
                label="Amount"
                type="text"
                placeholder="Deductions amount"
                required
              />
              <div>
                <button className="btn btn-active px-3">
                  <PlusCircleIcon className="h-5 w-5" /> Add
                </button>
              </div>
            </div>
          </div>

          {/* Reimbursements */}
          <div className="">
            <div className="text text-3xl font-semibold">Reimbursements</div>
            <div className="flex flex-row gap-x-4">
              <InputField
                id="ReimbursementsName"
                label="Name"
                type="text"
                placeholder="Reimbursements name"
                required
              />
              <InputField
                id="ReimbursementsAmount"
                label="Amount"
                type="text"
                placeholder="Reimbursements amount"
                required
              />
              <div>
                <button className="btn btn-active px-3">
                  <PlusCircleIcon className="h-5 w-5 " /> Add
                </button>
              </div>
            </div>
          </div>

          <div className="left-10 mt-6 flex flex-row justify-end gap-x-4">
            <button className="btn btn-neutral btn-wide">Reset</button>
            <button className="btn btn-info btn-wide text-white">
              <MdFileDownload className="h-5 w-5" /> Download As PDF
            </button>
            <button className="btn btn-info btn-wide text-white">
              <PiPaperPlaneRight className="h-5 w-5" />
              Send As Email
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaySlipGenerator;
