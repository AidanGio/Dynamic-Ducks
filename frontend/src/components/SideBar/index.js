import React from "react";

import logo from "./../../assets/images/solar.png";
import "./styles.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SideBar = ({
  openTasks,
  openDashboard,
  setOpenTasks,
  setOpenDashboard,
}) => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <img alt="Logo" src={logo} />
      <div className="btn-grp">
        <Button
          variant={"contained"}
          className={openDashboard ? "active" : ""}
          onClick={() => {
            setOpenDashboard(true);
            setOpenTasks(false);
          }}
        >
          Dashboard
        </Button>
        <Button
          variant={"contained"}
          className={openTasks ? "active" : ""}
          onClick={() => {
            setOpenDashboard(false);
            setOpenTasks(true);
          }}
        >
          Tasks
        </Button>

        <Button onClick={() => navigate("/")}>Home</Button>
      </div>
    </div>
  );
};

export default SideBar;
