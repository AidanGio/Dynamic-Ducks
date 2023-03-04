import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
let projects

export default class ProjectsDAO {
  static async injectDB(conn) {
    if (projects) {
      return
    }
    try {
      projects = await conn.db(process.env.PROJECTS_NS).collection("projects")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in projectsDAO: ${e}`,
      )
    }
  }

  static async getProjects({
    filters = null,
    page = 0,
    projectsPerPage = 20,
  } = {}) {
    let query
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } }
      } else if ("progress" in filters) {
        query = { "progress": { $eq: filters["progress"] } }
      } else if ("status" in filters) {
        query = { "status": { $eq: filters["status"] } }
      }
    }

    let cursor
    
    try {
      cursor = await projects.find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { projectsList: [], totalNumProjects: 0 }
    }

    const displayCursor = cursor.limit(projectsPerPage).skip(projectsPerPage * page)

    try {
      const projectsList = await displayCursor.toArray()
      const totalNumProjects = await projects.countDocuments(query)

      return { projectsList, totalNumProjects }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { projectsList: [], totalNumProjects: 0 }
    }
  }
}