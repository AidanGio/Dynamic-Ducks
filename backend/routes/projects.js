import express from "express";
import { getAllProjects } from "../data/projects.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getAllProjects());
});

export default router;
