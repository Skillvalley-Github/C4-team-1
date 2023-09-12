import React, { useMemo } from "react";
import { empData } from "../../user/dummy";
import Table from "./Table";
import Layout from "../../components/Shared/Layout";

const EmployeeMgmt = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Profile Image",
        accessor: "image",
      },
      {
        Header: "Emp Id",
        accessor: "emp_id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email Id",
        accessor: "email",
      },
      {
        Header: "Phone No.",
        accessor: "phone_number",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Date of Joining",
        accessor: "date_of_joining",
      },
    ],
    []
  );

  const data = useMemo(() => empData(), []);

  return (
    <>
   
        <div className="z-60">
          <Table columns={columns} data={data} />
        </div>
    
    </>
  );
};

export default EmployeeMgmt;
