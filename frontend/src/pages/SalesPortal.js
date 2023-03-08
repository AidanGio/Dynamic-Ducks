import React from "react";
import SalesLayout from "../layouts/SalesLayout";
import "./styles.scss"

// dummy projects for visual purposes, need to use projects from the database
const dummyProjects = [
  {name: "Bob's Project", startDate: "2/15/2023", endDate: "4/14/2023", progress: "Installing", status: 60, billing: true},
  {name: "Bobert's Project", startDate: "2/15/2023", endDate: "4/14/2023", progress: "Installing", status: 60, billing: false},
];
function ProjectRow({project}){
  return (
    <tr style={{
      boxShadow: "0px 0px 0px 1px rgb(0, 0, 0)",
      }}>
      <td>{project.name}</td>
      <td>{project.startDate}</td>
      <td>{project.endDate}</td>
      <td>{project.progress}</td>
      <td>{project.status}</td>
      <td>{project.billing ? "Complete" : "Incomplete"}</td>
    </tr>
  );
};

function ProjectTable({projects, active}){
  const rows = [];
  
  function stringToDate(date){
    const dateArray = date.split("/");
    return new Date(dateArray[2],dateArray[0]-1,dateArray[1]);
  }
  
  // Need to filter projects so that the table will either only have current projects or past projects
  // Tried doing it this way but it makes it so that the entire page disappears...
  projects.forEach((project) => {
    //if ((active && project.endDate.stringToDate().getTime() < new Date.getTime()) || (!active && project.endDate.stringToDate().getTime() > new Date.getTime())){
    rows.push(
      <ProjectRow project = {project} />
    );
    //}
  });

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
      <tbody>{rows}</tbody>
    </table>
  );
};

const SalesPortal = () => {
  return (
  <SalesLayout>
    <h1>Sales Portal</h1>
    <div style={{boxShadow: "0px 0px 0px 1px rgb(0, 0, 0)", padding: "0px 50px"}}>
      <h2>Current Projects</h2>
        <ProjectTable projects={dummyProjects} />
      <h2>Past Projects</h2>
        <ProjectTable projects={dummyProjects}  />
    </div>
  </SalesLayout>
  );
};

export default SalesPortal;
