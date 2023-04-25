import React, { useEffect, useState } from "react";
import { apiInstance } from "../utils/apiInstance";
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout";

export let leadExists = false;

const EditLeadPage = (props) => {
    // if lead exists, update lead
    // if not, create new lead
    const leadId = useParams();
    const [lead, setLead] = useState([]);
    const [updatedLead, setUpdatedLead] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLeads = async () => {
            const response = await fetch('http://localhost:5000/leads/id/' + leadId)
            const json = await response.json()
            console.log(json)
            if (response.ok) {
                setLead(json[0])
            }
        };
        fetchLeads()
    }, [leadId])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/leads/' + leadId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedLead)
        });
        window.location.href = window.location.href;
        const json = await response.json();
        console.log(json);
        // Handle success or error
        navigate("/leads");
    }

    const handleFieldChange = (e) => {
        setUpdatedLead({ ...updatedLead, [e.target.name]: e.target.value });
    };

    return (
        <MainLayout>
            <form onSubmit={handleSubmit}>
                <h1>{leadExists ? "Edit Lead: " + lead.firstName + lead.lastName : "Create Lead"}</h1>

                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder={lead.firstName}
                        onChange={handleFieldChange}
                        value={updatedLead.firstName}
                    />
                </div>

                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder=""
                        onChange={handleFieldChange}
                        value={updatedLead.lastName}
                    />
                </div>

                <div>
                    <label>Phone Number</label>
                    <input
                        type="text"
                        name="number"
                        placeholder=""
                        onChange={handleFieldChange}
                        value={updatedLead.number}
                    />
                </div>

                <div>
                    <label>Success</label>
                    <input
                        type="checkbox"
                        name="success"
                        value={updatedLead.success}
                    />
                </div>

                <button>Submit</button>

            </form>
        </MainLayout>
    );

}

export default EditLeadPage;