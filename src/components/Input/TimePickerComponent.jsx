import React, { useEffect } from "react";
import { Input, Timepicker, initTE } from "tw-elements";

const TimePickerComponent = () => {
  useEffect(() => {
    // Initialize "tw-elements" with the Input and Timepicker components
    initTE({ Input, Timepicker });
  }, []);

  return (
    <div>
      <h1>Time Picker Example</h1>
      <Input
        type="text"
        className="tw-input"
        placeholder="Enter a time"
        data-te-name="time-input" // This is an example attribute for "tw-elements"
      />
      <Timepicker
        className="tw-timepicker"
        data-te-name="time-picker" // This is an example attribute for "tw-elements"
      />
    </div>
  );
};

export default TimePickerComponent;
