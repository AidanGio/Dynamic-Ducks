import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { Link, useNavigate } from "react-router-dom";
import SalesLayout from "../layouts/SalesLayout";
import { apiInstance } from "../utils/apiInstance";
import "./styles.scss";


function InvitePopup() {
  return (
    <Popup trigger={<button> Invite </button>} position="right center">
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

function EditButton (lead){
  const navigate = useNavigate();

  const toEditLeadPage = () => {
    navigate("/leads/edit", {state: lead});
  }

  return (
    <div>
      <button onClick={() => {toEditLeadPage()}}>Edit</button>
    </div>
  );
}

function LeadTable({ leads }) {

  const deleteLead = () => {
    apiInstance.delete()
  }

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
        {leads.map((lead) => {
          return (
            <tr
              style={{
                boxShadow: "0px 0px 0px 1px rgb(0, 0, 0)",
              }}
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
              <td style={{ color: "red" }}>Delete</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const LeadManagement = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = () => {
    apiInstance.get("/leads").then((res) => setLeads(res.data));
  };

  return (
    <SalesLayout>
      <h1>Lead Management</h1>
      <LeadTable leads={leads} />
    </SalesLayout>
  );
};

export default LeadManagement;
