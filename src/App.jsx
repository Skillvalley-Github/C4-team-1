import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import Dashboard from "./components/Dashboard";
import Payroll from "./partials/Payroll";
import Attendance from "./partials/Attendance";
import Tasks from "./partials/Tasks";
import EmployeeData from "./partials/EmployeeData";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="employeedata" element={<EmployeeData />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
