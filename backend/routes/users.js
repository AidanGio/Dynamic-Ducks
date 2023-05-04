import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  userLogin,
} from "../data/users.js";

import {
  createPhoto,
} from "../data/uploadFiles.js";

import bcrypt from "bcrypt";

// let User = require("../models/user.model");

const router = express.Router();

router.route("/").get(async (req, res) => {
  const result = await getAllUsers();
  res.json(result);
});

router.route("/register").post(async (req, res) => {
  try {
    // let firstName = req.body.firstName;
    // let lastName = req.body.lastName;
    // let address = req.body.address;
    // let role = req.body.role;

    // if (!firstName || !lastName || !address || !role) {
    //   throw { status: 400, message: "BAD PARAMETER" };
    // }

    // const newUser = {
    //   firstName,
    //   lastName,
    //   address,
    //   role,
    // };

    let password = req.body.password;

    const salt = await bcrypt.genSalt(10);

    let hashpass = await bcrypt.hash(password, salt);

    req.body.password = hashpass;

    const result = await createUser(req.body);

    res.status(200).json(result);
  } catch (error) {
    res.status(error.status).json(error.message);
  }
});

router.route("/login").post(async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    // if (!email || !password) {
    //   throw { status: 400, message: "BAD PARAMETER" };
    // }

    const result = await userLogin({ email, password });

    // req.session.user = {
    //   ...result,
    // };

    res.status(200).json(result);
  } catch (error) {
    res.status(error.status).json(error.message);
  }
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

// Upload photo
router.post("/upload/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let result = await createPhoto(req, id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
