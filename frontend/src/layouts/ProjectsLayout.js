import React from "react";
import Header from "../components/Header";

const ProjectsLayout = (props, auth) => {
    return (
        <>
        <Header auth={auth} title={"Projects"} />
        <main>{props.children}</main>
        </>
    )
};

export default ProjectsLayout;
