import React from "react";
import "./styles.scss";

const TaskCard = ({ name, priority, address }) => {
  return (
    <div className="task-card">
      <div>
        <p>Company: {name}</p>
        <p>Priority: {priority}</p>
      </div>
      <div>
        <p>Location: {address ? address : "N/A"}</p>
      </div>
    </div>
  );
};

export default TaskCard;
