import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/solar.png";

import { Button } from "@mui/material";

import "./styles.scss";

const Header = ({ title, auth }) => {
  return (
    <header className="header">
      <div className="logo-div">
        <img src={logo} height={"100px"} />
      </div>
      <div className="navigation">
        {auth && (
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
            to={"/"}
          >
            Home
          </NavLink>
        )}
        {auth &&
          (auth.role == "installationWorker" ||
            auth.role == "operationsManager") && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeStyle" : "inactiveStyle"
              }
              to={"/tasks"}
            >
              Tasks
            </NavLink>
          )}
        {!auth && (
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
            to={"/signup"}
          >
            Sign Up
          </NavLink>
        )}
        {!auth && (
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
            to={"/login"}
          >
            Sign In
          </NavLink>
        )}
        {auth && (
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
            to={"/messages"}
          >
            Chat
          </NavLink>
        )}
        {auth && (
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
            to={"/projects"}
          >
            Projects
          </NavLink>
        )}
        {auth &&
          (auth.role == "sales") && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeStyle" : "inactiveStyle"
              }
              to={"/leads"}
            >
              Leads
            </NavLink>
          )}
      </div>
    </header>
  );
};

export default Header;
