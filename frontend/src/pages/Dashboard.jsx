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
import ProgressChart from "../components/ui/ProgressChart";
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

      <div className="grid lg:grid-cols-3 gap-6 mb-8">

        <div className="bg-slate-900 rounded-3xl p-8">
          <CircularProgress
            value={87}
            label="Fitness Score"
          />
        </div>

        <div className="bg-slate-900 rounded-3xl p-8">
          <CircularProgress
            value={74}
            label="Recovery"
          />
        </div>

        <div className="bg-slate-900 rounded-3xl p-8">
          <CircularProgress
            value={91}
            label="Consistency"
          />
        </div>

      </div>

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

export default Dashboard;