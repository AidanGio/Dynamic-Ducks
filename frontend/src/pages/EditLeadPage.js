import React, { useEffect, useState } from "react";
import { apiInstance } from "../utils/apiInstance";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ProjectsLayout from "../layouts/ProjectsLayout";


const EditLeadPage = () => {
    const { leadId } = useParams();
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Number, setNumber] = useState("");
    const [error, setError] = useState("");
    const [updatedLead, setUpdatedLead] = useState({});

    const handleFieldChange = (e) => {
        setUpdatedLead({ ...updatedLead, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/leads/' + leadId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedLead)
        });
        window.location.href = "http://localhost:3000/leads";
        const json = await response.json();
        console.log(json);
        // Handle success or error
    };

    return (
        <ProjectsLayout>
            <h1>Update Lead</h1>
            <form onSubmit={handleSubmit}>

                <label>First Name</label>
                <input
                    type="text"
                    name="FirstName"
                    onChange={handleFieldChange}
                    value={updatedLead.FirstName || ''}
                />

                <label>Last Name</label>
                <input
                    type="text"
                    name="LastName"
                    onChange={handleFieldChange}
                    value={updatedLead.LastName || ''}
                />

                <label>Number</label>
                <input
                    type="text"
                    name="Number"
                    onChange={handleFieldChange}
                    value={updatedLead.Number || ''}
                />

                <label>Status</label>
                <select name="Status" value={updatedLead.Status || ''} onChange={handleFieldChange}>
                    <option value=""></option>
                    <option value="Exploring">Exploring</option>
                    <option value="Success">Success</option>
                    <option value="Failed">Failed</option>
                </select>

                <button>Update Project</button>

            </form>
        </ProjectsLayout>
    )

}

export default EditLeadPage;