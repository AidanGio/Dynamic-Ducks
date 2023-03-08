import { ObjectId } from "mongodb";
import { users } from "../config/mongoCollections.js";

const createUser = async ({ firstName, lastName, password, role }) => {
  const usersCollection = await users();

  const insertInfo = await usersCollection.insertOne({
    firstName,
    lastName,
    address,
    password,
    role,
  });

  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw { status: 400, msg: "Could not add users" };

  return insertInfo;
};

const getUserById = async (id) => {
  const usersCollection = await users();

  const user = await usersCollection.findOne({ _id: new ObjectId(id) });

  return user;
};

const deleteUser = async (id) => {
  const usersCollection = await users();

  const user = await usersCollection.deleteOne({ _id: new ObjectId(id) });
  return user;
};

export { createUser, getUserById, deleteUser };
