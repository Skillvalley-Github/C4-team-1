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
import RegimeSelection from "./app/Payroll/PayrollSubpages/RegimeSelection";
import HomeRentSelection from "./app/Payroll/PayrollSubpages/HomeRentSelection";
import Section80Deductions from "./app/Payroll/PayrollSubpages/Section80Deductions";
import HomeLoan from "./app/Payroll/PayrollSubpages/HomeLoan";
import LeaveTravelAllowance from "./app/Payroll/PayrollSubpages/LeaveTravelAllowance";
import PanDetails from "./app/Payroll/PayrollSubpages/PanDetails";
import EditProfile from "./app/Profile/EditProfile";
import ProfileSection from "./app/Profile/ProfileSection";
import InternalPage from "./app/Protected/404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app/404" element={<InternalPage />} />
        <Route path="/welcome" element={<FusionSync />} />
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} /> 
          <Route path="/profile" element={<ProfileSection />} />
          {/* ---------------Profile different routes--------------------------------- */}
          
          <Route path="/payroll/*" element={<Payroll />} />
          <Route path="/payroll/taxdeductions" element={<TaxDeductions />} />
          {/* ---------------Payroll different tax deductions routes--------------------------------- */}
          <Route
            path="/payroll/taxdeductions/regime-selection"
            element={<RegimeSelection />}
          />
          <Route
            path="/payroll/taxdeductions/home-rent"
            element={<HomeRentSelection />}
          />
          <Route
            path="/payroll/taxdeductions/section-80-deductions"
            element={<Section80Deductions />}
          />
          <Route
            path="/payroll/taxdeductions/home-loan"
            element={<HomeLoan />}
          />
          <Route
            path="/payroll/taxdeductions/leave-travel-allowance"
            element={<LeaveTravelAllowance />}
          />
          <Route
            path="/payroll/taxdeductions/pan-details"
            element={<PanDetails />}
          />
          {/* --------------------tax deductions routes ends here---------------------------- */}
          <Route path="/payroll/reimbursements" element={<Reimbursements />} />
          <Route path="/payroll/reimbursements" element={<Reimbursements />} />
          <Route path="/payroll/settings" element={<PayrollSettings />} />
          {/* ---------------tasks------------ */}
          <Route path="/tasks" element={<Tasks />} />
          {/* -------------tasks ends here------------- */}
          <Route path="/leavetracker" element={<LeaveTracker />} />
          <Route path="/employeedata" element={<EmployeeData />} />
          <Route path="/app/settings-profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
