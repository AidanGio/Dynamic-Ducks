import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
} from "../data/users.js";

// let User = require("../models/user.model");

const router = express.Router();

router.route("/").get(async (req, res) => {
  const result = await getAllUsers();
  res.json(result);
});

router.route("/").post(async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const newUser = {
    firstName,
    lastName,
    address,
    role,
  };

  const result = await createUser(newUser);

  res.json(result);
});

router.route("/:id").get(async (req, res) => {
  let id = req.params.id;

  const result = await getUserById(id);
  res.json(result);
});

router.route("/:id").delete(async (req, res) => {
  let id = req.params.id;
  const result = await deleteUser(id);
  return result;
});
// router.route("/update/:id").post((req, res) => {
//   User.findById(req.params.id)
//     .then((users) => {
//       if (users.projectProgress === "Design") {
//         users.projectProgress = "Permitting";
//         users.projectStatus = 20;
//       } else if (users.projectProgress === "Permitting") {
//         users.projectProgress = "Installing";
//         users.projectStatus = 40;
//       } else if (users.projectProgress === "Installing") {
//         users.projectProgress = "Inspection";
//         users.projectStatus = 60;
//       } else if (users.projectProgress === "Inspection") {
//         users.projectProgress = "Powering Up";
//         users.projectStatus = 80;
//       } else if (users.projectProgress === "Powering Up") {
//         users.projectProgress = "Projected Completed";
//         users.projectStatus = 100;
//       }
//       users.paymentStatus = req.body.paymentStatus;

//       users
//         .save()
//         .then(() => res.json("User updated!"))
//         .catch((err) => res.status(400).json("Error: " + err));
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });

export default router;
