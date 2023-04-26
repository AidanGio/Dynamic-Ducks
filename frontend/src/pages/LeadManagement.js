import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { Link, useNavigate } from "react-router-dom";
import { apiInstance } from "../utils/apiInstance";
import "./styles.scss";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


function InvitePopup() {
  return (
    <Popup
      trigger={<Button variant={"contained"}> Invite </Button>}
      position="right center"
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "15px",
          boxShadow: "2px 2px 2px grey",
          borderRadius: "15px",
        }}
      >
        <div>Invite Operations Manager to Create Project</div>
      </div>
    </Popup>
  );
}

function EditButton(value, { lead }) {
  const navigate = useNavigate();

  const toEditLeadPage = () => { };

  return (
    <div>
      <Button
        onClick={() => {
          navigate("/leads/edit", { state: lead });
        }}
      >
        Edit
      </Button>
    </div>
  );
}

function LeadTable({ leads }) {

  const handleClick = async (leadId) => {
    const response = await fetch('http://localhost:5000/leads/' + leadId, {
      method: 'DELETE'
    })
    window.location.reload()
    const json = await response.json()
  }

  const deleteLead = () => {
    apiInstance.delete();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Status</th>
          <th>Actions</th>
          <th><EditButton>Create New Lead</EditButton></th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead, i) => {
          return (
            <tr
              style={{
                boxShadow: "0px 0px 0px 1px rgb(0, 0, 0)",
              }}
              key={i}
            >
              <td>{lead["FirstName"]}</td>
              <td>{lead["LastName"]}</td>
              <td>{lead["Number"]}</td>
              <td>{lead["Status"]}</td>
              <td>
                <div>
                  <Link to={`/leads/${lead._id}/edit`}><strong>Update</strong></Link>
                </div>
              </td>
              <td>
                <InvitePopup></InvitePopup>
              </td>
              <td>
                <Button
                  color={"warning"}
                  onClick={() => handleClick(lead._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const LeadManagement = ({ auth }) => {
  const [leads, setLeads] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = () => {
    apiInstance.get("/leads").then((res) => setLeads(res.data));
  };

  return (
    <MainLayout auth={auth}>
      <h1>Lead Management</h1>
      <Button
        variant={"contained"}
        onClick={() => navigate("/leads/create")}
      >
        <AddIcon /> Create Lead
      </Button>
      <LeadTable leads={leads} />
    </MainLayout>
  );
};

export default LeadManagement;
