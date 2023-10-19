import React from "react";
import PrinterIcon from "@heroicons/react/24/outline/PrinterIcon";
import { Link } from "react-router-dom";

const Forms = () => {
  return (
    <div className="h-screen">
      <div className="card m-5 w-full bg-base-100 p-6 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>FORM </th>
                <th>LINK</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Tax Deductions</th>
                <td className="text-blue-700">
                  <Link to="/payroll/taxdeductions">Go to Tax Deductions </Link>
                </td>
              </tr>
              <tr>
                <th>Reimbursements</th>
                <td className="text-blue-700">
                  <Link to="/payroll/reimbursements">Go to Reimbursements </Link>
                </td>
              </tr>
              <tr>
                <th>Regime Selection</th>
                <td className="text-blue-700">
                  <Link to="/payroll/taxdeductions/regime-selection">Go to Regime Selection </Link>
                </td>
              </tr>
              <tr>
                <th>Pan</th>
                <td className="text-blue-700">
                  <Link to="/payroll/taxdeductions/pan-details">Update Your Pan Details </Link>
                </td>
              </tr>
              <tr>
                <th>Home Rent</th>
                <td className="text-blue-700">
                  <Link to="/payroll/taxdeductions/home-rent">Update Your Home Rent Details </Link>
                </td>
              </tr>
              <tr>
                <th>Section 80 Deductions</th>
                <td className="text-blue-700">
                  <Link to="/payroll/taxdeductions/section-80-deductions">
                    Update Your Section 80 Deductions Details
                  </Link>
                </td>
              </tr>
              <tr>
                <th>Home Loan</th>
                <td className="text-blue-700">
                  <Link to="/payroll/taxdeductions/home-loan">Update Your Home Loan Details</Link>
                </td>
              </tr>
              <tr>
                <th>Leave Travel Allowance</th>
                <td className="text-blue-700">
                  <Link to="/payroll/taxdeductions/leave-travel-allowance">
                    Update Your Leave Travel Allowance Details
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Forms;
