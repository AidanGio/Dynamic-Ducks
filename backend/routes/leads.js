import express from "express";
import {
    getAllLeads,
    getLead,
    createLead
  } from "../data/leads.js";


const router = express.Router();

//router.get("/", getAllLeads)
// get all leads
router.get("/", async (req, res) => {
    try {
      const result = await getAllLeads(req,res);
      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });

// get a single lead
router.get("/:id", async (req, res) => {
    try {
      const result = await getLead(req, res);
      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });

// create a lead
router.post("/", async (req, res) => {
  try {
    const result = await createLead(req,res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;