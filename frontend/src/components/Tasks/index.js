import React from "react";
import TaskCard from "../TaskCard";
import "./styles.scss";

const Tasks = ({ data }) => {
  console.log(data);
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
                  name={o.company ? o.company : "N/A"}
                  priority={o.priority ? o.priority : "N/A"}
                />
              );
            })}
        </>
      )}
    </div>
  );
};

export default Tasks;
