import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Shared/Modal";
import { useState } from "react";
// import { useDispatch } from "react-redux"
// import TitleCard from "../../components/Cards/TitleCard"
// import { showNotification } from "../common/headerSlice"
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
    link: "/employeedata",
  },
  {
    name: "Attendance",
    icon: attendance,
    description:
      "Track attendance effortlessly with our dedicated section. Streamline record-keeping, monitor punctuality, and enhance workforce management for improved productivity.",
    link: "/attendance",
  },
  {
    name: "Tasks",
    icon: task,
    description:
      "Stay organized and efficient with our tasks section. Assign, track, and manage work seamlessly, ensuring productivity and collaboration.",
    link: "/tasks",
  },
  {
    name: "Tax Deductions",
    icon: tax,
    description:
      "Optimize your finances with our tax deductions section. Easily calculate, manage, and maximize your tax benefits for efficient financial planning.",
    link: "/payroll/taxdeductions",
  },
  {
    name: "Reimbursements",
    icon: reimbursement,
    description:
      "Effortlessly claim tax reimbursements with our user-friendly section. Simplify expense submissions and receive timely refunds, optimizing your financial management.",
    link: "/payroll/reimbursements",
  },
  {
    name: "Payroll Settings",
    icon: payrollSettings,
    description:
    "Customize payroll effortlessly in our settings section. Tailor payment schedules, tax withholdings, and employee details for precise financial management.",
    link: "/payroll/settings",
  },
  {
    name: "Leave Tracker",
    icon: leave,
    description:
      "Simplify leave management with our intuitive leave tracker section. Easily request, approve, and monitor employee absences for seamless HR administration.",
    link: "/leaveTracker",
  },
  {
    name: "Profile",
    icon: profile,
    description:
      "Easily access and update your details, view salary information, access payslips, submit forms, and configure settings all at one place.",
    link: "/profile",
  },
];

const Dashboard = () => {
  // const dispatch = useDispatch()

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
    // dispatch(showNotification({message : `${integration.name} ${integration.isActive ? "disabled" : "enabled"}` , status : 1}))
  };

  return (
    <>
      <div className="m-5 2xl:mx-10 grid grid-cols-1 gap-6 2xl:gap-12 md:grid-cols-3 mb-10">
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
                {/* <div className="mt-6 text-right">
                <input
                  type="checkbox"
                  className="toggle toggle-success toggle-lg"
                  checked={i.isActive}
                  onChange={() => updateIntegrationStatus(k)}
                />
              </div> */}
              </div>
            </Link>
          );
        })}
      </div>

      {/* <div className="my-8">
        <Modal />
      </div> */}
    </>
  );
};

export default Dashboard;
