import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import "./styles.scss";

const HomePage = () => {
  return (
    <MainLayout>
      <h1>Dynamic Ducks</h1>

      <Link className="homepagelink" to={"/signin"}>
        Sign In
      </Link>
      <Link className="homepagelink" to={"/signup"}>
        Sign Up
      </Link>
    </MainLayout>
  );
};

export default HomePage;
