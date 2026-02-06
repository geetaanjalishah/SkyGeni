import { Router } from "express"
import fs from "fs"
import path from "path"

const router = Router()

router.get("/", (req, res) => {
  const dealsPath = path.join(__dirname, "..", "data", "deals.json")
  const deals = JSON.parse(fs.readFileSync(dealsPath, "utf-8"))

  const revenueByMonth: Record<string, number> = {}

  deals.forEach((deal: any) => {
    if (deal.stage !== "Closed Won") return
    if (!deal.amount) return

    const dateStr = deal.closed_at || deal.created_at
    if (!dateStr) return

    const date = new Date(dateStr)
    if (isNaN(date.getTime())) return

    const monthKey = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}`

    revenueByMonth[monthKey] =
      (revenueByMonth[monthKey] || 0) + deal.amount
  })

  const result = Object.entries(revenueByMonth)
    .map(([month, revenue]) => ({ month, revenue }))
    .sort((a, b) => a.month.localeCompare(b.month))
    .slice(-6)

  res.json(result)
})

export default router
