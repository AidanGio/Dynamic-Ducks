import React, { useEffect, useState } from "react";
import ProjectsLayout from "../layouts/ProjectsLayout";
import { apiInstance } from "../utils/apiInstance";

import "./styles.scss";

// components
import ProjectDetails from '../components/ProjectsDetails'

const ProjectManagement = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('http://localhost:5000/projects')
            const json = await response.json()
            if (response.ok) {
                setProjects(json)
            }
        }
    
        fetchProjects()
    }, [])

    return (
        <ProjectsLayout>
            <h1>Projects</h1>
            <div>
            {projects && projects.map((project) => (
                    <ProjectDetails key={project._id} project={project} />
                ))}
            </div>
        </ProjectsLayout>
    )
}

export default ProjectManagement;