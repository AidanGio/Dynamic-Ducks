import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { apiInstance } from "../utils/apiInstance";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState("client");
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState({ error: false });

  const navigate = useNavigate();

  console.log(role);

  const submit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      role,
      email,
      phoneNumber,
      password,
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
      <form onSubmit={(e) => submit(e)}>
        <input
          placeholder="First Name"
          type={"text"}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="Last Name"
          type={"text"}
          onChange={(e) => setLastName(e.target.value)}
        />
        <select
          placeholder="Role"
          onChange={(e) => {
            setRole(e.target.value);
          }}
          value={role}
        >
          <option value={"client"}>Client</option>
          <option value={"operationsManager"}>Operations Manager</option>
          <option value={"salesRepresentative"}> Sales Representative</option>
          <option value={"installationWorker"}>Installation Worker</option>
        </select>
        <input
          placeholder="Email"
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Phone Number"
          type={"tel"}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          placeholder="Password"
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          type={"password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </MainLayout>
  );
};

export default SignUpPage;
