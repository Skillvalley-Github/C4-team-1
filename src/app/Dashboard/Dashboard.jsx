import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import employees from "./icons/employees.png";
import tax from "./icons/tax.png";
import reimbursement from "./icons/reimbursement.png";
import payrollSettings from "./icons/payroll-settings.png";
import attendance from "./icons/attendance.png";
import leave from "./icons/leave.png";
import task from "./icons/task.png";
import profile from "./icons/profile.png";

const INITIAL_INTEGRATION_LIST = [
  {
    name: "Employees",
    icon: employees,
    description:
      "Easily access and view employees of organization in our user-friendly employee list section, ensuring efficient tracking.",
    link: "/dashboard/employeedata",
  },
  {
    name: "Generate Payslip",
    icon: payrollSettings,
    description:
    "Customize payroll effortlessly in our settings section. Tailor payment schedules, tax withholdings, and employee details for precise financial management.",
    link: "/dashboard/payroll/payslip",
  },
  {
    name: "Profile",
    icon: profile,
    description:
      "Easily access and update your details, view salary information, access payslips, submit forms, and configure settings all at one place.",
    link: "/dashboard/profile",
  },
  {
    name: "Attendance",
    icon: attendance,
    description:
      "Track attendance effortlessly with our dedicated section. Streamline record-keeping, monitor punctuality, and enhance workforce management for improved productivity.",
    link: "/dashboard/attendance",
  },
  {
    name: "Tasks",
    icon: task,
    description:
    "Stay organized and efficient with our tasks section. Assign, track, and manage work seamlessly, ensuring productivity and collaboration.",
    link: "/dashboard/tasks",
  },
  // {
  //   name: "Salary Details",
  //   icon: leave,
  //   description:
  //     "Simplify leave management with our intuitive leave tracker section. Easily request, approve, and monitor employee absences for seamless HR administration.",
  //   link: "/dashboard/profile/salarydetails",
  // },
  // {
  //   name: "Your Payslips",
  //   icon: leave,
  //   description:
  //     "Simplify leave management with our intuitive leave tracker section. Easily request, approve, and monitor employee absences for seamless HR administration.",
  //   link: "/dashboard/profile/payslips",
  // },
  // {
  //   name: "Forms",
  //   icon: forms,
  //   description:
  //     "Simplify leave management with our intuitive leave tracker section. Easily request, approve, and monitor employee absences for seamless HR administration.",
  //   link: "/dashboard/profile/forms",
  // },
  {
    name: "Tax Deductions",
    icon: tax,
    description:
    "Optimize your finances with our tax deductions section. Easily calculate, manage, and maximize your tax benefits for efficient financial planning.",
    link: "/dashboard/payroll/taxdeductions",
  },
  {
    name: "Reimbursements",
    icon: reimbursement,
    description:
    "Effortlessly claim tax reimbursements with our user-friendly section. Simplify expense submissions and receive timely refunds, optimizing your financial management.",
    link: "/dashboard/payroll/reimbursements",
  },
  {
    name: "Leave Tracker",
    icon: leave,
    description:
      "Simplify leave management with our intuitive leave tracker section. Easily request, approve, and monitor employee absences for seamless HR administration.",
    link: "/dashboard/leaveTracker",
  },
];

const Dashboard = () => {
  const [integrationList, setIntegrationList] = useState(
    INITIAL_INTEGRATION_LIST,
  );

  const updateIntegrationStatus = (index) => {
    let integration = integrationList[index];
    setIntegrationList(
      integrationList.map((i, k) => {
        if (k === index) return { ...i, isActive: !i.isActive };
        return i;
      }),
    );
  };

  return (
    <>
      <div className="m-5 2xl:mx-10 grid grid-cols-1 gap-6 2xl:gap-12 md:grid-cols-3 md:max-lg:grid-cols-2 2xl:grid-cols-4 mb-10">
        {integrationList.map((i, k) => {
          return (
            <Link to={i.link} key={k}>
              <div className="card mt-2 h-full w-full bg-base-100 p-6 shadow-xl transition duration-300 hover:scale-105">
                <h2 className="mb-5 text-center font-bold">{i.name}</h2>
                <p className="flex">
                  <img
                    alt="icon"
                    src={i.icon}
                    className="mr-4 inline-block h-12 w-12"
                  />
                  {i.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
