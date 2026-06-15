import DashboardLayout from "../layouts/DashboardLayout";
import {
  Bell,
  Brain,
  TrendingUp,
  Droplets,
  Flame,
  Activity,
} from "lucide-react";

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
            Track your fitness journey with AI-powered insights.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Bell className="text-slate-400" />

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-12 h-12 rounded-full border-2 border-cyan-500"
          />
        </div>

      </div>

      {/* TOP STATS */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">

        <StatCard
          title="Weight"
          value="78 kg"
          icon={<Activity />}
        />

        <StatCard
          title="Body Fat"
          value="18%"
          icon={<TrendingUp />}
        />

        <StatCard
          title="Calories"
          value="2350"
          icon={<Flame />}
        />

        <StatCard
          title="AI Score"
          value="87"
          icon={<Brain />}
        />

      </div>

      {/* MAIN CONTENT */}

      <div className="grid lg:grid-cols-3 gap-6 mb-8">

        {/* CHART */}

        <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-6">

          <h2 className="text-xl font-semibold mb-4">
            Progress Analytics
          </h2>

          <div className="h-80 rounded-2xl border border-slate-700 flex items-center justify-center text-slate-500">
            Chart Integration Here
          </div>

        </div>

        {/* AI COACH */}

        <div className="bg-slate-900 rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-5">
            <Brain className="text-cyan-400" />
            <h2 className="text-xl font-semibold">
              AI Coach
            </h2>
          </div>

          <div className="space-y-4">

            <Tip text="Protein intake is below target." />
            <Tip text="Upper chest development improving." />
            <Tip text="Sleep recovery looks excellent." />

          </div>

        </div>

      </div>

      {/* BOTTOM STATS */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        <SmallCard
          title="Today's Workout"
          value="Chest + Triceps"
        />

        <SmallCard
          title="Water Intake"
          value="3.5 Litres"
        />

        <SmallCard
          title="Protein Goal"
          value="156 g"
        />

        <SmallCard
          title="Current Streak"
          value="18 Days"
        />

      </div>

    </DashboardLayout>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-cyan-500 transition">

      <div className="flex justify-between items-center mb-4">

        <p className="text-slate-400">
          {title}
        </p>

        <div className="text-cyan-400">
          {icon}
        </div>

      </div>

      <h2 className="text-3xl font-bold">
        {value}
      </h2>

    </div>
  );
}

function SmallCard({ title, value }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-5 border border-slate-800">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="text-xl font-semibold mt-2">
        {value}
      </h3>

    </div>
  );
}

function Tip({ text }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 text-slate-300">
      {text}
    </div>
  );
}

export default Dashboard;