import { projects } from "../config/mongoCollections.js";
import { closeConnection, dbConnection } from "../config/mongoConnection.js";
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

const createProject = async (projName) => {
  const database = await dbConnection();
  let projectsCollection = await database.collection("projects");

  const doc = {
    name:projName,
    'Start Date':'',
    'End Date':'',
    'Stage':'Design',
    'Progress':0,
    'Billing Status':false
  }

  const insertResult = await projectsCollection.insertOne(doc)

  console.log(`A document was inserted with the _id: ${insertResult.insertedId}`)
}

const updateProject = async (projectID, field, newValue) => {
  const database = await dbConnection();
  let projectsCollection = await database.collection("projects");

  const objectId = new ObjectId(projectID)

  console.log(objectId.toString())
  const updatefield = field
  const updateResult = projectsCollection.updateOne(
    {"_id":objectId},
    {$set:{updatefield:newValue}}
  );
  
  console.log(`Updated documented with _id ${projectID}`)
}

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

export { getAllProjects, deleteProject, createProject, updateProject };
