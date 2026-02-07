import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { getRevenueTrend } from "../api/api";
import { Card, CardContent } from "@mui/material";

export default function RevenueTrend() {
  const [data, setData] = useState<any[]>([]);

  const formatMonth = (dateStr: string) =>
    new Date(dateStr).toLocaleString("en-US", { month: "short" });

  useEffect(() => {
    getRevenueTrend().then((res) => {
      const formatted = res.data.map((d: any) => ({
        ...d,
        month: formatMonth(d.month),
      }));
      setData(formatted);
    });
  }, []);

  return (
    <Card>
      <CardContent>
        <div className="revenue-title">Revenue Trend (Last 6 Months)</div>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data} barCategoryGap={28}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />
            <YAxis tickFormatter={(v) => `${v / 1000}K`} />


            <Bar
              dataKey="revenue"
              fill="#4585da"
              radius={[0, 0, 0, 0]}
              barSize={30}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#ec9a2d"
              strokeWidth={3}
              dot={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
