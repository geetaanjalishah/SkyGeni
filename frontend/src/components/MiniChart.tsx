import { useEffect, useRef } from "react";
import * as d3 from "d3";

type Props = {
  data: number[];
  type: "line" | "area" | "bar";
  color?: string;
};

export default function MiniChart({ data, type, color = "#4da3ff" }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 120;
    const height = 30;

    const x = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain(d3.extent(data) as [number, number])
      .range([height, 0]);

    if (type === "line") {
      const line = d3
        .line<number>()
        .x((_, i) => x(i))
        .y((d) => y(d))
        .curve(d3.curveLinear);

      svg
        .append("path")
        .datum(data)
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 2);
    }

    if (type === "area") {
      const area = d3
        .area<number>()
        .x((_, i) => x(i))
        .y0(height)
        .y1((d) => y(d))
        .curve(d3.curveMonotoneX);

      svg
        .append("path")
        .datum(data)
        .attr("d", area)
        .attr("fill", color)
        .attr("fill-opacity", 0.3);
    }

    if (type === "bar") {
      const barWidth = width / data.length - 2;

      svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (_, i) => i * (width / data.length))
        .attr("y", (d) => y(d))
        .attr("width", barWidth)
        .attr("height", (d) => height - y(d))
        .attr("fill", color);
    }
  }, [data, type, color]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 120 30"
      preserveAspectRatio="none"
      className="mini-chart"
    />
  );
}
