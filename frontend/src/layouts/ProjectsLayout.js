import React from "react";
import Header from "../components/Header";

const ProjectsLayout = (props) => {
    return (
        <>
        <Header title={"Projects"} />
        <main>{props.children}</main>
        </>
    )
};

export default ProjectsLayout;
