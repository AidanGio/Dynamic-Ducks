import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
