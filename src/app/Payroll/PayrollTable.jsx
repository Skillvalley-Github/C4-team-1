import React from "react";

const PayrollTable = ({ title, columns, rows }) => {
  return (
    <>
      <div className="w-11/12 justify-start p-4  max-sm:pt-10 max-sm:w-screen">
        <h1 className="text text-4xl font-bold text-gray-600 max-sm:text-base max-sm:font-extrabold">
          {title}
        </h1>
        {/* <button className="btn"></button> */}
      </div>
      <div className="p-6 max-sm:p-0 max-sm:pt-3 max-sm:w-fit">
        <div className="card card-body max-sm:w-screen bg-base-100 shadow-xl ">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="text-xl">
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
    </>
  );
};

export default PayrollTable;
