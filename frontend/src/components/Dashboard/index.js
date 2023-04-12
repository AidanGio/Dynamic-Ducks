import React, { useEffect, useState } from "react";
import "./styles.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Dashboard = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/calendar/6407f77988b55420b2f3476c")
      .then((response) => response.json())
      .then((data) => {
        const events = data.map((event) => ({
          title: event.name,
          start: new Date(event.startDate),
          end: new Date(event.endDate),
        }));
        setCalendarEvents(events);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="dashboard">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
      />
    </div>
  );
};

export default Dashboard;
