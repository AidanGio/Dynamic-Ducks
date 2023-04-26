import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";

import SideBar from "../components/SideBar";
import Tasks from "../components/Tasks";

import "./styles.scss";
import { apiInstance } from "../utils/apiInstance";

//Hardcoded for now
const taskData = [
  {
    company: "Abc",
    task: "Complete following task",
    priority: "High",
    dueDate: "04/01/2023",
    location: "location",
  },
];

//DB function to find all tasks for particular user

const TaskManagement = () => {
  const [openTasks, setOpenTasks] = useState(false);
  const [openDashboard, setOpenDashboard] = useState(true);

  const [tasks, setTasks] = useState();

  useEffect(() => {
    apiInstance.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <div className="taskmanagement">
      <SideBar
        setOpenDashboard={setOpenDashboard}
        openDashboard={openDashboard}
        openTasks={openTasks}
        setOpenTasks={setOpenTasks}
      />
      {openTasks && <Tasks data={tasks} />}
      {openDashboard && <Dashboard />}
    </div>
  );
};

export default TaskManagement;
