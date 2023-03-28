import React from "react";
import SalesLayout from "../layouts/SalesLayout";
import apiInstance from "../utils/apiInstance";
import {useEffect, useState} from 'react';
import "./styles.scss"

// dummy projects for visual purposes, need to use projects from the database
const dummyProjects = [
  {name: "Bob's Project", startDate: "2/15/2023", endDate: "4/14/2023", progress: "Installing", status: 60, billing: true},
  {name: "Bobert's Project", startDate: "2/15/2023", endDate: "4/14/2023", progress: "Installing", status: 60, billing: false},
];


function ProjectTable({projects}){
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Progress</th>
          <th>Project Status</th>
          <th>Billing Status</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project)=>{
                return(
                  <tr>
                    <td>{project["name"]}</td>
                    <td>{project["startDate"]}</td>
                    <td>{project["endDate"]}</td>
                    <td>{project["progress"]}</td>
                    <td>{project["projectStatus"]}</td>
                    <td>{project["billingStatus"]}</td>
                  </tr>
                );
          })}
      </tbody>
    </table>
  );
};

const SalesPortal = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    apiInstance.get("/projects").then((res) => setProjects(res.data));
  }, [])

  return (
    <SalesLayout>
      <h1>Sales Portal</h1>
      <div>
        <h2>Current Projects</h2>
        <ProjectTable projects={projects} />
        <h2>Past Projects</h2>
        <ProjectTable projects={projects} />
      </div>
    </SalesLayout>
  );
};

export default SalesPortal;