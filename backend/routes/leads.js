import express from "express";
import {
    getAllLeads,
    getLead,
    getSuccessfulLeads,
    createLead,
    deleteLead,
    updateLead
  } from "../data/leads.js";

const router = express.Router();

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
router.get("/id/:id", async (req, res) => {
    try {
      const result = await getLead(req, res);
      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });

// get successful leads
router.get("/success", async (req, res) => {
  try {
      const result = await getSuccessfulLeads(req, res);
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

// delete a lead
router.delete("/:id", async (req, res) => {
  try {
    const result = await deleteLead(req,res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update a lead
router.patch("/:id", async (req, res) => {
  try {
    const result = await updateLead(req,res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;