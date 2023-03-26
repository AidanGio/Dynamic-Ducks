import express from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProject,
  updateProject,
} from "../data/projects.js";

const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
  try {
    const result = await getAllProjects();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get a single project
router.get("/:id", async (req, res) => {
  try {
    const result = await getProject(req,res);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a single project
router.post("/", async (req, res) => {
  try {
    let result = await createProject(req,res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let result = await updateProject(id, body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const result = await deleteProject(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
