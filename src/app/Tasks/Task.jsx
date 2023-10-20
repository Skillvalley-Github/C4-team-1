import React, { useState } from "react";
import Layout from "../../components/Shared/Layout";
// import "./Task.css";
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
import { useNavigate } from "react-router-dom";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import Accordion from "./Accordion";

const Task = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [fromDate, setFromDate] = useState(new Date()); // Initialize fromDate with the current date
  const [toDate, setToDate] = useState(new Date()); // Initialize toDate with the current date
  const [assignedBy, setAssignedBy] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
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
      assignedTo: assignedTo,
      status: status,
      importanceLevel: importanceLevel,
    };
    let arr = [...data, obj];
    setData(arr);
    setTaskName("");
    setFromDate(new Date());
    setToDate(new Date());
    setAssignedBy("");
    setStatus("");
    setImportanceLevel("");
    setOpen(false);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
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
    <div className="h-fit max-sm:h-screen md:h-fit ">
      <div className="flex flex-col max-sm:mr-8">
        <h1 className="mt-8 flex justify-center text-2xl font-bold text-black">Manage All Tasks</h1>

        <div className="flex p-3">
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
                id="assignedName"
                label="Assigned To"
                type="text"
                fullWidth
                variant="standard"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
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

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="m-3 flex w-full flex-col  rounded-2xl bg-base-100 p-4 shadow-2xl md:w-9/12">
              <button
                onClick={handleClickOpen}
                className="btn btn-info border-none bg-sky-500 text-slate-100">
                <PlusIcon className="h-5 w-5" /> ADD TASK
              </button>
              <div className="flex flex-col overflow-x-auto p-6  max-sm:p-0 max-sm:pt-3">
                {data.length > 0 && (
                  <div className="just flex text-3xl font-medium text-black">Total tasks: {data.length}</div>
                )}
                <div className="flex w-full">
                  <table className="table">
                    {/* Table headings */}
                    <thead>
                      <tr className="hover">
                        <th>Task Name</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>Assigned By</th>
                        <th>Assigned To</th>
                        <th>Status</th>
                        <th>Importance Level</th>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      {data.length > 0 ? (
                        data.map((item, index) => (
                          <tr key={index} className="hover">
                            <td>{item.taskName}</td>
                            <td>{item.fromDate}</td>
                            <td>{item.toDate}</td>
                            <td>{item.assignedBy}</td>
                            <td>{item.assignedTo}</td>
                            <td>{item.status}</td>
                            <td>{item.importanceLevel}</td>
                            <td className="hover-pointer" onClick={() => handleDelete(index)}>
                              <TrashIcon className="h-5 w-5 hover:text-red-500" />
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="8">No tasks available.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="m-4 mr-4 flex w-full flex-col rounded-2xl bg-base-100 p-4 shadow-2xl md:w-3/12">
              <div className="overflow-x-auto">
                <h1 className="text mb-2  p-3 text-center text-lg font-bold ">FAQ?</h1>
                <Accordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
