import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

router.get("/", (req, res) => {
  const dealsPath = path.join(__dirname, "..", "data", "deals.json");
  const targetsPath = path.join(__dirname, "..", "data", "targets.json");

  const deals = JSON.parse(fs.readFileSync(dealsPath, "utf-8"));
  const targets = JSON.parse(fs.readFileSync(targetsPath, "utf-8"));

  const revenue = deals
    .filter((d: any) => d.status === "won")
    .reduce((sum: number, d: any) => sum + (d.amount || 0), 0);

  const target = targets.reduce(
    (sum: number, t: any) => sum + (t.target || 0),
    0,
  );

  res.json({
    revenue,
    target,
    gapPercent: ((revenue - target) / target) * 100,
    qoqChange: 5,
  });
});

export default router;
