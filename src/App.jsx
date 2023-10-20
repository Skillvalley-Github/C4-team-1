import {useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FusionSync from "./app/Welcome/FusionSync";
import Login from "./app/Protected/Login";
import Register from "./app/Protected/Register";
import Layout from "./components/Shared/Layout";
import Dashboard from "./app/Dashboard/Dashboard";
import Attendance from "./app/Attendance/Attendance";
import Tasks from "./app/Tasks/Task";
import EmployeeData from "./app/Employees/EmployeeTable";
import LeaveTracker from "./app/Leave/LeaveTracker";
import TaxDeductions from "./app/Payroll/TaxDeductions";
import Reimbursements from "./app/Payroll/Reimbursements";
import RegimeSelection from "./app/Payroll/PayrollSubpages/RegimeSelection";
import HomeRentSelection from "./app/Payroll/PayrollSubpages/HomeRentSelection";
import Section80Deductions from "./app/Payroll/PayrollSubpages/Section80Deductions";
import HomeLoan from "./app/Payroll/PayrollSubpages/HomeLoan";
import LeaveTravelAllowance from "./app/Payroll/PayrollSubpages/LeaveTravelAllowance";
import PanDetails from "./app/Payroll/PayrollSubpages/PanDetails";
import ProfileSection from "./app/Profile/ProfileSection";
import InternalPage from "./app/Protected/404";
import PaySlipGenerator from "./app/Payroll/PaySlipGenerator";
import TaskFaq from "./app/Tasks/TaskFaq";
import Salary from "./app/Profile/ProfileSubPages/Salary";
import Payslips from "./app/Profile/ProfileSubPages/Payslips";
import Forms from "./app/Profile/ProfileSubPages/Forms";
import ProfileSettings from "./app/Profile/ProfileSubPages/ProfileSettings";
import Overview from "./app/Profile/ProfileSubPages/Overview";
import ForgotPassword from "./app/Protected/ForgotPassword";

function App() {
  const [user, setUser] = useState(null)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FusionSync />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/app/404" element={<InternalPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        {/* {user ? ( */}
          <Route path="/dashboard" element={<Layout />}>
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/attendance" element={<Attendance />} />
            {/* ---------------Profile Section---------------------------- */}
            <Route path="/dashboard/profile" element={<ProfileSection />}>
              <Route index path="/dashboard/profile" element={<Overview />} />
              <Route path="/dashboard/profile/salarydetails" element={<Salary />} />
              <Route path="/dashboard/profile/payslips" element={<Payslips />} />
              <Route path="/dashboard/profile/forms" element={<Forms />} />
              <Route path="/dashboard/profile/settings" element={<ProfileSettings />} />
            </Route>
            {/* ---------------Payroll different tax deductions routes--------------------------------- */}
            <Route path="/dashboard/payroll/taxdeductions" element={<TaxDeductions />} />
            <Route path="/dashboard/payroll/taxdeductions/regime-selection" element={<RegimeSelection />} />
            <Route path="/dashboard/payroll/taxdeductions/home-rent" element={<HomeRentSelection />} />
            <Route
              path="/dashboard/payroll/taxdeductions/section-80-deductions"
              element={<Section80Deductions />}
            />
            <Route path="/dashboard/payroll/taxdeductions/home-loan" element={<HomeLoan />} />
            <Route
              path="/dashboard/payroll/taxdeductions/leave-travel-allowance"
              element={<LeaveTravelAllowance />}
            />
            <Route path="/dashboard/payroll/taxdeductions/pan-details" element={<PanDetails />} />
            {/* --------------------tax deductions routes ends here---------------------------- */}
            <Route path="/dashboard/payroll/reimbursements" element={<Reimbursements />} />
            <Route path="/dashboard/payroll/reimbursements" element={<Reimbursements />} />
            <Route path="/dashboard/payroll/payslip" element={<PaySlipGenerator />} />
            {/* ---------------tasks------------ */}
            <Route path="/dashboard/tasks" element={<Tasks />} />
            <Route path="/dashboard/tasks/faq" element={<TaskFaq />} />
            {/* -------------tasks ends here------------- */}
            <Route path="/dashboard/leavetracker" element={<LeaveTracker />} />
            <Route path="/dashboard/employeedata" element={<EmployeeData />} />
          </Route>
        {/* ) : ""} */}
      </Routes>
    </Router>
  );
}

export default App;
