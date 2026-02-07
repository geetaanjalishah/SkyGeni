import { useEffect, useState } from "react";
import { Card, CardContent } from "@mui/material";
import MiniChart from "./MiniChart";
import { getDrivers } from "../api/api";

type ChartType = "line" | "area" | "bar";

type Driver = {
  label: string;
  value: string;
  delta: string;
  trend: number[];
  chartType: ChartType;
};

export default function DriversChart() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    getDrivers().then((res) => {
      setDrivers([
        {
          label: "Pipeline Value",
          value: `$${(res.data.pipelineSize / 1_000_000).toFixed(1)}M`,
          delta: "+12%",
          trend: [10, 14, 13, 16, 15, 18, 20],
          chartType: "area",
          color: "#4da3ff",
        },
        {
          label: "Win Rate",
          value: `${Math.round(res.data.winRate * 100)}%`,
          delta: "-4%",
          trend: [22, 21, 20, 19, 18, 17, 18],
          chartType: "bar",
          color: "#1976d2",
        },
        {
          label: "Avg Deal Size",
          value: `$${(res.data.avgDealSize / 1000).toFixed(1)}K`,
          delta: "+3%",
          trend: [15, 16, 15, 17, 18, 19, 21],
          chartType: "area",
          color: "#42b983",
        },
        {
          label: "Sales Cycle",
          value: `${res.data.salesCycleDays} Days`,
          delta: "+9 Days",
          trend: [50, 48, 46, 47, 45, 44, 45],
          chartType: "area",
          color: "#f57c00",
        },
      ]);
    });
  }, []);

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <div className="driver">Revenue Drivers</div>

        {drivers.map((d, i) => (
          <div key={i} className="driver-row">
            <div className="driver-header">
              <span className="driver-label">{d.label}</span>
              <span className="driver-value">{d.value}</span>
              <span
                className={`driver-delta ${
                  d.delta.startsWith("+") ? "pos" : "neg"
                }`}
              >
                {d.delta}
              </span>
            </div>
            <div className="driver-chart">
              <MiniChart data={d.trend} type={d.chartType} color={d.color} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
