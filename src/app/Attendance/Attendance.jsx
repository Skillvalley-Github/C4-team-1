import { useState } from "react";

const Attendance = () => {
  const [attendance, setAttendance] = useState(false);
  const [leave, setLeave] = useState(false);

  return (
    <div className="p-5 md:p-10">
      {/* Welcome deck card */}
      <div className="z-0 w-full shadow-xl md:max-w-xl card bg-base-100 image-full">
        <div className="card-body">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="/images/profile-photo.png" alt="profile_image" />
            </div>
          </div>
          <h2 className="card-title">Welcome Again, Mark!</h2>
          <p>Mark Your today attendance</p>
          <d className="justify-end card-actions">
            {attendance ? (
              <div className="flex gap-2 p-3 text-white bg-green-700 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 stroke-current shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                >
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
              <button
                onClick={() => setAttendance(true)}
                className="btn btn-accent"
              >
                Mark Attendance
              </button>
            )}
          </d>
        </div>
      </div>
      {/* Performance */}
      <h2 className="mt-5 mb-2 text-2xl font-semibold text-black">
        Performance (September)
      </h2>
      <div className="w-full overflow-auto shadow stats">
        <div className="stat">
          <div className="stat-figure text-primary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="images/profile-photo.png" />
              </div>
            </div>
          </div>
          <div className="stat-title">Total Attendance</div>
          <div className="stat-value text-primary">18 Days</div>
          <progress
            className="w-56 progress progress-primary"
            value="70"
            max="100"
          ></progress>
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
      <h2 className="mt-5 mb-2 text-2xl font-semibold text-black">Requests</h2>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="w-full shadow-xl card bg-base-100 md:max-w-md">
          <div className="card-body">
            <h2 className="card-title">Apply For Leave</h2>
            <p>If you want to give a reason to apply for the leave?</p>
            <div className="justify-end card-actions">
              {!attendance && leave ? (
                <div className="flex gap-2 p-3 text-white bg-green-700 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 stroke-current shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
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
                <button
                  onClick={() => setLeave(true)}
                  className="btn btn-primary"
                >
                  Apply
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-full mt-3 shadow-xl md:mt-0 card md:max-w-md bg-base-100">
          <div className="card-body">
            <h2 className="card-title">Details of the Attendance</h2>
            <p>Details about the Attendance of last 12 Months</p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">See Attendance</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
