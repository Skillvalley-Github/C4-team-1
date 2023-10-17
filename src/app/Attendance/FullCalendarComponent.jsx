import React, { useEffect, useRef } from "react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
// import monthPlugin from "@fullcalendar/month";

function FullCalendarComponent() {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarEl = calendarRef.current;

    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: "dayGridMonth", // You can change this to "timeGridWeek" or "listWeek" or any other available view.
      events: [
        // Example event data
        {
          title: "Event 1",
          start: "2023-10-16",
        },
        {
          title: "Event 2",
          start: "2023-10-20",
        },
      ],
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return <div ref={calendarRef}></div>;
}

export default FullCalendarComponent;
