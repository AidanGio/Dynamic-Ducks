import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";

const projectData = {};

var dataDB = JSON.stringify({
  collection: "projects",
  database: "solar",
  dataSource: "Cluster0",
});

var config = {};

const TaskManagement = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://us-east-1.aws.data.mongodb-api.com/app/data-hwgsk/endpoint/projects",
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key":
              "KKbv2ryF8EdeNGf8Kr4DX9jzZQBvi40TuS4E9YlAO3tJWYdCgKmYe5yvn97pgOKd",
          },
          data: dataDB,
        }
      )
      .then((res) => {
        setData(res);
      });
  }, []);

  console.log(data);

  return (
    <MainLayout>
      <h2>My Projects</h2>
    </MainLayout>
  );
};

export default TaskManagement;
