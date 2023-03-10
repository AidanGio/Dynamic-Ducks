import { projects } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";

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

const createProject = async (body) => {
  let projectsCollection = await projects();

  const insertInfo = await projectsCollection.insertOne(body);

  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw { status: 400, msg: "Could not add users" };

  return await getProjectById(insertInfo.insertedId);
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
    return { deleted: true };
    console.log(`Successfully deleted one project with ID ${projectID}`);
  } else {
    return { deleted: false };
    console.log(`Could not delete project with ID ${projectID}`);
  }
};

const getProjectById = async (id) => {
  let projectsCollection = await projects();

  const project = await projectsCollection.findOne({ _id: new ObjectId(id) });

  return project;
};

export {
  getAllProjects,
  deleteProject,
  createProject,
  updateProject,
  getProjectById,
};
