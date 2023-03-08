import React from "react";
import GroundCrewLayout from "../layouts/GroundCrewLayout";
import "./styles.scss";

const GroundsCrewPortal = () => {
  const projects = [
    {
      id: 1,
      name: "Project A",
      startDate: "2022-01-01",
      endDate: "2022-06-30",
      stage: "Planning",
      progress: 25,
      laborHours: 100,
      equipmentDetails: "Crane",
      inspectionDetails: "TBA",
      closeoutInfo: "TBA",
    },
    {
      id: 2,
      name: "Project B",
      startDate: "2022-03-01",
      endDate: "2022-08-31",
      stage: "In Progress",
      progress: 50,
      laborHours: 200,
      equipmentDetails: "Bucket Truck",
      inspectionDetails: "Inspection passed",
      closeoutInfo: "TBA",
    },
  ];
  
  return (
    <GroundCrewLayout>
      <h1>Grounds Crew Portal</h1>
      <table className="my-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Stage</th>
            <th>Progress %</th>
            <th>Labor Hours</th>
            <th>Equipment/Material Details</th>
            <th>Inspection Details</th>
            <th>Closeout Info</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
              <td>{project.stage}</td>
              <td>{project.progress}%</td>
              <td>{project.laborHours}</td>
              <td>{project.equipmentDetails}</td>
              <td>{project.inspectionDetails}</td>
              <td>{project.closeoutInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </GroundCrewLayout>
  );
};

export default GroundsCrewPortal;
