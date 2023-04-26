import React, { useEffect, useState } from "react";
import ProjectsLayout from "../layouts/ProjectsLayout";
import { apiInstance } from "../utils/apiInstance";

import "./styles.scss";
import {
  Button,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const CreateProjectPage = () => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [managers, setManagers] = useState([]);
  const [selectedManagers, setSelectedManagers] = useState([]);

  const [customers, setCustomers] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  const [workers, setWorkers] = useState([]);
  const [selectedWorkers, setSelectedWorkers] = useState([]);

  // List of users
  const [users, setUsers] = useState([]);

  const [error, setError] = useState(null);

  const fetchManagers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const data = await response.json();
    return data;
  };

  const fetchWorkers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const data = await response.json();
    return data;
  };

  const fetchCustomers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const data = await response.json();
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const project = {
      name,
      startDate,
      endDate,
      Progress: "Initializing",
      Status: 1,
      billingStatus: false,
      permitStatus: "permit",
      laborHours: 0,
      materialDetails: "materialDetails",
      solarSystemInfo: "solarSystemInfo",
      inspectionInfo: "inspectionInfo",
      closeOutInfo: "closeOutInfo",
      AssignedManagers: selectedManagers,
      AssignedCustomers: selectedCustomers,
      AssignedWorkers: selectedWorkers,
    };

    const response = await fetch("http://localhost:5000/projects", {
      method: "POST",
      body: JSON.stringify(project),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setStartDate("");
      setEndDate("");
      setSelectedManagers([]);
      setSelectedWorkers([]);
      setSelectedCustomers([]);
      setError(null);
      console.log("new project created");
    }
  };

  useEffect(() => {
    const getManagers = async () => {
      let data = await fetchManagers();
      console.log(data);
      if (Array.isArray(data)) {
        data = data.filter((o) => o.role == "operationsManager");
      }
      setManagers(data);
    };
    getManagers();
  }, []);

  useEffect(() => {
    const getWorkers = async () => {
      let data = await fetchWorkers();
      if (Array.isArray(data)) {
        data = data.filter((o) => o.role == "installationWorker");
      }
      setWorkers(data);
    };
    getWorkers();
  }, []);

  useEffect(() => {
    const getCustomers = async () => {
      let data = await fetchCustomers();
      if (Array.isArray(data)) {
        data = data.filter((o) => o.role == "client");
      }
      setCustomers(data);
    };
    getCustomers();
  }, []);

  return (
    <ProjectsLayout>
      <form className="create" onSubmit={handleSubmit}>
        <h2>Create New Project</h2>
        <br />

        <InputLabel>Project Name</InputLabel>
        <TextField
          variant={"outlined"}
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <InputLabel>Start Date</InputLabel>
        <Input
          type="date"
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
        />

        <InputLabel>End Date</InputLabel>
        <Input
          type="date"
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
        />

        <InputLabel>Assigned Manager(s)</InputLabel>
        <Select
          multiple
          onChange={(e) => setSelectedManagers(e.target.value)}
          value={selectedManagers}
          required
        >
          {managers.map((manager) => (
            <MenuItem key={manager._id} value={manager._id}>
              {manager.firstName} {manager.lastName}
            </MenuItem>
          ))}
        </Select>

        <InputLabel>Assigned Worker(s)</InputLabel>
        <Select
          multiple
          onChange={(e) => {
            setSelectedWorkers(e.target.value);
          }}
          required
          value={selectedWorkers}
        >
          {workers.map((worker) => (
            <MenuItem key={worker._id} value={worker._id}>
              {worker.firstName} {worker.lastName}
            </MenuItem>
          ))}
        </Select>

        <InputLabel>Assigned Customer(s)</InputLabel>
        <Select
          multiple
          onChange={(e) => setSelectedCustomers(e.target.value)}
          value={selectedCustomers}
          required
        >
          {customers.map((customer) => (
            <MenuItem key={customer._id} value={customer._id}>
              {customer.firstName} {customer.lastName}
            </MenuItem>
          ))}
        </Select>

        <Button variant={"contained"}>Create Project</Button>
        {error && <div className="error">{error}</div>}
      </form>
    </ProjectsLayout>
  );
};

export default CreateProjectPage;
