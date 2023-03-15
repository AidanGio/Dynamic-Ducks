import React from "react";

import logo from "./../../assets/images/solar.png";
import "./styles.scss";

const SideBar = ({
  openTasks,
  openDashboard,
  setOpenTasks,
  setOpenDashboard,
}) => {
  return (
    <div className="sidebar">
      <img alt="Logo" src={logo} />
      <div className="btn-grp">
        <button
          className={openDashboard ? "active" : ""}
          onClick={() => {
            setOpenDashboard(true);
            setOpenTasks(false);
          }}
        >
          Dashboard
        </button>
        <button
          className={openTasks ? "active" : ""}
          onClick={() => {
            setOpenDashboard(false);
            setOpenTasks(true);
          }}
        >
          Tasks
        </button>
      </div>
    </div>
  );
};

export default SideBar;
