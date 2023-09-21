const Attendance = () => {
  return (
    <div className="h-full p-5 md:p-10">
      {/* Welcome deck card */}
      <div className="shadow-xl card w-96 bg-base-100 image-full">
        <div className="card-body">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="/images/profile-photo.png" alt="profile_image" />
            </div>
          </div>
          <h2 className="card-title">Welcome Again, Mark!</h2>
          <p>Mark Your today attendance</p>
          <div className="justify-end card-actions">
            <button className="btn btn-accent">Mark Attendance</button>
          </div>
        </div>
      </div>
      {/* Performance */}
      <h2 className="mt-5 mb-2 text-2xl font-semibold text-black">
        Performance
      </h2>
      <div className="w-full shadow stats">
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
      </div>
      {/* Request */}
      <h2 className="mt-5 mb-2 text-2xl font-semibold text-black">Requests</h2>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="shadow-xl card w-96 bg-base-100">
          <div className="card-body">
            <h2 className="card-title">Apply For Leave</h2>
            <p>If you want to give a reason to apply for the leave?</p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Apply</button>
            </div>
          </div>
        </div>
        <div className="mt-3 shadow-xl md:mt-0 card w-96 bg-base-100">
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
