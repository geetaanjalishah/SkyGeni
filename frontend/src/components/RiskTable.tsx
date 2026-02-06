import { useEffect, useState } from "react"
import { getRiskFactors } from "../api/api"
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material"

export default function RiskTable() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    getRiskFactors().then(res => setData(res.data))
  }, [])

  if (!data) return null

  return (
    <Card className="risk-card">
      <CardContent>
        <div className="risk-title">Top Risk Factors</div>

        {/* Stale Deals */}
        <div className="risk-section">
          <span className="risk-dot" />
          <span className="risk-label">Stale Deals</span>
        </div>

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Deal ID</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.staleDeals.map((d: any) => (
              <TableRow key={d.deal_id}>
                <TableCell>{d.deal_id}</TableCell>
                <TableCell>${d.amount.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Low Activity Accounts */}
        <div className="risk-section">
          <span className="risk-dot" />
          <span className="risk-label">Low Activity Accounts</span>
        </div>

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Deal ID</TableCell>
              <TableCell>Account</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.lowActivityDeals.map((d: any) => (
              <TableRow key={d.deal_id}>
                <TableCell>{d.deal_id}</TableCell>
                <TableCell>{d.account_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Underperforming Reps */}
        <div className="risk-section">
          <span className="risk-dot" />
          <span className="risk-label">Underperforming Reps</span>
        </div>

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Rep</TableCell>
              <TableCell>Win Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.underperformingReps.map((r: any) => (
              <TableRow key={r.repId}>
                <TableCell>{r.repId}</TableCell>
                <TableCell>{Math.round(r.winRate * 100)}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
