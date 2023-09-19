import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FusionSync from "./app/Welcome/FusionSync";
import Login from "./app/Protected/Login";
import Register from "./app/Protected/Register";
import Layout from "./components/Shared/Layout";
import Dashboard from "./app/Dashboard/Dashboard";
import Attendance from "./app/Attendance/Attendance";
import Payroll from "./app/Payroll/Payroll";
import Tasks from "./app/Tasks/Task";
import EmployeeData from "./app/Employees/EmployeeTable";
import LeaveTracker from "./app/Leave/LeaveTracker";
import TaxDeductions from "./app/Payroll/TaxDeductions";
import Reimbursements from "./app/Payroll/Reimbursements";
import PayrollSettings from "./app/Payroll/PayrollSettings";
import EditProfile from "./app/Profile/EditProfile";
import InternalPage from "./app/Protected/404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app/404" element={<InternalPage />} />
        <Route  path="/welcome" element={<FusionSync />} />
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/payroll/*" element={<Payroll />} />
          <Route path="/payroll/taxdeductions" element={<TaxDeductions />} />
          <Route path="/payroll/reimbursements" element={<Reimbursements />} />
          <Route path="/payroll/reimbursements" element={<Reimbursements />} />
          <Route path="/payroll/settings" element={<PayrollSettings />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/leavetracker" element={<LeaveTracker />} />
          <Route path="/employeedata" element={<EmployeeData />} />
          <Route path="/app/settings-profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
