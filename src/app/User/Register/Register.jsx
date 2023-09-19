import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import EmpDetailsInput from "../../Employees/EmployeeComponents/EmpDetailsInput";


function Register() {
  return (
    <>
    
      <EmpDetailsInput employeeID={"AXYZWE123"} emailID={"employee123@gmail.com"} />
    </>
  );
}

export default Register;
