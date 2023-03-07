import React from "react";
import Header from "../components/Header";

const OperationsManagerLayout = (props) => {
  return (
    <>
      <Header title={"Operations Manager"} />
      <main>{props.children}</main>
    </>
  );
};

export default OperationsManagerLayout;
