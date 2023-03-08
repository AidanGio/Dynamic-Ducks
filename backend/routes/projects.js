import express from "express";
import { createProject, getAllProjects } from "../data/projects.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getAllProjects());
});

router.post("/create/:name", async (req,res) => {
  //console.log(req.params.name);
  res.json(await createProject(req.params.name));
});

export default router;
