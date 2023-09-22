import React from "react";

const Intro = () => {
  return (
    <>
      <h1 className="text-2xl mt-8 font-bold text-center">
        Workforce Management Tool
      </h1>
      <p className="py-2 mt-4">
        ✓ <span className="font-semibold">Light/dark</span> mode toggle
      </p>
      <p className="py-2 ">
        ✓ <span className="font-semibold">Attendance, Payroll Management</span>{" "}
        and other utilities.
      </p>
      {/* <p className="py-2">✓ <span className="font-semibold">Calendar, Modal, Sidebar </span> components</p>
          <p className="py-2  ">✓ User-friendly <span className="font-semibold">documentation</span></p>
          <p className="py-2  mb-4">✓ <span className="font-semibold">Daisy UI</span> components, <span className="font-semibold">Tailwind CSS</span> support</p> */}
    </>
  );
};

export default Intro;
