import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Shared/Layout";

const Tasks = () => {
  return (
    <>
    <Layout>
      <div>
        <p>Task</p>
        <Link to="/">dashboard</Link>
      </div>
    </Layout>
  </>
  );
};

export default Tasks;
