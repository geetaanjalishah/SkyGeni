import { Card, CardContent, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getSummary } from "../api/api"
import '../App.css'

export default function SummaryCards() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    getSummary().then(res => setData(res.data))
  }, [])

  if (!data) return null

  const items = [
    { label: "Revenue:", value: data.revenue },
    { label: "Target:", value: data.target },
    { label: "Gap %", value: `${data.gapPercent.toFixed(1)}%` },
    { label: "QoQ Change", value: `${data.qoqChange}%` }
  ]

  return (
    <div className="summary-grid">
      {items.map(item => (
        <div key={item.label} className="summary-card flex">
  <div className="summary-label">
    {item.label}
  </div>
  <div className="summary-value">
    {item.value}
  </div>
</div>

      ))}
    </div>
  )
}
