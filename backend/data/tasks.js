import { tasks } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";

// Get all tasks
const getAllTasks = async () => {
  let tasksCollection;
  try {
    tasksCollection = await tasks();
  } catch (error) {
    console.log(error);
  }
  const res = await tasksCollection.find({}).toArray();
  return res;
};

// Get all tasks under a single project
const getTasks = async (req, res) => {
  let tasksCollection;
  try {
    tasksCollection = await tasks();
  } catch (error) {
    console.log(error);
  }

  const { id } = req.params;

  const query = { _id: new ObjectId(id) };

  try {
    const allTasks = await tasksCollection.find(query).toArray();
    return allTasks;
  } catch (error) {
    console.log(error);
  }
};

// Get a task under a single project
const getTask = async (req, res) => {
  let tasksCollection;
  try {
    tasksCollection = await tasks();
  } catch (error) {
    console.log(error);
  }

  const { id } = req.params;

  const query = { _id: new ObjectId(id) };

  try {
    const atask = await tasksCollection.find(query);
    return atask;
  } catch (error) {
    console.log(error);
  }
};

// Create a task
const createTask = async (req, res) => {
  let tasksCollection;
  try {
    tasksCollection = await tasks();
  } catch (error) {
    console.log(error);
  }

  const insertInfo = await tasksCollection.insertOne(req.body);

  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw { status: 400, msg: "Could not add task" };

  return insertInfo.insertedId;
};

// Delete a task
const deleteTask = async (req, res) => {
  let tasksCollection;
  try {
    tasksCollection = await tasks();
  } catch (error) {
    console.log(error);
  }

  const { id } = req.params;
  const query = { _id: new ObjectId(id) };

  const result = await tasksCollection.deleteOne(query);

  if (deleteResult.deletedCount == 1) {
    console.log(`Successfully deleted one task with ID ${id}`);
    return { deleted: true };
  } else {
    console.log(`Could not delete task with ID ${id}`);
    return { deleted: false };
  }
};

// Update a task
const updateTask = async (req, res) => {
  let tasksCollection;
  try {
    tasksCollection = await tasks();
  } catch (error) {
    console.log(error);
  }

  const { id } = req.params;
  const query = { _id: new ObjectId(id) };
  const update = { $set: req.body };

  try {
    const result = await tasksCollection.updateOne(query, update);
  } catch (error) {
    console.log(error);
  }
};

export { getAllTasks, deleteTask, createTask, updateTask, getTasks, getTask };
