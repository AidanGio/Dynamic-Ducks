import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { apiInstance } from "../utils/apiInstance";
import { useNavigate } from "react-router-dom";

const SignInPage = ({ setAuth, auth }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  // const [role, setRole] = useState("Client Portal");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    await apiInstance
      .post("/users/login", {
        email,
        password,
      })
      .then((res) => {
        sessionStorage.setItem("user", JSON.stringify(res.data));
        setAuth(JSON.parse(sessionStorage.getItem("user")));

        navigate("/");
      })
      .catch((e) => {
        setError(e);
        console.log(e);
      });

    // switch (role) {
    //   case "Client Portal":
    //     window.location.href = "/clientportal";
    //     break;
    //   case "Sales Portal":
    //     window.location.href = "/salesportal";
    //     break;
    //   case "Grounds Crew Portal":
    //     window.location.href = "/groundscrewportal";
    //     break;
    //   case "Operations Manager Portal":
    //     window.location.href = "/operationsmanagerportal";
    //     break;
    //   case "Messages":
    //     window.location.href = "/messages";
    //     break;
    //   default:
    //     console.log("Invalid role selected.");
    // }
  };

  return (
    <MainLayout auth={auth}>
      <h1>SIGN IN</h1>
      <form onSubmit={(e) => submit(e)}>
        <input
          placeholder="Email"
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <select
          className="role-dropdown"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Client Portal">Client Portal</option>
          <option value="Sales Portal">Sales Portal</option>
          <option value="Grounds Crew Portal">Grounds Crew Portal</option>
          <option value="Operations Manager Portal">
            Operations Manager Portal
          </option>
          <option value="Messages">Messages</option>
        </select> */}
        <button>Submit</button>
      </form>
    </MainLayout>
  );
};

export default SignInPage;
