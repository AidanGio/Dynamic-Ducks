import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ClientPortal = ({ auth }) => {
  let navigate = useNavigate();
  return <MainLayout auth={auth}>ClientPortal
    <Button variant={"contained"} onClick={() => navigate(`/users/upload/${auth._id}`)}>
          Photo Upload
  </Button>
  <Button variant={"contained"} onClick={() => navigate(`/users/view/${auth._id}`)}>
          All Photos
  </Button>
  </MainLayout>;
};

export default ClientPortal;
