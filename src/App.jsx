import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import Attendance from "./pages/Attendance";
import Payroll from "./pages/Payroll";
import Tasks from "./pages/Tasks";
import EmployeeData from "./pages/EmployeeData";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/employeedata" element={<EmployeeData />} />
      </Routes>
    </Router>
  );
};

export default App;
