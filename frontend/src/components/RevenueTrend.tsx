import { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import { getRevenueTrend } from "../api/api"
import { Card, CardContent,} from "@mui/material";


export default function RevenueTrend() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    getRevenueTrend().then(res => setData(res.data))
  }, [])

return (
  <Card>
    <CardContent>
      <div className="revenue-card">
        <div className="revenue-title">
          Revenue Trend (Last 6 Months)
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#4fa3ff"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
)

}
