import React from "react";
import Header from "../components/Header";

const MessagesLayout = (props) => {
  return (
    <>
      <Header title={"Messages"} />
      <div className="flex h-screen">
        <div className="bg-blue-100 w-1/3">
        </div>
        <div className="bg-blue-300 w-2/3">
          <div></div>
          <div></div>
      <main>
        {props.children}
      </main>
      </div>
      </div>
    </>
  );
};

export default MessagesLayout;
