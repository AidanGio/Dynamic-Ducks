import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/solar.png";

import "./styles.scss";

const Header = ({ title }) => {
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
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeStyle" : "inactiveStyle"
          }
          to={"/signup"}
        >
          Sign Up
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeStyle" : "inactiveStyle"
          }
          to={"/signin"}
        >
          Sign In
        </NavLink>
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
