import React from "react";
import { Link } from "react-router-dom";

const PayrollTable = ({ title, columns, rows, buttonLink }) => {
  return (
    <>
      <div className="flex w-11/12 flex-row  justify-start p-4  max-sm:w-screen max-sm:pt-10">
        <h1 className="text text-4xl font-bold text-gray-600 max-sm:text-base max-sm:font-extrabold">
          {title}
        </h1>
        {/* <button className="btn"></button> */}
        <div className="flex  justify-items-end	">
          {/* Button with a link */}
          <Link to={buttonLink}>
            <button className="btn btn-link btn-lg btn-wide">Edit</button>
          </Link>
        </div>
      </div>

     
    </>
  );
};

export default PayrollTable;
