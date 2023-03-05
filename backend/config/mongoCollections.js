import { dbConnection } from "./mongoConnection";

const getCollectionFn = (collection) => {
  let _collection = undefined;

  return async () => {
    if (!_collection) {
      const db = await dbConnection();
      _collection = await db.collection(collection);
    }
  };
};

const users = getCollectionFn("users");
const projects = getCollectionFn("projects");

export { users, projects };
