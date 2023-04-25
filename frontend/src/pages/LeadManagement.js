import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { Link, useNavigate } from "react-router-dom";
import { apiInstance } from "../utils/apiInstance";
import "./styles.scss";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@mui/material";

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

function EditButton(lead) {
  const navigate = useNavigate();

  const toEditLeadPage = () => {};

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
              <td>{lead["Success"] ? "Success" : "Following Up"}</td>
              <td>
                <EditButton></EditButton>
              </td>
              <td>
                <InvitePopup></InvitePopup>
              </td>
              <td>
                <Button color={"warning"}>Delete</Button>
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

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = () => {
    apiInstance.get("/leads").then((res) => setLeads(res.data));
  };

  return (
    <MainLayout auth={auth}>
      <h1>Lead Management</h1>
      <LeadTable leads={leads} />
    </MainLayout>
  );
};

export default LeadManagement;
