import { projects } from "../config/mongoCollections.js";
import { closeConnection, dbConnection } from "../config/mongoConnection.js";

const getAllProjects = async () => {
  let projectsCollection;
  try {
    projectsCollection = await projects();
  } catch (error) {
    console.log(error);
  }
  const res = await projectsCollection.find({}).toArray();
  return res;
};

const deleteProject = async (projectID) => {
  const database = await dbConnection();
  let projectsCollection = await database.collection("projects");

  const deleteResult = projectsCollection.deleteOne({ _id: projectID });

  if (deleteResult.deletedCount == 1) {
    console.log(`Successfully deleted one project with ID ${projectID}`);
  } else {
    console.log(`Could not delete project with ID ${projectID}`);
  }
};

export { getAllProjects, deleteProject };
