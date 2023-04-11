import React from "react";
import SalesLayout from "../layouts/SalesLayout";
import {apiInstance} from "../utils/apiInstance";
import {useEffect, useState} from 'react';
import "./styles.scss"


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
                  <tr style={{
                    boxShadow: "0px 0px 0px 1px rgb(0, 0, 0)",
                  }}>
                    <td>{project["name"]}</td>
                    <td>{project["startDate"]}</td>
                    <td>{project["endDate"]}</td>
                    <td>{project["progress"]}</td>
                    <td>{project["status"]*20 + "%"}</td>
                    <td>{project["billingStatus"] ? "Payment Received" : "Pending"}</td>
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