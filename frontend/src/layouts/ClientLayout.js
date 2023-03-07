import React from "react";
import Header from "../components/Header";

const ClientLayout = (props) => {
  return (
    <>
      <Header title={"Client"} />
      <main>{props.children}</main>
    </>
  );
};

export default ClientLayout;
