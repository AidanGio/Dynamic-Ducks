import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { apiInstance } from "../utils/apiInstance";

import "./styles.scss";
import { Button } from "@mui/material";

const HomePage = ({ auth, setAuth }) => {
  // const [projects, setProjects] = useState({});

  // useEffect(() => {
  //   apiInstance.get("/projects").then((res) => setProjects(res.data));
  // }, []);
  // console.log(projects);

  return (
    <MainLayout auth={auth}>
      <h1>Dynamic Ducks</h1>
      {auth && auth.role == "client" && (
        <Link to={"/clientportal"} className="homepagelink">
          Client Portal
        </Link>
      )}{" "}
      {auth && auth.role == "operationsmanagerportal" && (
        <Link to={"/operationsmanagerportal"} className="homepagelink">
          Operations Manager Portal
        </Link>
      )}
      {auth && auth.role == "salesRepresentative" && (
        <Link to={"/salesportal"} className="homepagelink">
          Sales Portal
        </Link>
      )}
      {auth && auth.role == "installationWorker" && (
        <Link to={"/crew"} className="homepagelink">
          Crew Portal
        </Link>
      )}
      {auth && (
        <Button
          onClick={() => {
            sessionStorage.removeItem("user");
            setAuth(null);
          }}
        >
          Logout
        </Button>
      )}
    </MainLayout>
  );
};

export default HomePage;
