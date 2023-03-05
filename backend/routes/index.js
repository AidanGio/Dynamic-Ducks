import projectRoutes from "./projects.js";

const constructRoutes = (app) => {
  app.use("/projects", projectRoutes);
  app.use("*", (req, res) => {
    res.json({ message: "No matching route found" });
  });
};

export default constructRoutes;
