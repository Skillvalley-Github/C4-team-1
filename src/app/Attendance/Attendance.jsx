import { useState } from "react";
import * as React from "react";
import avatar from '../../assets/images/avatar1.jpg'

import FullCalendarComponent from "./FullCalendarComponent";

const Attendance = () => {
  const [attendance, setAttendance] = useState(false);
  const [leave, setLeave] = useState(false);

  return (
    <div className="p-5 md:p-10">
      {/* Welcome deck card */}
      <div className="card image-full z-0 w-full bg-base-100 shadow-xl md:max-w-xl">
        <div className="card-body">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={avatar} alt="profile_image" />
            </div>
          </div>
          <h2 className="card-title">Welcome Again, Mark!</h2>
          <p>Mark Your today attendance</p>
          <div className="card-actions justify-end">
            {attendance ? (
              <div className="flex gap-2 rounded-md bg-green-700 p-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Attendance Marked</span>
              </div>
            ) : (
              <button onClick={() => setAttendance(true)} className="btn btn-accent">
                Mark Attendance
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Performance */}
      <h2 className="mb-2 mt-5 text-2xl font-semibold text-black">Performance (September)</h2>
      <div className="stats w-full overflow-auto shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src={avatar} />
              </div>
            </div>
          </div>
          <div className="stat-title">Total Attendance</div>
          <div className="stat-value text-primary">18 Days</div>
          <progress className="progress progress-primary w-56" value="70" max="100"></progress>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Leave Taken</div>
          <div className="stat-value text-secondary">2 Days</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Remaining Leave</div>
          <div className="stat-value">3 Days</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Remaining Working Days</div>
          <div className="stat-value text-info">6 Days</div>
        </div>
      </div>
      {/* Request */}
      <h2 className="mb-2 mt-5 text-2xl font-semibold text-black">Requests</h2>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="card w-full bg-base-100 shadow-xl md:max-w-md">
          <div className="card-body">
            <h2 className="card-title">Apply For Leave</h2>
            <p>If you want to give a reason to apply for the leave?</p>
            <div className="card-actions justify-end">
              {!attendance && leave ? (
                <div className="flex gap-2 rounded-md bg-green-700 p-3 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Leave Applied</span>
                </div>
              ) : (
                <button onClick={() => setLeave(true)} className="btn btn-primary">
                  Apply
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="card mt-3 w-full bg-base-100 shadow-xl md:mt-0 md:max-w-md">
          <div className="card-body">
            <h2 className="card-title">Details of the Attendance</h2>
            <p>Details about the Attendance of last 12 Months</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See Attendance</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-x-auto p-6 max-sm:p-0 max-sm:pt-3">
        <div className="card card-body min-w-full bg-base-100 shadow-xl">
          <div className="overflow-x-auto">
            {/* Add this div for setting a max width */}
            <FullCalendarComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
