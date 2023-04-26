import ProjectsLayout from "../layouts/ProjectsLayout";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import {
    Button,
    Input,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";

const CreateLeadPage = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Number, setNumber] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        const lead = {
            FirstName,
            LastName,
            Number,
            Status: "Exploring"
        };
    
        const response = await fetch("http://localhost:5000/leads", {
          method: "POST",
          body: JSON.stringify(lead),
          headers: {
            "Content-Type": "application/json",
          },
        });
        window.location.href = "http://localhost:3000/leads";

        const json = await response.json();

        if (!response.ok) {
          console.log(json.error);
        }
        if (response.ok) {
          setFirstName("");
          setLastName("");
          setNumber("");
          console.log("new lead created");
          window.location.href = "http://localhost:3000/leads";
        }

    }
    
    return(
        <ProjectsLayout>
            <h1>Create Lead</h1>
            <form className="create" onSubmit={handleSubmit}>
            
            <InputLabel>First Name</InputLabel>
            <TextField
            variant={"outlined"}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={FirstName}
            />

            <InputLabel>Last Name</InputLabel>
            <TextField
            variant={"outlined"}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={LastName}
            />

            <InputLabel>Number</InputLabel>
            <TextField
            variant={"outlined"}
            type="text"
            onChange={(e) => setNumber(e.target.value)}
            value={Number}
            />

            <Button variant={"contained"} onClick={handleSubmit}>Create Lead</Button>
            </form>
        </ProjectsLayout>
    )
}

export default CreateLeadPage;