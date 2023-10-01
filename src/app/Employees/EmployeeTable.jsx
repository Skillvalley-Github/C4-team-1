import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeData from "./EmployeeData.json";
import InputText from "../../components/Input/InputText";
import CustomButton from "../../components/Shared/CustomButton";


const EmployeeTable = () => {
  const [members, setMembers] = useState(EmployeeData);

  const getRoleComponent = (role) => {
    if (role === "Admin") return <div className="badge badge-secondary">{role}</div>;
    if (role === "Manager") return <div className="badge">{role}</div>;
    if (role === "Owner") return <div className="badge badge-primary">{role}</div>;
    if (role === "Support") return <div className="badge badge-accent">{role}</div>;
    else return <div className="badge badge-ghost">{role}</div>;
  };

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  
  const openModal = () => {
    setIsOpen(true);
  };
  
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };
  
  const handleSave = () => {
    closeModal();
  };

  return (
    <>
      {/* Team Member list in table format loaded constant */}
      <div className="card m-5 bg-base-100 p-6 shadow-xl">
        <div className=" mb-5 flex items-center justify-end">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            onClick={openModal}>
            Add Employee
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table mb-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Employee ID</th>
                <th>Email ID</th>
                <th>Phone Number</th>
                <th>Gender</th>
                <th>Role</th>
                <th>PAN</th>
                <th>Address</th>
                <th>Date of Birth</th>
                <th>Date of Joining</th>
                <th>Father's Name</th>
              </tr>
            </thead>
            <tbody>
              {members.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>
                      <Link to={"/app/settings-profile"}>
                        <div className="flex w-44 items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-circle h-12 w-12">
                              <img src={l.avatar} alt="Avatar" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold hover:underline">{l.f_name + " " + l.l_name}</div>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td>{l.emp_id}</td>
                    <td>{l.email}</td>
                    <td>{l.phone_num}</td>
                    <td>{l.gender}</td>
                    <td>{getRoleComponent(l.role)}</td>
                    <td>{l.pan_num}</td>
                    <div className="w-48">
                      <td>{l.address}</td>
                    </div>
                    <td>{l.dob}</td>
                    <td>{l.doj}</td>
                    <td>{l.father_name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {isOpen && (
          <div
            className="modal-overlay fixed left-20 max-sm:left-0 top-0 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50"
            onClick={handleOverlayClick}>
            <div className="modal-container z-50 mx-auto w-11/12 overflow-y-auto rounded bg-base-200 shadow-lg md:max-w-md border border-slate-500">
              <div className="modal-content px-6 py-4 text-left">
                <h3 className="text-center text-lg font-bold ">Add New Employee Here!</h3>
                <InputText
                        type="text"
                        updateType="first_name"
                  containerStyle="mt-4"
                  labelTitle="First Name"
                      />
                     
                    <InputText type="text" updateType="last_name" containerStyle="mt-4" labelTitle="Last Name" />

                <InputText type="email" updateType="email" containerStyle="mt-4" labelTitle="Email Id" />

                <div className="modal-action">
                  <div className="modal-action">
                    <button className="btn btn-ghost" onClick={() => closeModal()}>
                      Cancel
                    </button>
                    <button className="btn btn-primary px-6" onClick={() => handleSave()}>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeTable;
