import { useState } from "react";

function WorkoutTracker() {
  const [completed, setCompleted] = useState(false);

  const workout = [
    {
      exercise: "Bench Press",
      sets: 4,
      reps: 8,
      weight: "80 kg",
    },
    {
      exercise: "Incline Dumbbell Press",
      sets: 3,
      reps: 10,
      weight: "25 kg",
    },
    {
      exercise: "Cable Fly",
      sets: 3,
      reps: 12,
      weight: "20 kg",
    },
    {
      exercise: "Tricep Pushdown",
      sets: 4,
      reps: 12,
      weight: "35 kg",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Workout Tracker
        </h1>

        <p className="text-slate-400 mb-10">
          Track today's workout and stay consistent.
        </p>

        {/* TOP */}

        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <StatCard title="Workout" value="Chest + Triceps" />

          <StatCard title="Duration" value="75 mins" />

          <StatCard title="Calories" value="540 kcal" />

          <StatCard title="Exercises" value="4" />

        </div>

        {/* EXERCISES */}

        <div className="bg-slate-900 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Today's Exercises
          </h2>

          <div className="space-y-5">

            {workout.map((item, index) => (

              <div
                key={index}
                className="bg-slate-800 rounded-2xl p-5 flex justify-between items-center"
              >

                <div>

                  <h3 className="text-xl font-semibold">
                    {item.exercise}
                  </h3>

                  <p className="text-slate-400">
                    {item.sets} Sets • {item.reps} Reps
                  </p>

                </div>

                <div className="text-cyan-400 font-bold">
                  {item.weight}
                </div>

              </div>

            ))}

          </div>

          <button
            onClick={() =>
              setCompleted(!completed)
            }
            className={`mt-8 w-full py-4 rounded-2xl text-lg font-bold transition ${
              completed
                ? "bg-green-500"
                : "bg-cyan-500 hover:bg-cyan-400 text-black"
            }`}
          >
            {completed
              ? "Workout Completed ✅"
              : "Mark Workout Complete"}
          </button>

        </div>

      </div>

    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6">

      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>

    </div>
  );
}

export default WorkoutTracker;