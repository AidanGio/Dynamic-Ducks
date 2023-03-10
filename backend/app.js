import express, { json } from "express";
import constructRoutes from "./routes/index.js";

import cors from "cors";

const app = express();

app.use(json());

app.use(cors());

constructRoutes(app);

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000/");
});
