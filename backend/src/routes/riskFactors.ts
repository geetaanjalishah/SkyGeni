import { Router } from "express"
import fs from "fs"
import path from "path"

const router = Router()

router.get("/", (req, res) => {
  const deals = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "data", "deals.json"), "utf-8")
  )
  const activities = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "..", "data", "activities.json"),
      "utf-8"
    )
  )

  const now = Date.now()
  const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000

  const staleDeals = deals.filter((d: any) => {
    if (d.status !== "open") return false
    const created = new Date(d.createdDate).getTime()
    return now - created > THIRTY_DAYS
  })

  const activeAccountIds = new Set(
    activities.map((a: any) => a.accountId)
  )

  const lowActivityDeals = deals.filter(
    (d: any) => !activeAccountIds.has(d.accountId)
  )

  const repsMap: Record<string, { total: number; won: number }> = {}

deals.forEach((d: any) => {
  if (!repsMap[d.rep_id]) {
    repsMap[d.rep_id] = { total: 0, won: 0 }
  }

  repsMap[d.rep_id].total += 1
  if (d.stage === "Closed Won") {
    repsMap[d.rep_id].won += 1
  }
})

const underperformingReps = Object.entries(repsMap)
  .map(([repId, stats]) => ({
    repId,
    winRate: stats.won / stats.total
  }))
  .filter(r => r.winRate < 0.3)


  res.json({
    staleDeals,
    lowActivityDeals,
      underperformingReps
  })
})

export default router
