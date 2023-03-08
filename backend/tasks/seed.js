import { closeConnection, dbConnection } from "../config/mongoConnection.js";
import { createProject } from "../data/projects.js";
import { createUser } from "../data/users.js";

const userData = {
  firstName: "firstName",
  lastName: "lastName",
  address: "address",
  password: "password",
  role: "role",
};

const projectData = {
  name: "Project title",
  startDate: "date",
  endDate: "date",
  progress: "Installing",
  status: 1,
  billingStatus: true,
  users: "users",
};

const main = async () => {
  const db = await dbConnection();

  for (let i = 0; i < 50; i++) {
    const newUser = { ...userData };
    newUser.firstName = `${newUser.firstName} ${i}`;
    newUser.lastName = `${newUser.lastName} ${i}`;
    const user = await createUser(newUser);

    const newProject = { ...projectData };
    newProject.name = `${newProject.name} ${i}`;
    const project = await createProject(newProject);
  }
  await closeConnection();
};

main();
