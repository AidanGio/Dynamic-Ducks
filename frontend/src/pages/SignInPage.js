import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { apiInstance } from "../utils/apiInstance";
import { Link } from "react-router-dom";
import logo from "../assets/images/solar.png";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@mui/material";

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
    <MainLayout>
      {/* <div
          style={{
            width: "50%",
            height: "100%",
            background: "linear-gradient(to bottom right, #f4afab, #f4eea9)",
          }}
        >
          <image src={logo} height={"100%"} />
        </div> */}
      <div
        className="signin"
        // style={{ width: "50%", height: "100%", paddingTop: "50vh" }}
      >
        <h1>SIGN IN</h1>
        <form
          // style={{ paddingLeft: "17.5vw" }}
          onSubmit={(e) => submit(e)}
        >
          <Input
            placeholder="Email Address"
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link
            to={"./ForgotPassword.js"}
            style={{
              textDecoration: "none",
              textAlign: "right",
              paddingRight: "10px",
              color: "black",
            }}
          >
            Forgot Password?
          </Link>
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
          <Button
            type="submit"
            variant={"contained"}
            // style={{
            //   backgroundImage: "linear-gradient(to right, #fdbf61, #f4eea9)",
            //   color: "black",
            //   border: "1px solid black",
            // }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default SignInPage;
