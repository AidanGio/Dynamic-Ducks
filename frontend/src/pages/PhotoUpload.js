import React, { useEffect, useState } from "react";
import ProjectsLayout from "../layouts/ProjectsLayout";
import { apiInstance } from "../utils/apiInstance";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";

import "./styles.scss";
import {
  Button,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";


const PhotoUploadPage = () => {
  const [file] = useState();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    navigate("/clientportal");

    // Hard Coded File Upload for testing purposes
    const response = await fetch("http://localhost:5000/users/upload/64541c8d25f200d32fc124c1", {
      method: "POST",
      body: file,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // window.location.href = "http://localhost:3000/clientportal";
}

  return (
    <ProjectsLayout>
      <h2>File Upload</h2>
        <form onSubmit={handleSubmit}>
        <div>Select a file: 
        <input name="file" type="file" id="file"/>
        </div>
        <input type="submit" value="Upload"/>
      </form>
    </ProjectsLayout>
  );
};

export default PhotoUploadPage;
