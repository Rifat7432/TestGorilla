import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const Chart = () => {
  const topic = useLoaderData();
  return (
    <div>
      <LineChart width={500} height={1000} data={topic.data}>
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Chart;
