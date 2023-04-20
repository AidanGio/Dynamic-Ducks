import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ProjectInfo = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null)

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('http://localhost:5000/projects/${projectId}')
            const json = await response.json()
            console.log(json)
            if (response.ok) {
                setProject(json)
            }
        }
    
        fetchProjects()
    }, [projectId])
    
    return (
        <h1>Update Project for Project </h1>
    )
}

export default ProjectInfo;