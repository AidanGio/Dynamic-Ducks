import express from "express";
import { createProject, getAllProjects, updateProject } from "../data/projects.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getAllProjects());
});

router.post("/create/:name", async (req,res) => {
  //console.log(req.params.name);
  res.json(await createProject(req.params.name));
});

router.patch("/update/:_id/updateField/:field/newValue/:value", async (req,res) => {
  res.json(await updateProject(req.params._id,req.params.field,req.params.value))
});

export default router;
