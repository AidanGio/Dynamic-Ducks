import express from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject,
} from "../data/projects.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await getAllProjects();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const result = await getProjectById(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    let body = req.body;
    let result = await createProject({ ...body });
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
