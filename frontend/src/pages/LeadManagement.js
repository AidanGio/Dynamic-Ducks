import React, { useEffect, useState } from "react";
import apiInstance from "../utils/apiInstance";
import Popup from "reactjs-popup";
import SalesLayout from "../layouts/SalesLayout";
import "./styles.scss";

function CreateLeadButton() {
  return <button>Create New Lead</button>;
}

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

function LeadTable({ leads }) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Status</th>
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
              <td>Edit</td>
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
