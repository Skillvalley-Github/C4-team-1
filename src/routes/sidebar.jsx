/** Icons are imported separatly to reduce build time */
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import TableCellsIcon from "@heroicons/react/24/outline/TableCellsIcon";
import WalletIcon from "@heroicons/react/24/outline/WalletIcon";
import CodeBracketSquareIcon from "@heroicons/react/24/outline/CodeBracketSquareIcon";
import DocumentIcon from "@heroicons/react/24/outline/DocumentIcon";
import ExclamationTriangleIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import ArrowRightOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightOnRectangleIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import ChartBarIcon from "@heroicons/react/24/outline/ChartBarIcon";
import CurrencyRupeeIcon from "@heroicons/react/24/outline/CurrencyRupeeIcon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import ReceiptPercentIcon from "@heroicons/react/24/outline/ReceiptPercentIcon";
import ReceiptRefundIcon from "@heroicons/react/24/outline/ReceiptRefundIcon";
import DocumentCheckIcon from "@heroicons/react/24/outline/DocumentCheckIcon";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Dashboard",
  },
  {
    path: "/dashboard/employeedata", // url
    icon: <UsersIcon className={iconClasses} />, // icon component
    name: "Team", // name that appear in Sidebar
  },
  {
    path: "/dashboard/payroll/payslip", // url
    icon: <CurrencyRupeeIcon className={`${iconClasses} inline`} />, // icon component
    name: "Payroll", // name that appear in Sidebar
    // submenu: [
      
    //   {
    //     path: "/payroll/payslipgenertor",
    //     icon: <DocumentCheckIcon className={`${submenuIconClasses} `} />,
    //     name: "Payroll Slip Generator",
    //   },
    // ],
  },
  {
    path: "/dashboard/attendance", // url
    icon: <CalendarDaysIcon className={iconClasses} />, // icon component
    name: "Attendance", // name that appear in Sidebar
  },
  {
    path: "/dashboard/tasks", // url
    icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
    name: "Tasks", // name that appear in Sidebar
  },
  {
    path: "/dashboard/leaveTracker", // url
    icon: <ChartBarIcon className={iconClasses} />, // icon component
    name: "Leave Tracker", // name that appear in Sidebar
  },
  {
    path: "", //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
    name: "Settings", // name that appear in Sidebar
    submenu: [
      {
        path: "/dashboard/profile", //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "Profile", // name that appear in Sidebar
      },
      // {
      //   path: "/login",
      //   icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
      //   name: "Login",
      // },
      {
        path: "/register", //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "Register", // name that appear in Sidebar
      },
      {
        path: "/forgotpassword",
        icon: <KeyIcon className={submenuIconClasses} />,
        name: "Forgot Password",
      },
      {
        path: "/app/404",
        icon: <ExclamationTriangleIcon className={submenuIconClasses} />,
        name: "404",
      },
      // {
      //   path: "/dashboard/payroll/taxdeductions",
      //   icon: <ReceiptPercentIcon className={`${submenuIconClasses} `} />,
      //   name: "Tax Deductions",
      // },
      // {
      //   path: "/dashboard/payroll/reimbursements",
      //   icon: <ReceiptRefundIcon className={`${submenuIconClasses} `} />,
      //   name: "Reimbursements",
      // },
    ],
  },
];

export default routes;
