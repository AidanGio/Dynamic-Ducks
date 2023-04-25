import React, { useEffect, useState } from "react";
import { apiInstance } from "../utils/apiInstance";
import { useLocation } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout";

export let leadExists = false;

const EditLeadPage = (props) => {
    // if lead exists, update lead
    // if not, create new lead
    const [lead, setLead] = useState([]);
    const leadId = useLocation().state._id;
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

    const handleSubmit = (e) => {
        e.preventDefault();


    }

    return (
        <MainLayout>
            <form onSubmit={handleSubmit}>
                <h1>{leadExists ? "Edit Lead: " + lead.firstName + lead.lastName : "Create Lead"}</h1>

                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        placeholder=""
                        value={lead.firstName}
                    />
                </div>

                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        placeholder=""
                        value={lead.lastName}
                    />
                </div>

                <div>
                    <label>Phone Number</label>
                    <input
                        type="text"
                        placeholder=""
                    />
                </div>

                <div>
                    Status
                    <input type="checkbox" /> Following Up
                    <input type="checkbox" /> Success
                </div>

                <button>{leadExists ? "Update Lead" : "Create Lead"}</button>

            </form>
        </MainLayout>
    );

}

export default EditLeadPage;