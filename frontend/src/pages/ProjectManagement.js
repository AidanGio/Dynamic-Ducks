import React, { useEffect, useState } from "react";
import ProjectsLayout from "../layouts/ProjectsLayout";
import { Link, useNavigate } from "react-router-dom";
import { apiInstance } from "../utils/apiInstance";

import AddIcon from "@mui/icons-material/Add";

import "./styles.scss";

// components
import ProjectDetails from "../components/ProjectsDetails";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@mui/material";

const ProjectManagement = ({ auth }) => {
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      //const response = await fetch('http://localhost:5000/projects')
      const response = await fetch(
        "http://localhost:5000/projects/user/" + auth._id
      );
      const json = await response.json();
      console.log(json);
      // let myProjects = [];
      // let id = auth._id;
      // if (response.ok && Array.isArray(json)) {
      //   json.map((o, i) => {
      //     let am = o.AssignedManagers;
      //     let ac = o.AssignedCustomers;
      //     let aw = o.AssignedWorkers;
      //     let i1;
      //     let i2;
      //     let i3;
      //     if (Array.isArray(am)) {
      //       i1 = am.indexOf(id);
      //     }
      //     if (Array.isArray(ac)) {
      //       i2 = ac.indexOf(id);
      //     }
      //     if (Array.isArray(aw)) {
      //       i3 = aw.indexOf(id);
      //     }
      //     if (i1 !== -1 || i2 !== -1 || i3 !== -1) {
      //       myProjects.push(o);
      //     }
      //   });
      setProjects(json);
    };

    fetchProjects();
  }, []);

  return (
    <MainLayout auth={auth}>
      <br></br>
      <h1>Projects</h1>
      <Button
        variant={"contained"}
        onClick={() => navigate("/projects/createproject")}
      >
        <AddIcon /> Create Project
      </Button>

      <div>
        {(projects && Array.isArray(projects) && projects.length) > 0 ? (
          projects.map((project) => (
            <ProjectDetails key={project._id} project={project} />
          ))
        ) : (
          <>
            <br />
            <p>No Projects</p>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default ProjectManagement;
