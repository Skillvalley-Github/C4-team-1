import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { BsCalendar2Check } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiUser } from "react-icons/bi";

const Menus = [
  {
    title: "Home",
    icon: <LuLayoutDashboard />,
    path: "/",
  },
  { title: "Employee Data", icon: <BiUser />, path: "/EmployeeData" },

  {
    title: "Tasks",
    icon: <FaTasks />,
    path: "/tasks",
  },
  { title: "Payroll", icon: <LiaMoneyBillWaveSolid />, path: "/payroll" },
  { title: "Attendance", icon: <BsCalendar2Check />, path: "/attendance" },
];

export default Menus;
