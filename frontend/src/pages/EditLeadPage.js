import React, { useEffect, useState } from "react";
import { apiInstance } from "../utils/apiInstance";
import { useLocation } from 'react-router-dom';
import SalesLayout from "../layouts/SalesLayout";

const EditLeadPage = () => {
    // if lead exists, update lead
    // if not, create new lead

    const location = useLocation();
    const lead = location.state;
    const leadExists = lead !== undefined;

    function submitButton() {

    }

    return (
        // Hardcoded for demo purposes
        <SalesLayout>
            <h1>{leadExists ? "Edit Lead" : "Create Lead"}</h1>

            <div>
                First Name
                <input type="text" placeholder="" />
            </div>

            <div>
                Last Name
                <input type="text" placeholder="" />
            </div>

            <div>
                Phone Number
                <input type="text" placeholder="" />
                ext
                <input type="text" placeholder="" />
            </div>

            <div>
                Email
                <input type="text" placeholder="" />
            </div>

            <div>
                Status
                <input type="checkbox" /> Following Up
                <input type="checkbox" /> Success
            </div>

            <button>Update Lead</button>

        </SalesLayout>
    );

}

export default EditLeadPage;