import { projects } from "../config/mongoCollections.js";
import { ObjectId } from 'mongodb';

// Get all project due dates
const getAllDueDates = async (req,res) => {
    let projectsCollection;

    try {
      projectsCollection = await projects();
    } catch (error) {
      console.log(error);
    }
 
    const { id } = req.params;

    const query = {$or: [
        {AssignedManagers: {$in: [id]}},
        {AssignedWorkers: {$in: [id]}},
        {AssignedCustomers: {$in: [id]}}
    ]}

    try {
      const aProject = await projectsCollection.find(query).toArray();
      return aProject;
    } catch (error) {
        console.log(error)
    }
};

export {
    getAllDueDates
};