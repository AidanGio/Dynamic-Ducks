import express from "express"
import ProjectsCtrl from "./projects.controller.js"

const router = express.Router()

//router.route("/").get((req, res) => res.send("hello world"))
router.route("/").get(ProjectsCtrl.apiGetProjects)

export default router