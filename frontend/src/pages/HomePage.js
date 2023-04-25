import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { apiInstance } from "../utils/apiInstance";

import "./styles.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = ({ auth, setAuth }) => {
  // const [projects, setProjects] = useState({});

  // useEffect(() => {
  //   apiInstance.get("/projects").then((res) => setProjects(res.data));
  // }, []);
  // console.log(projects);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user._id; // get the _id of the logged-in user
  console.log(userId);

  function sendProjectNotification(userId) {
    fetch(`http://localhost:5000/calendar/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        const currentDate = new Date();
        const upcomingProjects = data.filter(
          (project) => new Date(project.endDate) >= currentDate
        );
        if (upcomingProjects.length > 0) {
          upcomingProjects.sort(
            (a, b) => new Date(a.startDate) - new Date(b.startDate)
          );
          const project = upcomingProjects[0];
          const notification = new Notification(
            `Upcoming Project: ${project.name}`,
            {
              body: `Start date: ${project.startDate}\nEnd date: ${project.endDate}`,
              icon: "frontend/src/assets/images/solar.png",
            }
          );
          notification.addEventListener("click", () => {
            console.log("Notification clicked!");
          });
        } else {
          console.warn("No upcoming projects.");
        }
      })
      .catch((error) => console.error("Error fetching project data:", error));
  }

  // Ask for permission to show notifications
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
  sendProjectNotification(userId);

  return (
    <MainLayout auth={auth}>
      <h2>Dynamic Ducks</h2>
      <p> Welcome {auth.firstName + " " + auth.lastName}</p>
      <br />
      {auth && auth.role == "client" && (
        <Button variant={"contained"} onClick={() => navigate("/clientportal")}>
          Client Portal
        </Button>
      )}{" "}
      {auth && auth.role == "operationsManager" && (
        <Button
          variant={"contained"}
          onClick={() => navigate("/operationsmanagerportal")}
        >
          Operations Manager Portal
        </Button>
      )}
      {auth && auth.role == "sales" && (
        <Button
          variant={"contained"}
          onClick={() => navigate("/salesportal")}
          className="homepageButton"
        >
          Sales Portal
        </Button>
      )}
      {auth && auth.role == "installationWorker" && (
        <Button
          variant={"contained"}
          onClick={() => navigate("/crew")}
          className="homepageButton"
        >
          Crew Portal
        </Button>
      )}
      {auth && (
        <Button
          onClick={() => {
            localStorage.removeItem("user");
            setAuth(null);
          }}
        >
          Logout
        </Button>
      )}
    </MainLayout>
  );
};

export default HomePage;
