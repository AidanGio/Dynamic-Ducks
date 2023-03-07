import React from "react";
import Header from "../components/Header";

const SalesLayout = (props) => {
  return (
    <>
      <Header title={"Sales"} />
      <main>{props.children}</main>
    </>
  );
};

export default SalesLayout;
