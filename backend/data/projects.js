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
const getProject = async (req,res) => {
  let projectsCollection;
  try {
    projectsCollection = await projects();
  } catch (error) {
    console.log(error);
  }

  const {id} = req.params
 
  const query = { _id: new ObjectId(id) };

  try {
    const aProject = await projectsCollection.find(query).toArray();
    return aProject;
  } catch (error) {
      console.log(error)
  }
};

// Create a project
const createProject = async (req,res) => {
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

const updateProject = async (id, body) => {
  let projectsCollection = await projects();

  const insertInfo = await projectsCollection.updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: { ...body },
    }
  );

  if (!insertInfo.acknowledged || !insertInfo.modifiedCount) {
    throw { status: 400, msg: "Could not modify project" };
  }

  return await getProjectById(id);
};

const deleteProject = async (id) => {
  let projectsCollection = await projects();

  const deleteResult = await projectsCollection.deleteOne({ _id: new ObjectId(id) });

  if (deleteResult.deletedCount == 1) {
    console.log(`Successfully deleted one project with ID ${projectID}`);
    return { deleted: true };
  } else {
    console.log(`Could not delete project with ID ${projectID}`);
    return { deleted: false };
  }
};



export {
  getAllProjects,
  deleteProject,
  createProject,
  updateProject,
  getProject,
};