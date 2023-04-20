import React, { useEffect, useState } from "react";
import ProjectsLayout from "../layouts/ProjectsLayout";
import { apiInstance } from "../utils/apiInstance";

import "./styles.scss";

const CreateProjectPage = () => {
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [managers, setManagers] = useState([]);
    const [selectedManagers, setSelectedManagers] = useState([]); 
    
    const [customers, setCustomers] = useState([]);
    const [selectedCustomers, setSelectedCustomers] = useState([])

    const [workers, setWorkers] = useState([]);
    const [selectedWorkers, setSelectedWorkers] = useState([])

    // List of users
    const [users, setUsers] = useState([])

    const [error, setError] = useState(null)

    const fetchManagers = async () => {
        const response = await fetch('http://localhost:5000/users');
        const data = await response.json();
        return data;
      }

    const fetchWorkers = async () => {
        const response = await fetch('http://localhost:5000/users');
        const data = await response.json();
        return data;
    }

    const fetchCustomers = async () => {
        const response = await fetch('http://localhost:5000/users');
        const data = await response.json();
        return data;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const project = {
            name, 
            startDate, 
            endDate, 
            AssignedManagers: selectedManagers
        }

        const response = await fetch('http://localhost:5000/projects', {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setName('')
            setStartDate('')
            setEndDate('')
            setSelectedManagers([])
            setError(null)
            console.log('new project created')
        }
    } 

    useEffect(() => {
        const getManagers = async () => {
          const data = await fetchManagers();
          setManagers(data);
        }
        getManagers();
      }, []);
      
    useEffect(() => {
        const getWorkers = async () => {
            const data = await fetchWorkers();
            setWorkers(data);
        }
        getWorkers();
    }, []);

    useEffect(() => {
        const getCustomers = async () => {
            const data = await fetchCustomers();
            setCustomers(data);
        }
        getCustomers();
    }, []);

    return(
        <ProjectsLayout>
            <form className="create" onSubmit={handleSubmit}>
                <h3>Create new project</h3>

                <label>Project Name</label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <label>Start Date</label>
                <input
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                />

                <label>End Date</label>
                <input
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                    value={endDate}
                />

                <label>Assigned Manager(s)</label>
                <select multiple onChange={(e) => setSelectedManagers(Array.from(e.target.selectedOptions, option => option.value))}>
                    {managers.map(manager => (
                        <option key={manager._id} value={manager._id}>{manager.firstName} {manager.lastName}</option>
                    ))}
                </select>

                <label>Assigned Worker(s)</label>
                <select multiple onChange={(e) => setSelectedWorkers(Array.from(e.target.selectedOptions, option => option.value))}>
                    {workers.map(worker => (
                        <option key={worker._id} value={worker._id}>{worker.firstName} {worker.lastName}</option>
                    ))}
                </select>

                <label>Assigned Customer(s)</label>
                <select multiple onChange={(e) => setSelectedManagers(Array.from(e.target.selectedOptions, option => option.value))}>
                    {customers.map(customer => (
                        <option key={customer._id} value={customer._id}>{customer.firstName} {customer.lastName}</option>
                    ))}
                </select>

                <button>Create Project</button>
                {error && <div className="error">{error}</div>}
            </form>
        </ProjectsLayout>
    )
}

export default CreateProjectPage;