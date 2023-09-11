import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Shared/Layout";

const EmployeeData = () => {
  return (
    <>
      <Layout>
        <div className="text-green-500 text-3xl animate-pulse flex items-center justify-center">
          <p>EmployeeData</p>
          <Link to="/">dashboard</Link>
        </div>
      </Layout>
    </>
  );
};

export default EmployeeData;
