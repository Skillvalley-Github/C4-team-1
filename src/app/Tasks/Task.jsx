import React, { useState } from "react";
import Layout from "../../components/Shared/Layout";
import "./Task.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BasicDatePicker from "../../utils/BasicDatePicker";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";

const Task = () => {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [fromDate, setFromDate] = useState(new Date()); // Initialize fromDate with the current date
  const [toDate, setToDate] = useState(new Date()); // Initialize toDate with the current date
  const [assignedBy, setAssignedBy] = useState("");
  const [status, setStatus] = useState("");
  const [importanceLevel, setImportanceLevel] = useState("");
  const [value, setValue] = useState(dayjs());
  const [value1, setValue1] = useState(dayjs());
  const [modifiedDate, setModifiedDate] = useState("");
  const [data, setData] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // console.log(taskName);
    // console.log(fromDate);
    // console.log(toDate);
    // console.log(assignedBy);
    // console.log(status);
    // console.log(importanceLevel);
    setOpen(false);
  };

  const handleSave = () => {
    const obj = {
      taskName: taskName,
      fromDate: fromDate,
      toDate: toDate,
      assignedBy: assignedBy,
      status: status,
      importanceLevel: importanceLevel,
    };
    let arr = [...data, obj];
    setData(arr);
    setOpen(false);
  };

  const handleDelete=(index)=>{
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }
  const handleDateFromChange = (newValue) => {
    // Update both value and fromDate states
    setValue(newValue);
    setFromDate(formatDate(newValue.$d));
  };

  const handleDateToChange = (newValue) => {
    // Update both value and fromDate states
    setValue1(newValue);
    setToDate(formatDate(newValue.$d));
  };
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Note: Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          ➕ ADD TASK
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Tasks</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="taskName"
              label="Task Name"
              type="text"
              fullWidth
              variant="standard"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <label>From</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker label="Select Date" value={value} onChange={handleDateFromChange} />
              </DemoContainer>
            </LocalizationProvider>

            <label>To</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker label="Select Date" value={value1} onChange={handleDateToChange} />
              </DemoContainer>
            </LocalizationProvider>
            <TextField
              autoFocus
              margin="dense"
              id="assignedName"
              label="Assigned By"
              type="text"
              fullWidth
              variant="standard"
              value={assignedBy}
              onChange={(e) => setAssignedBy(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="status"
              label="Status"
              type="text"
              fullWidth
              variant="standard"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="importanceLevel"
              label="Importance Level"
              type="text"
              fullWidth
              variant="standard"
              value={importanceLevel}
              onChange={(e) => setImportanceLevel(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </DialogActions>
        </Dialog>
      </div>
      {data.length > 0 && (
        <div className="flex flex-col overflow-x-auto p-6  max-sm:p-0 max-sm:pt-3">
          <div className="card card-body min-w-full bg-base-100 shadow-xl ">
            <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr className="hover">
                        <th>Task Name</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>Assigned By</th>
                        <th>Status</th>
                        <th>Importance Level</th>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index} className="hover">
                          <td>{item.taskName}</td>
                          <td>{item.fromDate}</td>
                          <td>{item.toDate}</td>
                          <td>{item.assignedBy}</td>
                          <td>{item.status}</td>
                          <td>{item.importanceLevel}</td>
                          <td className="hover-pointer" onClick={()=>handleDelete(index)}>❌</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
