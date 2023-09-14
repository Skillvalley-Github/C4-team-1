import React from "react";

const PayrollTable = ({ title, columns, rows }) => {
  return (
    <div>
      <div className="flex justify-start p-4">
        <p className="text text-4xl font-bold text-gray-600">{title}</p>
      </div>
      <div className="flex justify-center p-6">
        <div className="card card-side bg-base-100 shadow-xl ">
          <div className="card-body">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    {columns.map((column, index) => (
                      <th key={index}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((rowData, rowIndex) => (
                    <tr key={rowIndex}>
                      {rowData.map((cellData, cellIndex) => (
                        <td key={cellIndex}>{cellData}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollTable;
