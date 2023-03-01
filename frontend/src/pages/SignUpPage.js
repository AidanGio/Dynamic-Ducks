import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const SignUpPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const submit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(confirmPassword);
  };
  return (
    <MainLayout>
      {" "}
      <h1>SIGN UP</h1>
      <form onSubmit={(e) => submit(e)}>
        <input
          placeholder="Username"
          type={"text"}
          onChange={(e) => setUsername(e.target.value)}
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
