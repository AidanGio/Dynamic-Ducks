import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

const Header = () => {
  return (
    <header>
      <h1>Dynamic Ducks</h1>
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
      </div>
    </header>
  );
};

export default Header;
