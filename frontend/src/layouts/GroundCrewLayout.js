import React from "react";
import Header from "../components/Header";

const GroundCrewLayout = (props) => {
  return (
    <>
      <Header title={"Ground Crew"} />
      <main>{props.children}</main>
    </>
  );
};

export default GroundCrewLayout;
