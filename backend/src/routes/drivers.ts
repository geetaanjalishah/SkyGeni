import { Router } from "express"
import fs from "fs"
import path from "path"

const router = Router()

router.get("/", (req, res) => {
  const dealsPath = path.join(__dirname, "..", "data", "deals.json")
  const deals = JSON.parse(fs.readFileSync(dealsPath, "utf-8"))

  const wonDeals = deals.filter((d: any) => d.status === "won")
  const lostDeals = deals.filter((d: any) => d.status === "lost")
  const openDeals = deals.filter((d: any) => d.status === "open")

  // 1. Pipeline size (open deals)
  const pipelineSize = openDeals.reduce(
    (sum: number, d: any) => sum + (d.amount || 0),
    0
  )

  // 2. Win rate
  const totalClosed = wonDeals.length + lostDeals.length
  const winRate = totalClosed === 0 ? 0 : wonDeals.length / totalClosed

  // 3. Average deal size
  const avgDealSize =
    wonDeals.length === 0
      ? 0
      : wonDeals.reduce(
          (sum: number, d: any) => sum + (d.amount || 0),
          0
        ) / wonDeals.length

  // 4. Sales cycle time (days)
  const salesCycleDays =
    wonDeals.length === 0
      ? 0
      : wonDeals.reduce((sum: number, d: any) => {
          const created = new Date(d.createdDate).getTime()
          const closed = new Date(d.closeDate).getTime()
          return sum + (closed - created) / (1000 * 60 * 60 * 24)
        }, 0) / wonDeals.length

  res.json({
    pipelineSize,
    winRate: Number(winRate.toFixed(2)),
    avgDealSize: Math.round(avgDealSize),
    salesCycleDays: Math.round(salesCycleDays)
  })
})

export default router
