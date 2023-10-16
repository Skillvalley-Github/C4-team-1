import { useEffect } from "react";
import { createFullCalendar } from "./fullCalendarModule"; // Import the function

function MyCalendarComponent() {
  useEffect(() => {
    const calendarEl = document.getElementById("calendar"); // Replace with the actual DOM element where you want to render the calendar
    const initialView = "dayGridMonth"; // Set your desired initial view

    const calendar = createFullCalendar(calendarEl, initialView);

    calendar.render(); // Render the calendar

    // Add events to the calendar
    calendar.addEvent({
      title: "Event 1",
      start: "2023-10-16",
    });
    calendar.addEvent({
      title: "Event 2",
      start: "2023-10-20",
    });
  }, []);

  return <div id="calendar"></div>;
}

export default MyCalendarComponent;
