import { dbConnection } from "./mongoConnection.js";

const getCollectionFn = (collection) => {
  let _collection = undefined;

  return async () => {
    if (!_collection) {
      const db = await dbConnection();
      _collection = await db.collection(collection);
    }
    return _collection;
  };
};

const users = getCollectionFn("users");
const projects = getCollectionFn("projects");

export { users, projects };
