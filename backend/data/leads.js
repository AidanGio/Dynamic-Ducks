import { leads } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";

// get all leads
const getAllLeads = async (req,res) => {
    let leadsCollection;
    try {
      leadsCollection = await leads();
    } catch (error) {
      console.log(error);
    }
    const leadsList = await leadsCollection.find({}).toArray();
    return leadsList
  };

// get single lead
const getLead = async (req, res) => {
    const {id} = req.params

    const aLead = await leadsCollection.findById({id})
    console.log(aLead)
}

// create lead
const createLead = async (req, res) => {
    const {FirstName, LastName, Number} = req.body
    console.log("test")
    const doc = {
        firstname: "test"
    }
    const result = await leadsCollection.insertOne(doc)
  
}

// delete lead


// update lead


export {
    getAllLeads,
    getLead,
    createLead
};