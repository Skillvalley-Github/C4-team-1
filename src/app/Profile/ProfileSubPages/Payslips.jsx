import React from "react";
import PrinterIcon from "@heroicons/react/24/outline/PrinterIcon";

const Payslips = ({ data }) => {
  return (
    <div className="h-fit">
      <div className="m-5 max-sm:m-2 mb-10 bg-base-100">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>PAYSLIP ID</th>
                <th>DATE</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>#746F5K2</th>
                <td>28 Jan 2023, 10:45pm </td>
                <td>35000</td>
                <td className="font-bold text-green-400">
                  <span className="text text-xl">{`\u2022`}</span> Complete
                </td>

                <td>
                  <PrinterIcon className="h-7 w-6" />
                </td>
                <td>
                  <button className="btn btn-sm">View</button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>#546H74W</th>
                <td>28 Feb 2023, 10:45pm </td>
                <td>35000</td>
                <td className="font-bold text-green-400">
                  <span className="text text-xl">{`\u2022`}</span> Complete
                </td>
                <td>
                  <PrinterIcon className="h-7 w-6" />
                </td>
                <td>
                  <button className="btn btn-sm">View</button>
                </td>
              </tr>
              <tr>
                <th>#7109F5G5</th>
                <td>28 March 2023, 10:45pm </td>
                <td>35000</td>
                <td className="font-bold text-green-400">
                  <span className="text text-xl">{`\u2022`}</span> Complete
                </td>
                <td>
                  <PrinterIcon className="h-7 w-6" />
                </td>
                <td>
                  <button className="btn btn-sm">View</button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>#546H74W</th>
                <td>28 April 2023, 10:45pm </td>
                <td>35000</td>
                <td className="font-bold text-green-400">
                  <span className="text text-xl">{`\u2022`}</span> Complete
                </td>
                <td>
                  <PrinterIcon className="h-7 w-6" />
                </td>
                <td>
                  <button className="btn btn-sm">View</button>
                </td>
              </tr>
              <tr>
                <th>#986G531</th>
                <td>28 May 2023, 10:45pm </td>
                <td>35000</td>
                <td className="font-bold text-red-400">
                  <span className="text text-xl">{`\u2022`}</span> Pending
                </td>

                <td>
                  <PrinterIcon className="h-7 w-6" />
                </td>
                <td>
                  <button className="btn btn-sm">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payslips;
