import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ nn: "mm" });
});

export default router;
