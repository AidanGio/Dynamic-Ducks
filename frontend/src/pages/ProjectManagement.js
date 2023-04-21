import React, { useEffect, useState } from "react";
import ProjectsLayout from "../layouts/ProjectsLayout";
import { apiInstance } from "../utils/apiInstance";

import "./styles.scss";

// components
import ProjectDetails from '../components/ProjectsDetails'

const ProjectManagement = (auth) => {
    const [projects, setProjects] = useState([])

    //console.log(auth.auth._id)
    useEffect(() => {
        const fetchProjects = async () => {
            //const response = await fetch('http://localhost:5000/projects')
            const response = await fetch('http://localhost:5000/projects/user/' + auth.auth._id)
            const json = await response.json()
            if (response.ok) {
                setProjects(json)
            }
        }
    
        fetchProjects()
    }, [])

    return (
        <ProjectsLayout>
            <br></br>
            <h1>Your Projects</h1>
            <div>
            {projects && projects.map((project) => (
                    <ProjectDetails key={project._id} project={project} />
                ))}
            </div>
        </ProjectsLayout>
    )
}

export default ProjectManagement;