import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis); //Sending kpi object to frontend
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default router;
