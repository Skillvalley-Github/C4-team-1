import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <Link to="/payroll" className="underline">payroll</Link>
      <Link to="/attendance">Attendance</Link>
      <Link to="/employeedata">Employee Management </Link>
      <Link to="/tasks">Task and shift scheduling</Link>
    </div>
  );
};

export default Dashboard;
