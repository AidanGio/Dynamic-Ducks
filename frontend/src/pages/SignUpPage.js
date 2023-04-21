import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { apiInstance } from "../utils/apiInstance";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import "./styles.scss";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState("client");
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const [question, setQuestion] = useState("Q1");

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [securityQuestion, setSecurityQuestion] = useState();
  const [securityAnswer, setSecurityAnswer] = useState();
  const [error, setError] = useState({ error: false });

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      role,
      email,
      phoneNumber,
      password,
      securityQuestion,
      securityAnswer,
    };

    try {
      if (password == confirmPassword) {
        const { data } = await apiInstance.post("/users/register", {
          ...newUser,
        });
        navigate("/login");
      } else {
        throw { message: "Password mismatch" };
      }
    } catch (error) {
      setError({ error: true, message: error.message });
    }
  };
  return (
    <MainLayout>
      <h1>SIGN UP</h1>
      <form className="signup-form" onSubmit={(e) => submit(e)}>
        <Input
          placeholder="First Name"
          type={"text"}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          placeholder="Last Name"
          type={"text"}
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="select1-label">Role</InputLabel>
          <Select
            labelId="select1-label"
            id="select1"
            placeholder="Role"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            value={role}
          >
            <MenuItem value={"client"}>Client</MenuItem>
            <MenuItem value={"operationsManager"}>Operations Manager</MenuItem>
            <MenuItem value={"sales"}>Sales Representative</MenuItem>
            <MenuItem value={"installationWorker"}>
              Installation Worker
            </MenuItem>
          </Select>
        </FormControl>

        <Input
          placeholder="Email"
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Phone Number"
          type={"tel"}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          placeholder="Password"
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirm Password"
          type={"password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="securityQ-label">Security Question</InputLabel>
          <Select
            labelId="securityQ-label"
            id="securityQ"
            placeholder="SecurityQuestion"
            onChange={(e) => {
              setSecurityQuestion(e.target.value);
            }}
            value={question}
          >
            <MenuItem value={"Q1"}>What was your childhood nickname?</MenuItem>
            <MenuItem value={"Q2"}>
              What street did you live on in third grade?
            </MenuItem>
            <MenuItem value={"Q3"}>
              What is your oldest sibling's middle name?
            </MenuItem>
            <MenuItem value={"Q4"}>
              What school did you attend for sixth grade?
            </MenuItem>
            <MenuItem value={"Q5"}>
              What was the last name of your third grade teacher?
            </MenuItem>
            <MenuItem value={"Q6"}>
              In what city or town was your first job?
            </MenuItem>
            a
            <MenuItem value={"Q7"}>
              What is your maternal grandmother's maiden name?
            </MenuItem>
          </Select>
        </FormControl>
        <Input
          placeholder="Answer"
          type={"text"}
          onChange={(e) => setSecurityAnswer(e.target.value)}
        />
        <Button type="submit" variant={"contained"}>
          Submit
        </Button>
      </form>
    </MainLayout>
  );
};

export default SignUpPage;
