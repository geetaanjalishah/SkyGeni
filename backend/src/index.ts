import express from "express"
import cors from "cors"
import driversRoutes from "./routes/drivers"
import riskRoutes from "./routes/riskFactors"
import recommendationRoutes from "./routes/recommendations"
import revenueTrend from "./routes/revenueTrend"




import summaryRoutes from "./routes/summary"

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

app.use("/api/summary", summaryRoutes)
app.use("/api/drivers", driversRoutes)
app.use("/api/risk-factors", riskRoutes)
app.use("/api/recommendations", recommendationRoutes)
app.use("/api/revenue-trend", revenueTrend)




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
