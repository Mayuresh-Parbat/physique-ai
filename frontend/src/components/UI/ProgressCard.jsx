import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", weight: 78 },
  { day: "Tue", weight: 77.8 },
  { day: "Wed", weight: 77.5 },
  { day: "Thu", weight: 77.3 },
  { day: "Fri", weight: 77 },
];

export default function ProgressChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="weight"
            stroke="#22d3ee"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}