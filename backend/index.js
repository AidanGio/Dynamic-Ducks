import express, { json } from "express";
import constructRoutes from "./routes/index.js";

import session from "express-session";

import cors from "cors";

const app = express();

// app.use(
//   session({
//     name: "AuthCookie",
//     secret: "DynmaicDucks",
//     saveUninitialized: false,
//     resave: false,
//     cookie: { maxAge: 6000000 },
//   })
// );

app.use(json());

app.use(cors());

constructRoutes(app);

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000/");
});
