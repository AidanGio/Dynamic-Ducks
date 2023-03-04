
import ProjectsDAO from "../dao/ProjectsDAO.js"

export default class ProjectsController {
  static async apiGetProjects(req, res, next) {
    const projectsPerPage = req.query.projectsPerPage ? parseInt(req.query.projectsPerPage, 10) : 20
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    let filters = {}
    if (req.query.progress) {
      filters.progress = req.query.progress
    } else if (req.query.status) {
      filters.status = req.query.status
    } else if (req.query.name) {
      filters.name = req.query.name
    }

    const { projectsList, totalNumProjects } = await ProjectsDAO.getProjects({
      filters,
      page,
      projectsPerPage,
    })

    let response = {
      projects: projectsList,
      page: page,
      filters: filters,
      entries_per_page: projectsPerPage,
      total_results: totalNumProjects,
    }
    res.json(response)
  }
}