import React, { useEffect, useState } from "react";
import { apiInstance } from "../utils/apiInstance";

const CreateTaskPage = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    apiInstance.get("/users").then((res) => setOptions(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let task = e.target.task.value;
    let proirity = e.target.priority.value;
    let type = e.target.type.value;

    let address = e.target.address.value;
    let owner = e.target.owner.value;

    console.log(owner);

    let data = { task, proirity, type, address, owner };

    apiInstance.post("/tasks", { ...data }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="create-task">
      <h2>Create Task</h2>
      <form id="create-task" onSubmit={handleSubmit}>
        <input required placeholder="Task" name="task" />
        <input required placeholder="Proirity" name="priority" />
        <input required placeholder="Type" name="type" />
        <input required placeholder="Address" name="address" />

        {options !== null && (
          <label>
            {" "}
            Assign to
            <select required name="owner">
              {options.map((o, i) => (
                <option value={o._id} key={i}>
                  {o.firstName[0] + " " + o.lastName}
                </option>
              ))}
            </select>
          </label>
        )}
        <button>Create Task</button>
      </form>
    </div>
  );
};

export default CreateTaskPage;
