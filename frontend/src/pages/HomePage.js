import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { apiInstance } from "../utils/apiInstance";

import "./styles.scss";

const HomePage = () => {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    apiInstance.get("/projects").then((res) => setProjects(res.data));
  }, []);
  console.log(projects);

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
