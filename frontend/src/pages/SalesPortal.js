import React from "react";
import SalesLayout from "../layouts/SalesLayout";

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
