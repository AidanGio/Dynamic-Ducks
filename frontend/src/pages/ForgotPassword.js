import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { apiInstance } from "../utils/apiInstance";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@mui/material";

import "./styles.scss";

const ForgotPassword = ({ setAuth, auth }) => {
  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    await apiInstance
      .post("/users/login", {
        // email,
        // password,
      })
      .then((res) => {
        if (res.data.role) {
          sessionStorage.setItem("user", JSON.stringify(res.data));
          setAuth(JSON.parse(sessionStorage.getItem("user")));
          console.log(JSON.parse(sessionStorage.getItem("user")));
          navigate("/");
        }
      })
      .catch((e) => {
        setError(e);
        console.log(e);
      });
  };

  return (
    <MainLayout>
       <h1>Forgot Password</h1>
        <Input
            placeholder="Email Address"
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
        <Button
            type="submit"
            variant={"contained"}
          >
            Submit
          </Button>
    </MainLayout>
  );
};

export default ForgotPassword;