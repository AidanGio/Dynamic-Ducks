import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";



const ProjectPage = () => {
    const [projects, setProjects] = useState([
      { id: 1, title: 'Project 1', description: 'Lorem ipsum dolor sit amet', status: 'planning' },
      { id: 2, title: 'Project 2', description: 'Consectetur adipiscing elit', status: 'in-progress' },
      { id: 3, title: 'Project 3', description: 'Sed do eiusmod tempor incididunt', status: 'done' }
    ]);
  
    const handleCardClick = (id) => {
      // Future Implemenation: Handle card click
      console.log(`Card with ID ${id} clicked`);
    };
  
    return (
      <MainLayout>
        <h1>PROJECTS</h1>
        <div className="card-container">
          {projects.map((project) => (
            <div key={project.id} className={`card ${project.status}`} onClick={() => handleCardClick(project.id)}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-footer">
                <span className="status">{project.status}</span>
              </div>
            </div>
          ))}
        </div>
      </MainLayout>
    );
  };
  
  export default ProjectPage;