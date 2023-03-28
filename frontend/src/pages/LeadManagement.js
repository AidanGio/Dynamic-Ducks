import React, { useEffect, useState } from "react";
import apiInstance from "../utils/apiInstance";
import Popup from 'reactjs-popup';
import SalesLayout from "../layouts/SalesLayout";
import "./styles.scss";

function CreateLeadButton() {

}

const LeadManagement = () => {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        fetchLeads();
      }, []);

    const fetchLeads = () => {
        apiInstance.get("/leads")
        .then((res) => {console.log(res);})
        .catch((err) => {console.log(err);});
    };

    return (
    <SalesLayout>
        <h1>Lead Management</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            
              {leads.map((lead)=>{
                return(
                  <tr style={{
                    boxShadow: "0px 0px 0px 1px rgb(0, 0, 0)",
                  }}>
                    <td>{lead["FirstName"]}</td>
                    <td>{lead["LastName"]}</td>
                    <td>{lead["Number"]}</td>
                    <td>{lead["Success"]}</td>
                    <td>Edit</td>
                    <td>
                    <Popup trigger=
                        {<button> Invite </button>}
                        position="right center">
                        <div>Invite Operations Manager to Create Project</div>
                    </Popup>
                    </td>
                  </tr>
                );
              })}
            
          </tbody>
        </table>
    </SalesLayout>
    );
};

export default LeadManagement;