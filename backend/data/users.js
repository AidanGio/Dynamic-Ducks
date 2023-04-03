import { ObjectId } from "mongodb";
import { users } from "../config/mongoCollections.js";

import bcrypt from "bcrypt";

const createUser = async (obj) => {
  const usersCollection = await users();

  const insertInfo = await usersCollection.insertOne({ ...obj });

  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw { status: 400, msg: "Could not add users" };

  return await getUserById(insertInfo.insertedId);
};

const userLogin = async ({ email, password }) => {
  const usersCollection = await users();

  const findUser = await usersCollection.findOne({ email: email });

  if (findUser == null) {
    throw { status: 404, message: "User not found" };
  }
  const dbPassword = findUser.password;

  const validPassword = await bcrypt.compare(password, dbPassword);

  if (validPassword) {
    delete findUser.password;
    return { ...findUser };
  } else throw { status: 401, message: "Error: Invalid Username or Password" };
};

const getUserById = async (id) => {
  const usersCollection = await users();

  const user = await usersCollection.findOne(
    { _id: new ObjectId(id) },
    { projection: { password: 0 } }
  );

  return user;
};

const deleteUser = async (id) => {
  const usersCollection = await users();

  const user = await usersCollection.deleteOne({ _id: new ObjectId(id) });
  return user;
};

const getAllUsers = async () => {
  const usersCollection = await users();
  const usersData = await usersCollection.find({}).toArray();
  return usersData;
};

export { createUser, getUserById, deleteUser, getAllUsers, userLogin };
