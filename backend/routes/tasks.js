import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTasks,
  getTask,
  updateTask,
} from "../data/tasks.js";

const router = express.Router();

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const result = await getAllTasks();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get all tasks under a single project
router.get("/:id", async (req, res) => {
  try {
    const result = await getTasks(req, res);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get a task under a single project
router.get("/task/:id", async (req, res) => {
  try {
    const result = await getTask(req, res);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a single task
router.post("/", async (req, res) => {
  try {
    let result = await createTask(req, res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  try {
    const result = await deleteTask(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a task
router.patch("/task/:id", async (req, res) => {
  try {
    const result = await updateTask(req, res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
