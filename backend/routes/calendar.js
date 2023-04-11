import express from "express";

import {
    getAllDueDates
  } from "../data/calendar.js";

const router = express.Router();

// Get all project due dates
router.get("/:id", async (req, res) => {
    try {
      const result = await getAllDueDates(req,res);
      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });

export default router;