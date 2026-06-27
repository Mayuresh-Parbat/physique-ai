import DashboardLayout from "../layouts/DashboardLayout";
import {
  Bell,
  Brain,
  Flame,
  Footprints,
  Moon,
  Trophy,
} from "lucide-react";

import CircularProgress from "../components/ui/CircularProgress";
import ProgressChart from "../components/UI/Progresscard";
import ActivityFeed from "../components/ui/ActivityFeed";
import AIInsights from "../components/ui/AIInsights";

function Dashboard() {
  return (
    <DashboardLayout>
      {/* HEADER */}

      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            Welcome Back, Mayuresh 👋
          </h1>

          <p className="text-slate-400 mt-2">
            Your fitness journey is improving.
          </p>
        </div>

        <Bell className="text-slate-400" />
      </div>

      {/* TOP STATS */}

      <div className="grid lg:grid-cols-4 gap-6 mb-8">

        <StatCard
          icon={<Flame />}
          title="Calories"
          value="2350"
        />

        <StatCard
          icon={<Footprints />}
          title="Steps"
          value="9,245"
        />

        <StatCard
          icon={<Moon />}
          title="Sleep"
          value="7.8h"
        />

        <StatCard
          icon={<Trophy />}
          title="Streak"
          value="18 Days"
        />

      </div>

      {/* BODY SCORE */}

  
    

      {/* CHART + AI */}

      <div className="grid lg:grid-cols-3 gap-6 mb-8">

        <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Weight Progress
          </h2>

          <ProgressChart />

        </div>

        <div className="bg-slate-900 rounded-3xl p-6">

          <div className="flex gap-3 items-center mb-6">

            <Brain className="text-cyan-400" />

            <h2 className="text-2xl font-bold">
              AI Coach
            </h2>

          </div>

          <AIInsights />

        </div>

      </div>

      {/* RECENT ACTIVITY */}

      <div className="bg-slate-900 rounded-3xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Recent Activity
        </h2>

        <ActivityFeed />

      </div>

    </DashboardLayout>
  );
}


function AIReadinessCard() {
  return (
    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-3xl p-6 backdrop-blur-xl">

      <div className="flex justify-between items-center mb-4">

        <div>
          <p className="text-slate-400 text-sm">
            AI Readiness Score
          </p>

          <h2 className="text-4xl font-bold mt-2">
            92
          </h2>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl">
          🧠
        </div>

      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span>Goal Progress</span>
          <span>92%</span>
        </div>

        <div className="h-2 bg-slate-800 rounded-full">
          <div
            className="h-2 bg-cyan-400 rounded-full"
            style={{ width: "92%" }}
          />
        </div>
      </div>

      <p className="text-slate-300 text-sm">
        Your consistency, nutrition and recovery metrics
        indicate excellent progress toward your fitness goals.
      </p>

    </div>
  );
}






function StatCard({
  icon,
  title,
  value,
}) {
  return (
    <div
      className="
        bg-slate-900
        rounded-3xl
        p-6
        border
        border-slate-800
        hover:border-cyan-500
        transition
      "
    >
      <div className="flex justify-between mb-5">

        <div className="text-cyan-400">
          {icon}
        </div>

        <p className="text-slate-400">
          {title}
        </p>

      </div>

      <h2 className="text-4xl font-bold">
        {value}
      </h2>
    </div>
  );
}

function ProgressCard({
  title,
  value,
}) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

      <div className="flex justify-between mb-4">

        <p className="text-slate-400">
          {title}
        </p>

        <p className="font-bold">
          {value}%
        </p>

      </div>

      <div className="h-3 bg-slate-800 rounded-full">

        <div
          className="h-3 rounded-full bg-cyan-400"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}

export default Dashboard;