import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { apiInstance } from "../utils/apiInstance";

import "./styles.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = ({ auth, setAuth }) => {
  // const [projects, setProjects] = useState({});

  // useEffect(() => {
  //   apiInstance.get("/projects").then((res) => setProjects(res.data));
  // }, []);
  // console.log(projects);

  const navigate = useNavigate();

  return (
    <MainLayout auth={auth}>
      <h1>Dynamic Ducks</h1>
      {auth && auth.role == "client" && (
        <Button variant={"contained"} onClick={() => navigate("/clientportal")}>
          Client Portal
        </Button>
      )}{" "}
      {auth && auth.role == "operationsmanagerportal" && (
        <Button
          variant={"contained"}
          onClick={() => navigate("/operationsmanagerportal")}
        >
          Operations Manager Portal
        </Button>
      )}
      {auth && auth.role == "sales" && (
        <Button
          variant={"contained"}
          onClick={() => navigate("/salesportal")}
          className="homepageButton"
        >
          Sales Portal
        </Button>
      )}
      {auth && auth.role == "installationWorker" && (
        <Button
          variant={"contained"}
          onClick={() => navigate("/crew")}
          className="homepageButton"
        >
          Crew Portal
        </Button>
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
