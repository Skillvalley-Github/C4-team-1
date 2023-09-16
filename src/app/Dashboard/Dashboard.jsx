import React from "react";
import { Link } from "react-router-dom";
import RightSidebar from "../../components/Shared/RightSidebar";
import Modal from "../../components/Shared/Modal";

const Dashboard = () => {
  return (
    <>
      <div className="absolute right-0">
       <RightSidebar/>
      </div>
        <p>Dashboard</p>
        <Modal/>
    </>
  );
};

export default Dashboard;
