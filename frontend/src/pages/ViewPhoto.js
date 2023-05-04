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


const PhotoUploadPage = () => {

  return (
    <ProjectsLayout>
      <h2>Your Files</h2>
      <img src="https://media.angi.com/s3fs-public/asphalt-shingles-home-roofing.jpg?impolicy=leadImage" alt="roof"></img>
    </ProjectsLayout>
  );
};

export default PhotoUploadPage;
