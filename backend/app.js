import express from "express";
import constructRoutes from "./routes/index.js";

const app = express();

constructRoutes(app);

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000/");
});
