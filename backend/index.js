import app from "./server.js"
import mongodb, { MongoClient } from "mongodb"
import dotenv from "dotenv"
import ProjectsDAO from "./dao/projectsDAO.js"
dotenv.config()
//const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.PROJECTS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)
.catch(err => {
    console.log(err.stack)
    process.exit(1)
})
.then(async client => {
    await ProjectsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})