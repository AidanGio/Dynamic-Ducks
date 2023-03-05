import { MongoClient } from "mongodb";

import settings from "./settings.json";

let _connection = undefined;
let _db = undefined;

const dbConnection = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(settings.mongoConfig.serverUrl);
    _db = await _connection.db(settings.mongoConfig.database);
  }
  return _db;
};

const closeConnection = () => {
  _connection.close();
};

export { dbConnection, closeConnection };
