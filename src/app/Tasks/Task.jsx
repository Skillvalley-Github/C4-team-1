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

const Task = () => {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [fromDate, setFromDate] = useState(new Date()); // Initialize fromDate with the current date
  const [toDate, setToDate] = useState(new Date()); // Initialize toDate with the current date
  const [assignedBy, setAssignedBy] = useState("");
  const [status, setStatus] = useState("");
  const [importanceLevel, setImportanceLevel] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log(taskName);
    console.log(fromDate.toISOString()); // Convert the stored date to ISO format
    console.log(toDate.toISOString());   // Convert the stored date to ISO format
    console.log(assignedBy);
    console.log(status);
    console.log(importanceLevel);
    setOpen(false);
  };

  // You can update the state variables as needed when user input changes

  return (
    <>
      <div>task</div>
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
            <BasicDatePicker
              value={fromDate}
              onChange={(date) => setFromDate(date)}
            />
            <label>To</label>
            <BasicDatePicker
              value={toDate}
              onChange={(date) => setToDate(date)}
            />
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
            <Button onClick={handleClose}>Save Changes</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Task;
