import { useState } from "react";

import {
  TrendingUp,
  Target,
  Flame,
  Trophy,
  Camera,
  Activity,
  Droplets,
  Brain,
  Scale,
  Calendar,
  Dumbbell,
} from "lucide-react";

export default function Progress() {
  const [stats] = useState({
    currentWeight: 74,
    goalWeight: 70,
    bodyFat: 18,
    muscleMass: 41,
    workoutStreak: 18,
    water: 3.1,
  });

  const weeklyWeight = [
    { week: "Week 1", weight: 78 },
    { week: "Week 2", weight: 77.5 },
    { week: "Week 3", weight: 76.8 },
    { week: "Week 4", weight: 76 },
    { week: "Week 5", weight: 75.2 },
    { week: "Week 6", weight: 74.5 },
    { week: "Week 7", weight: 74 },
  ];

  const achievements = [
    "🔥 18 Day Workout Streak",
    "💪 Completed 100 Workouts",
    "🏆 Lost 4 kg",
    "🥗 30 Days Healthy Diet",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-cyan-400 mb-4">
            Progress Dashboard
          </p>

          <h1 className="text-6xl font-black">
            Your Fitness Progress
          </h1>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
            Track every milestone with AI-powered analytics and detailed body
            transformation insights.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">

          <ProgressCard
            icon={<Scale className="text-cyan-400" />}
            title="Current Weight"
            value={`${stats.currentWeight} kg`}
          />

          <ProgressCard
            icon={<Target className="text-cyan-400" />}
            title="Goal Weight"
            value={`${stats.goalWeight} kg`}
          />

          <ProgressCard
            icon={<Flame className="text-cyan-400" />}
            title="Workout Streak"
            value={`${stats.workoutStreak} Days`}
          />

        </div>
                <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {/* Weight Progress */}

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">

            <div className="flex items-center gap-3 mb-8">

              <TrendingUp className="text-cyan-400" />

              <h2 className="text-2xl font-bold">
                Weight Progress
              </h2>

            </div>

            <div className="space-y-5">

              {weeklyWeight.map((item) => (

                <div
                  key={item.week}
                  className="flex items-center justify-between"
                >

                  <span className="text-gray-400">
                    {item.week}
                  </span>

                  <div className="flex items-center gap-3">

                    <div className="w-56 h-3 rounded-full bg-slate-800 overflow-hidden">

                      <div
                        className="h-full bg-cyan-400 rounded-full"
                        style={{
                          width: `${(item.weight / 80) * 100}%`,
                        }}
                      />

                    </div>

                    <span className="font-bold">
                      {item.weight} kg
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* AI Insights */}

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">

            <div className="flex items-center gap-3 mb-8">

              <Brain className="text-cyan-400" />

              <h2 className="text-2xl font-bold">
                AI Insights
              </h2>

            </div>

            <div className="space-y-5">

              <InsightCard
                title="Fat Loss"
                text="Excellent progress. Your weekly weight trend indicates sustainable fat loss."
              />

              <InsightCard
                title="Recovery"
                text="Recovery score is good. Continue sleeping at least 7-8 hours."
              />

              <InsightCard
                title="Nutrition"
                text="Protein intake is consistent. Increase vegetables for better micronutrients."
              />

              <InsightCard
                title="Hydration"
                text="You're drinking enough water. Keep it above 3L daily."
              />

            </div>

          </div>

        </div>

        {/* Achievements */}

        <div className="mt-20">

          <div className="flex items-center gap-3 mb-8">

            <Trophy className="text-yellow-400" />

            <h2 className="text-3xl font-bold">
              Achievements
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {achievements.map((item) => (

              <div
                key={item}
                className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-cyan-500 transition"
              >

                <p className="text-lg font-semibold">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Body Metrics */}

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          <MetricCard
            icon={<Activity />}
            title="Body Fat"
            value={`${stats.bodyFat}%`}
          />

          <MetricCard
            icon={<Dumbbell />}
            title="Muscle Mass"
            value={`${stats.muscleMass} kg`}
          />

          <MetricCard
            icon={<Droplets />}
            title="Water Intake"
            value={`${stats.water} L`}
          />

          <MetricCard
            icon={<Calendar />}
            title="This Month"
            value="24 Workouts"
          />

        </div>
              </section>

    </div>
  );
}

/* ========================= COMPONENTS ========================= */

function ProgressCard({ icon, title, value }) {
  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-cyan-500 transition">

      <div className="flex items-center gap-3 text-gray-300">
        {icon}
        <span>{title}</span>
      </div>

      <h3 className="text-4xl font-black mt-6">
        {value}
      </h3>

    </div>
  );
}

function MetricCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-center hover:border-cyan-500 transition">

      <div className="flex justify-center text-cyan-400 mb-4">
        {icon}
      </div>

      <p className="text-gray-400">
        {title}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {value}
      </h3>

    </div>
  );
}

function InsightCard({ title, text }) {
  return (
    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">

      <h3 className="text-cyan-400 font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-400 leading-7">
        {text}
      </p>

    </div>
  );
}