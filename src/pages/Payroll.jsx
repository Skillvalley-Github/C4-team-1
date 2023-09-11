import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Shared/Layout";

const Payroll = () => {
  return (
    <>
      <Layout>
        <div>
          <p>payroll</p>
          <Link to="/">dashboard</Link>
        </div>
      </Layout>
    </>
  );
};

export default Payroll;
