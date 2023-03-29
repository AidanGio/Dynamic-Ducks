import React from "react";
import GroundCrewLayout from "../layouts/GroundCrewLayout";
import "./styles.scss";



const dummyProjects = [
  {name: "My Project 1", startDate: "2/15/2023", endDate: "4/14/2023", progress: "Validation", status: 85},
  {name: "My Project 2", startDate: "2/15/2023", endDate: "4/14/2023", progress: "Installation", status: 60},
];

function ProjectRow({project}){
  return (
    <tr>
      <td>{project.name}</td>
      <td>{project.startDate}</td>
      <td>{project.endDate}</td>
      <td>{project.progress}</td>
      <td>{project.status}</td>
    </tr>
  );
};
function ProjectTable({projects, active}){
  const rows = [];

  
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
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const GroundsCrewPortal = () => {
  return (
  <GroundCrewLayout>
    <h1>Ground Crew Portal</h1>
    <div>
      <h2>Current Projects</h2>
        <ProjectTable projects={dummyProjects} />
      <h2>Past Projects</h2>
        <ProjectTable projects={dummyProjects}  />
    </div>
  </GroundCrewLayout>
  );
};

export default GroundsCrewPortal;
