import React, { useEffect, useState } from "react";
import { apiInstance } from "../../utils/apiInstance";
import TaskCard from "../TaskCard";
import "./styles.scss";

const Tasks = ({ data }) => {
  return (
    <div className="tasks">
      {data == null || data.length == 0 ? (
        <>No Pending Tasks</>
      ) : (
        <>
          <h2>Tasks</h2>
          {Array.isArray(data) &&
            data.map((o, i) => {
              return (
                <TaskCard
                  key={i}
                  name={o.task ? o.task : "N/A"}
                  priority={o.priority ? o.priority : "N/A"}
                />
              );
            })}
        </>
      )}

      <button onClick={() => (window.location.href = "/tasks/create")}>
        Create Task
      </button>
    </div>
  );
};

export default Tasks;
