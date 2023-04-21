import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import ProjectsLayout from "../layouts/ProjectsLayout";


const ProjectInfo = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState([])
    const [updatedProject, setUpdatedProject] = useState({});
    const [users, setUsers] = useState([]);
    const [selectedManager, setSelectedManager] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('http://localhost:5000/projects/' + projectId)
            const json = await response.json()
            console.log(json)
            if (response.ok) {
                setProject(json[0])
            }
        }
        fetchProjects()

        const fetchAndSetUsers = async () => {
            const users = await fetchUsers();
            setUsers(users);
        };
        fetchAndSetUsers();
    }, [projectId])

    const handleAssignedManagersChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setUpdatedProject({ ...updatedProject, AssignedManagers: selectedOptions });
    };

    const handleAssignedWorkersChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setUpdatedProject({ ...updatedProject, AssignedWorkers: selectedOptions });
    };

    const handleAssignedCustomersChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setUpdatedProject({ ...updatedProject, AssignedCustomers: selectedOptions });
    };

    const handleFieldChange = (e) => {
        setUpdatedProject({ ...updatedProject, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/projects/' + projectId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProject)
        });
        window.location.href = window.location.href;
        const json = await response.json();
        console.log(json);
        // Handle success or error
    };

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:5000/users');
        const data = await response.json();
        return data;
      }


    return (
        <ProjectsLayout>
            <h1>Update: {project.name}</h1>
            <form onSubmit={handleSubmit}>
            <label>Project Name</label>
            <input
                type="text"
                name="name"
                onChange={handleFieldChange}
                value={updatedProject.name || ''}
            />

            <label>Due Date</label>
            <input
                type="date"
                name="endDate"
                onChange={handleFieldChange}
                value={updatedProject.endDate || ''}
            />

            <label>End Date</label>
            <input
                type="date"
                name="endDate"
                onChange={handleFieldChange}
                value={updatedProject.endDate || ''}
            />

            <label>Progress</label>
            <select name="status" value={updatedProject.progress || ''} onChange={handleFieldChange}>
                    <option value=""></option>
                    <option value="1">Negotiating Contract</option>
                    <option value="2">Site Inspection</option>
                    <option value="3">Installation Planning</option>
                    <option value="4">Obtaining permits</option>
                    <option value="5">Installation</option>
                    <option value="6">Inspection</option>
                    <option value="7">Completed</option>
            </select>

            <label>Status</label>
            <input
                type="number"
                name="status"
                min="0"
                max="100"
                onChange={handleFieldChange}
                value={updatedProject.status || ''}
            />

            <label>Paid?</label>
            <input
                type="checkbox"
                name="billingStatus"
                onChange={handleFieldChange}
                value={updatedProject.billingStatus || ''}
            />

            <label>Permit?</label>
            <input
                type="checkbox"
                name="permitStatus"
                onChange={handleFieldChange}
                value={updatedProject.permitStatus || ''}
            />

            <label>Labor Hours</label>
            <input
                type="number"
                name="laborHours"
                min="0"
                onChange={handleFieldChange}
                value={updatedProject.laborHours || ''}
            />

            <label>Material Details</label>
            <textarea
                name="materialDetails"
                onChange={handleFieldChange}
                value={updatedProject.materialDetails || ''}
            />

            <label>Solar System Info</label>
            <textarea
                name="solarSystemInfo"
                onChange={handleFieldChange}
                value={updatedProject.solarSystemInfo || ''}
            />

            <label>Inspection Info</label>
            <textarea
                name="inspectionInfo"
                onChange={handleFieldChange}
                value={updatedProject.inspectionInfo || ''}
            />

            <label>Close Out Info</label>
            <textarea
                name="closeOutInfo"
                onChange={handleFieldChange}
                value={updatedProject.closeOutInfo || ''}
            />

            <label>Assigned Manager(s)</label>
            <select 
                name="AssignedManagers"
                value={updatedProject.AssignedManagers || []}
                onChange={handleAssignedManagersChange}
                multiple>
                {users.map((user) => (
                    <option key={user._id} value={user._id}>
                        {user.firstName} {user.lastName}
                    </option>
                ))}
            </select>

            <label>Assigned Workers(s)</label>
            <select 
                name="AssignedWorkers"
                value={updatedProject.AssignedWorkers || []}
                onChange={handleAssignedWorkersChange}
                multiple>
                {users.map((user) => (
                    <option key={user._id} value={user._id}>
                        {user.firstName} {user.lastName}
                    </option>
                ))}
            </select>

            <label>Assigned Customer(s)</label>
            <select 
                name="AssignedCustomers"
                value={updatedProject.AssignedCustomers || []}
                onChange={handleAssignedCustomersChange}
                multiple>
                {users.map((user) => (
                    <option key={user._id} value={user._id}>
                        {user.firstName} {user.lastName}
                    </option>
                ))}
            </select>

            <button>Update Project</button>

            </form>
        </ProjectsLayout>
    )
}

export default ProjectInfo;