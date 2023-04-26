import { projects } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";

// Get all projects
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

// Get a single proejct
const getProject = async (req, res) => {
  let projectsCollection;
  try {
    projectsCollection = await projects();
  } catch (error) {
    console.log(error);
  }

  const { id } = req.params;

  const query = { _id: new ObjectId(id) };

  try {
    const aProject = await projectsCollection.find(query).toArray();
    return aProject;
  } catch (error) {
    console.log(error);
  }
};

// Get all projects a user is a part of
const getUserProjects = async (req, res) => {
  let projectsCollection;
  try {
    projectsCollection = await projects();
  } catch (error) {
    console.log(error);
  }

  const { id } = req.params;

  const query = {
    $or: [
      { AssignedManagers: { $in: [id] } },
      { AssignedWorkers: { $in: [id] } },
      { AssignedCustomers: { $in: [id] } },
    ],
  };

  try {
    const aProject = await projectsCollection.find(query).toArray();
    return aProject;
  } catch (error) {
    console.log(error);
  }
};

// Create a project
const createProject = async (req, res) => {
  let projectsCollection;
  try {
    projectsCollection = await projects();
  } catch (error) {
    console.log(error);
  }

  const insertInfo = await projectsCollection.insertOne(req.body);

  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw { status: 400, msg: "Could not add project" };

  return insertInfo.insertedId;
};

// Delete a project
const deleteProject = async (req, res) => {
  let projectsCollection;
  try {
    projectsCollection = await projects();
  } catch (error) {
    console.log(error);
  }

  const { id } = req.params;
  const query = { _id: new ObjectId(id) };

  const result = await projectsCollection.deleteOne(query);

  if (deleteResult.deletedCount == 1) {
    console.log(`Successfully deleted one project with ID ${projectID}`);
    return { deleted: true };
  } else {
    console.log(`Could not delete project with ID ${projectID}`);
    return { deleted: false };
  }
};

// Update a project
const updateProject = async (req, res) => {
  let projectsCollection;
  try {
    projectsCollection = await projects();
  } catch (error) {
    console.log(error);
  }

  const { id } = req.params;
  const query = { _id: new ObjectId(id) };
  const update = { $set: req.body };

  try {
    const result = await projectsCollection.updateOne(query, update);
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllProjects,
  deleteProject,
  createProject,
  updateProject,
  getProject,
  getUserProjects,
};
