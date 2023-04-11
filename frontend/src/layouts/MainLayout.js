import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({ children, auth }) => {
  return (
    <>
      <Header auth={auth} title={"Dynamic Ducks"} />
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
