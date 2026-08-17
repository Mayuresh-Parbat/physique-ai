import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import {
  Brain,
  CalendarDays,
  ChevronRight,
  Clock3,
  Dumbbell,
  Flame,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
} from "lucide-react";

export default function WorkoutPlan() {
  const [goal, setGoal] = useState("Muscle Gain");
  const [experience, setExperience] = useState("Beginner");
  const [equipment, setEquipment] = useState("Gym");
  const [duration, setDuration] = useState(60);

  const plans = {
    "Muscle Gain": [
      {
        exercise: "Bench Press",
        sets: 4,
        reps: 8,
        rest: "90 sec",
      },
      {
        exercise: "Incline Dumbbell Press",
        sets: 3,
        reps: 10,
        rest: "75 sec",
      },
      {
        exercise: "Cable Fly",
        sets: 3,
        reps: 12,
        rest: "60 sec",
      },
      {
        exercise: "Tricep Pushdown",
        sets: 3,
        reps: 12,
        rest: "60 sec",
      },
      {
        exercise: "Overhead Extension",
        sets: 3,
        reps: 12,
        rest: "60 sec",
      },
    ],

    "Fat Loss": [
      {
        exercise: "Burpees",
        sets: 4,
        reps: 15,
        rest: "45 sec",
      },
      {
        exercise: "Mountain Climbers",
        sets: 4,
        reps: 20,
        rest: "45 sec",
      },
      {
        exercise: "Jump Rope",
        sets: 5,
        reps: "2 min",
        rest: "30 sec",
      },
      {
        exercise: "Push Ups",
        sets: 4,
        reps: 15,
        rest: "45 sec",
      },
      {
        exercise: "Running",
        sets: 1,
        reps: "20 min",
        rest: "-",
      },
    ],

    Maintenance: [
      {
        exercise: "Squats",
        sets: 3,
        reps: 10,
        rest: "60 sec",
      },
      {
        exercise: "Bench Press",
        sets: 3,
        reps: 10,
        rest: "60 sec",
      },
      {
        exercise: "Lat Pulldown",
        sets: 3,
        reps: 10,
        rest: "60 sec",
      },
      {
        exercise: "Walking",
        sets: 1,
        reps: "30 min",
        rest: "-",
      },
    ],
  };

  const weeklyPlan = [
    { day: "Mon", workout: "Chest + Triceps" },
    { day: "Tue", workout: "Back + Biceps" },
    { day: "Wed", workout: "Legs" },
    { day: "Thu", workout: "Shoulders" },
    { day: "Fri", workout: "Arms + Core" },
    { day: "Sat", workout: "Cardio" },
    { day: "Sun", workout: "Recovery" },
  ];

  const todayWorkout = useMemo(() => plans[goal], [goal]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-16">

        <div className="mb-12">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-cyan-400 font-semibold">
              AI Workout Planner
            </span>
          </div>

          <h1 className="mt-6 text-5xl lg:text-6xl font-black">
            Build Your Perfect
            <span className="text-cyan-400"> Workout Plan</span>
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-slate-400">
            Generate a structured workout routine based on your fitness goal,
            experience level, available equipment and workout duration.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Workout Preferences
            </h2>

            <div className="space-y-5">

              <div>
                <label className="block mb-2 text-slate-400">
                  Goal
                </label>

                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
                >
                  <option>Muscle Gain</option>
                  <option>Fat Loss</option>
                  <option>Maintenance</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-slate-400">
                  Experience
                </label>

                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-slate-400">
                  Equipment
                </label>

                <select
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
                >
                  <option>Gym</option>
                  <option>Home</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-slate-400">
                  Duration
                </label>

                <input
                  type="range"
                  min="30"
                  max="120"
                  step="15"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full"
                />

                <p className="mt-2 text-cyan-400 font-semibold">
                  {duration} Minutes
                </p>
              </div>
                            <button
                className="
                  mt-4
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  py-4
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                <div className="flex items-center justify-center gap-2">
                  <Brain size={20} />
                  Generate AI Workout
                  <ChevronRight size={18} />
                </div>
              </button>

            </div>

          </div>

          {/* RIGHT SECTION */}

          <div className="lg:col-span-2 space-y-8">

            {/* AI SUMMARY */}

            <div className="rounded-3xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 p-8">

              <p className="uppercase tracking-[3px] text-sm opacity-90">
                AI Workout Summary
              </p>

              <h2 className="mt-2 text-5xl font-black">
                {goal}
              </h2>

              <p className="mt-4 max-w-2xl text-lg opacity-90">
                Personalized workout based on your goal, experience,
                equipment and training duration.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-4">

                <SummaryCard
                  icon={<CalendarDays size={20} />}
                  title="Workout Days"
                  value="5 Days"
                />

                <SummaryCard
                  icon={<Clock3 size={20} />}
                  title="Duration"
                  value={`${duration} Min`}
                />

                <SummaryCard
                  icon={<Flame size={20} />}
                  title="Calories"
                  value="450 kcal"
                />

                <SummaryCard
                  icon={<Timer size={20} />}
                  title="Rest"
                  value="60-90 sec"
                />

              </div>

            </div>

            {/* WEEKLY PLAN */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <div className="mb-6 flex items-center gap-3">

                <CalendarDays className="text-cyan-400" />

                <h2 className="text-2xl font-bold">
                  Weekly Training Split
                </h2>

              </div>

              <div className="grid gap-4 md:grid-cols-2">

                {weeklyPlan.map((day, index) => (

                  <div
                    key={index}
                    className="
                      rounded-2xl
                      border
                      border-slate-800
                      bg-slate-950
                      p-5
                      transition
                      hover:border-cyan-500
                    "
                  >

                    <p className="font-semibold text-cyan-400">
                      {day.day}
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      {day.workout}
                    </h3>

                  </div>

                ))}

              </div>

            </div>

            {/* TODAY'S EXERCISES */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <div className="mb-6 flex items-center gap-3">

                <Dumbbell className="text-cyan-400" />

                <h2 className="text-2xl font-bold">
                  Today's Exercises
                </h2>

              </div>

              <div className="space-y-4">

                {todayWorkout.map((item, index) => (

                  <ExerciseCard
                    key={index}
                    exercise={item.exercise}
                    sets={item.sets}
                    reps={item.reps}
                    rest={item.rest}
                  />

                ))}

              </div>

            </div>
                        {/* AI RECOMMENDATIONS */}

            <div className="grid lg:grid-cols-2 gap-8">

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

                <div className="flex items-center gap-3 mb-6">

                  <Brain className="text-cyan-400" />

                  <h2 className="text-2xl font-bold">
                    AI Recommendations
                  </h2>

                </div>

                <div className="space-y-4">

                  <Recommendation
                    icon={<Target size={18} />}
                    text="Increase weight gradually every 1–2 weeks while maintaining proper form."
                  />

                  <Recommendation
                    icon={<Flame size={18} />}
                    text="Consume protein within 60 minutes after training."
                  />

                  <Recommendation
                    icon={<ShieldCheck size={18} />}
                    text="Train each muscle group twice every week for better growth."
                  />

                  <Recommendation
                    icon={<Brain size={18} />}
                    text="Track every workout to ensure progressive overload."
                  />

                </div>

              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

                <div className="flex items-center gap-3 mb-6">

                  <Sparkles className="text-cyan-400" />

                  <h2 className="text-2xl font-bold">
                    Recovery Tips
                  </h2>

                </div>

                <div className="space-y-4">

                  <Recommendation
                    icon={<Timer size={18} />}
                    text="Sleep at least 7–9 hours every night."
                  />

                  <Recommendation
                    icon={<Flame size={18} />}
                    text="Drink 3–4 litres of water throughout the day."
                  />

                  <Recommendation
                    icon={<Dumbbell size={18} />}
                    text="Take one complete recovery day every week."
                  />

                  <Recommendation
                    icon={<Brain size={18} />}
                    text="Stretch after every workout to reduce soreness."
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

/* ----------------------------- */

function SummaryCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
      <div className="mb-3">{icon}</div>
      <p className="text-sm opacity-80">{title}</p>
      <h3 className="mt-2 text-2xl font-bold">{value}</h3>
    </div>
  );
}

function ExerciseCard({
  exercise,
  sets,
  reps,
  rest,
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-cyan-500">

      <div>

        <h3 className="text-xl font-bold">
          {exercise}
        </h3>

        <p className="mt-2 text-slate-400">
          {sets} Sets • {reps} Reps
        </p>

      </div>

      <div className="text-right">

        <p className="text-sm text-slate-500">
          Rest
        </p>

        <p className="font-semibold text-cyan-400">
          {rest}
        </p>

      </div>

    </div>
  );
}

function Recommendation({
  icon,
  text,
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-slate-950 p-4">

      <div className="mt-1 text-cyan-400">
        {icon}
      </div>

      <p className="text-slate-300">
        {text}
      </p>

    </div>
  );
}