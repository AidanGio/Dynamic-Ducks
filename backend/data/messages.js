import { messages } from "../config/mongoCollections.js";
import { ObjectId } from 'mongodb';

// get all messages
const getAllMessages = async (req, res) => {
  let messagesCollection;
  try {
    messagesCollection = await messages();
  } catch (error) {
    console.log(error);
  }
  const messagesList = await messagesCollection.find({}).toArray();
  return messagesList;
};

// get single message
const getMessage = async (req, res) => {
  let messagesCollection;
  try {
    messagesCollection = await messages();
  } catch (error) {
    console.log(error);
  }

  const { id } = req.params;

  const query = { _id: new ObjectId(id) };

  try {
    const aMessage = await messagesCollection.find(query).toArray();
    return aMessage;
  } catch (error) {
    console.log(error);
  }
};

// create message
const createMessage = async (req, res) => {
  let messagesCollection;
  try {
    messagesCollection = await messages();
  } catch (error) {
    console.log(error);
  }
  let result;
  try {
    result = await messagesCollection.insertOne(req.body);
  } catch (error) {
    console.log(error);
  }
  console.log(result);
};

// delete message
const deleteMessage = async (req, res) => {
  let messagesCollection;
  try {
    messagesCollection = await messages();
  } catch (error) {
    console.log(error);
  }

  const { id } = req.params;

  const query = { _id: new ObjectId(id) };

  try {
    const result = await messagesCollection.deleteOne(query);
  } catch (error) {
    console.log(error);
  }
};

// update message
const updateMessage = async (req, res) => {
  let messagesCollection;
  try {
    messagesCollection = await messages();
  } catch (error) {
    console.log(error);
  }

  const { id } = req.params;
  const query = { _id: new ObjectId(id) };
  const update = { $set: req.body };

  try {
    const result = await messagesCollection.updateOne(query, update);
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllMessages,
  getMessage,
  createMessage,
  deleteMessage,
  updateMessage,
};


