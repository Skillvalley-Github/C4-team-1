import React from "react";

const Salary = () => {
  return (
    <div className="">
      <div className="m-3 mb-4 grid text-base md:grid-cols-2">
        <div className="overflow-x-auto grid-cols-2 m-3 max-sm:mb-8">
          <table className="table">
            {/* head */}
            <thead className="border-b-2 border-neutral-500">
              <tr>
                <th>Earnings</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Basic</td>
                <td>40000</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Incentive Pay</td>
                <td>15000</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>House Rent Allowance</td>
                <td>11000</td>
              </tr>
              <tr>
                <td>Travel Allowance</td>
                <td>5050</td>
              </tr>
              <tr>
                <td>Telephone Reimbursement</td>
                <td>5050</td>
              </tr>
              <tr>
                <td>Special Allowance</td>
                <td>5050</td>
              </tr>
              <tr className="border-t-2 border-neutral-500 font-bold">
                <td>Total Earnings</td>
                <td>81150</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto grid-cols-2 m-3">
          <table className="table">
            {/* head */}
            <thead className="border-b-2 border-neutral-500">
              <tr>
                <th>Deductions</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Income Tax</td>
                <td>6780</td>
              </tr>
              <tr>
                <td>Professional Tax</td>
                <td>6780</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Provident Fund</td>
                <td>2000</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Loan</td>
                <td>1500</td>
              </tr>
              <tr className="border-t-2 border-neutral-500 font-bold">
                <td>Total Deductions</td>
                <td>17060</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        <div className="font-bold grid grid-cols-2 text-center border-2 border-neutral-500 mb-8">
        <div className="m-3">
          Net Pay
          </div> 
          <div className="m-3">64090</div>
        </div>

    </div>
  );
};

export default Salary;
