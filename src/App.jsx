import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import Dashboard from "./app/Dashboard/Dashboard";
import Attendance from "./app/Attendance/Attendance";
import Payroll from "./app/Payroll/Payroll";
import Tasks from "./app/Tasks/Task";
import EmployeeData from "./app/Employees/EmployeeMgmt";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/employeedata" element={<EmployeeData />} />
      </Routes>
    </Router>
  );
};

export default App;
