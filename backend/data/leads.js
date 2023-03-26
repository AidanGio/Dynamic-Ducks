import { leads } from "../config/mongoCollections.js";
import { ObjectId } from 'mongodb';

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
    let leadsCollection;
    try {
      leadsCollection = await leads();
    } catch (error) {
      console.log(error);
    }
    
    const {id} = req.params
 
    const query = { _id: new ObjectId(id) };

    try {
        const aLead = await leadsCollection.find(query).toArray();
        return aLead;
    } catch (error) {
        console.log(error)

    }
};

// create lead
const createLead = async (req, res) => {
    const {firstname, lastname, number} = req.body
    let leadsCollection;
    try {
      leadsCollection = await leads();
    } catch (error) {
      console.log(error);
    }
    let result
    try {
        result = await leadsCollection.insertOne( req.body )
    } catch(error) {
        console.log(error)
    }
    console.log(result)
};

// delete lead


// update lead


export {
    getAllLeads,
    getLead,
    createLead
};