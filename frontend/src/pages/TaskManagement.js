import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";

import SideBar from "../components/SideBar";
import Tasks from "../components/Tasks";

import "./styles.scss";

const projectData = {};

var dataDB = JSON.stringify({
  collection: "projects",
  database: "solar",
  dataSource: "Cluster0",
});

var config = {};

const TaskManagement = () => {
  const [openTasks, setOpenTasks] = useState(false);
  const [openDashboard, setOpenDashboard] = useState(true);

  return (
    <div className="taskmanagement">
      <SideBar
        setOpenDashboard={setOpenDashboard}
        openDashboard={openDashboard}
        openTasks={openTasks}
        setOpenTasks={setOpenTasks}
      />
      {openTasks && <Tasks />}
      {openDashboard && <Dashboard />}
    </div>
  );
};

export default TaskManagement;
