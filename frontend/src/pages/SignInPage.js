import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const SignInPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const submit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };
  return (
    <MainLayout>
      <h1>SIGN IN</h1>
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
        <button>Submit</button>
      </form>
    </MainLayout>
  );
};

export default SignInPage;
