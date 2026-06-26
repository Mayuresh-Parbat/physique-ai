import {
  Brain,
  TrendingUp,
  Moon,
} from "lucide-react";

export default function AIInsights() {
  return (
    <div className="space-y-4">

      <Insight
        icon={<Brain />}
        text="Protein intake below target"
      />

      <Insight
        icon={<TrendingUp />}
        text="Strength increasing steadily"
      />

      <Insight
        icon={<Moon />}
        text="Recovery score excellent"
      />

    </div>
  );
}

function Insight({ icon, text }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 flex gap-3">
      <div className="text-cyan-400">
        {icon}
      </div>

      <p>{text}</p>
    </div>
  );
}