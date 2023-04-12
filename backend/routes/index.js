import projectRoutes from "./projects.js";
import userRoutes from "./users.js";
import leadRoutes from "./leads.js";
import taskRoutes from "./tasks.js";
import calendarRoutes from "./calendar.js"

const constructRoutes = (app) => {
  app.use("/projects", projectRoutes);
  app.use("/users", userRoutes);
  app.use("/leads", leadRoutes);
  app.use("/tasks", taskRoutes);
  app.use("/calendar", calendarRoutes);

  app.use("*", (req, res) => {
    res.json({ message: "No matching route found" });
  });
};

export default constructRoutes;
