import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/solar.png";

import { Button } from "@mui/material";

import "./styles.scss";

const Header = ({ title, auth }) => {
  return (
    <header className="header">
      <img src={logo} height={"100%"} />
      <div className="navigation">
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeStyle" : "inactiveStyle"
          }
          to={"/"}
        >
          Home
        </NavLink>
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
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeStyle" : "inactiveStyle"
          }
          to={"/messages"}
        >
          Chat
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
