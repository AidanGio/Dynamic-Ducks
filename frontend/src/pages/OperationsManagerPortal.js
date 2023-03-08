import React from "react";
import OperationsManagerLayout from "../layouts/OperationsManagerLayout";

  const CurrentProjects = [
    {name: "Social Media Marketing Campaign", startDate: "6/1/2024", endDate: "9/30/2024", progress: "Executing", status: 400, billing: true, users: ["Sophie", "Adam"]},
{name: "Cloud Infrastructure Migration", startDate: "2/1/2025", endDate: "5/31/2025", progress: "Migrating", status: 300, billing: false, users: ["Jacob", "Ava"]},
{name: "Virtual Reality Game Development", startDate: "11/1/2023", endDate: "6/30/2024", progress: "Designing", status: 300, billing: true, users: ["Ethan", "Isabella", "Mia"]},
{name: "Online Learning Platform", startDate: "4/1/2025", endDate: "10/31/2025", progress: "Developing", status: 100, billing: false, users: ["Noah", "Chloe"]},

    
  ];
  const PastProjects = [

    {name: "New Website Design", startDate: "10/1/2023", endDate: "12/30/2023", progress: "Designing", status: 400, billing: true, users: ["Alex", "Emily"]},
{name: "Mobile App Development", startDate: "5/12/2024", endDate: "10/31/2024", progress: "Testing", status: 200, billing: false, users: ["John", "Sarah", "David"]},
{name: "E-commerce Platform Migration", startDate: "9/1/2023", endDate: "1/31/2024", progress: "Migrating", status: 400, billing: true, users: ["Jane", "Robert"]},
{name: "CRM System Integration", startDate: "3/15/2025", endDate: "6/30/2025", progress: "Planning", status: 100, billing: false, users: ["Michael", "Olivia"]},
{name: "Data Analytics Dashboard", startDate: "8/1/2024", endDate: "11/30/2024", progress: "Developing", status: 0, billing: true, users: ["William", "Emma"]},
  ];
  function ProjectRow({project}){
    return (
      <tr>
        <td>{project.name}</td>
        <td>{project.startDate}</td>
        <td>{project.endDate}</td>
        <td>{project.progress}</td>
        <td>{project.status}</td>
        <td>{project.billing ? "Complete" : "Incomplete"}</td>
        <td>{project.users}</td>
      </tr>
    );
    
  };
  function ProjectTable({projects, active}){
    const rows = [];
    
    function stringToDate(date){
      const dateArray = date.split("/");
      return new Date(dateArray[2],dateArray[0]-1,dateArray[1]);
    }projects.forEach((project) => {
      
      rows.push(
        <ProjectRow project = {project} />
      );
     
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
            <th>Users</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };
  
  const OperationsManagerPortal = () => {
    return (
    <OperationsManagerLayout>
      <h1>Operations Manager Portal</h1>
      <div>
        <h2>Current Projects</h2>
          <ProjectTable projects={CurrentProjects} />
        <h2>Past Projects</h2>
          <ProjectTable projects={PastProjects}  />
      </div>
    </OperationsManagerLayout>
    );
  };
  
  export default OperationsManagerPortal;
  


 