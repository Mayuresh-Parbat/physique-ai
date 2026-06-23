import { useState } from "react";

function WorkoutPlan() {
  const [goal, setGoal] = useState("Muscle Gain");

  const plans = {
    "Muscle Gain": [
      "Bench Press - 4 x 8",
      "Squat - 4 x 8",
      "Deadlift - 3 x 5",
      "Pull Ups - 3 x 10"
    ],
    "Fat Loss": [
      "Running - 20 mins",
      "Burpees - 4 x 15",
      "Mountain Climbers - 4 x 20",
      "Jump Rope - 15 mins"
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        AI Workout Generator
      </h1>

      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="bg-slate-800 p-3 rounded-xl mb-6"
      >
        <option>Muscle Gain</option>
        <option>Fat Loss</option>
      </select>

      <div className="space-y-4">
        {plans[goal].map((exercise, index) => (
          <div
            key={index}
            className="bg-slate-900 p-4 rounded-xl"
          >
            {exercise}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutPlan;