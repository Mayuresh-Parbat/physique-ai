import { useState } from "react";

function WaterTracker() {
  const [water, setWater] = useState(3);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          💧 Water Intake
        </h2>

        <span className="text-cyan-400 font-bold">
          {water} / 4 L
        </span>
      </div>

      <div className="w-full h-4 bg-slate-800 rounded-full mb-6">

        <div
          className="h-4 bg-cyan-400 rounded-full transition-all duration-500"
          style={{
            width: `${(water / 4) * 100}%`,
          }}
        />

      </div>

      <div className="flex gap-3">

        <button
          onClick={() => setWater(Math.max(0, water - 0.5))}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700"
        >
          −
        </button>

        <button
          onClick={() => setWater(Math.min(4, water + 0.5))}
          className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold"
        >
          + 500ml
        </button>

      </div>

    </div>
  );
}

export default WaterTracker;