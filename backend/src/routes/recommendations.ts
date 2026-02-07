import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json([
    "Focus on open deals older than 30 days",
    "Coach underperforming sales reps",
    "Increase outreach on inactive accounts",
    "Prioritize high-value pipeline opportunities",
  ]);
});

export default router;
