import React, { useEffect, useState } from "react";
import "./styles.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Dashboard = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user._id; // get the _id of the logged-in user
  console.log(userId);
  useEffect(() => {
    fetch(`http://localhost:5000/calendar/${userId}`)
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
  }, [userId]); // add userId as a dependency to useEffect

  return (
    <div className="dashboard">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
        timeZone="America/New_York"
      />
    </div>
  );
};

export default Dashboard;
