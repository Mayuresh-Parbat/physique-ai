import DashboardLayout from "../layouts/DashboardLayout";
import {
  Brain,
  Flame,
  Activity,
  Droplets,
  Dumbbell,
  TrendingUp,
  Moon,
  Trophy,
} from "lucide-react";

function Dashboard() {
  return (
    <DashboardLayout>
      {/* HEADER */}

      <div className="mb-10">
        <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-3">
          Physique AI Dashboard
        </p>

        <h1 className="text-5xl font-bold mb-2">
          Welcome back, Mayuresh 👋
        </h1>

        <p className="text-slate-400 text-lg">
          Your AI-powered fitness insights for today.
        </p>
      </div>

      {/* TOP CARDS */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">

        <StatCard
          title="Weight"
          value="76 kg"
          icon={<Activity size={22} />}
          change="-1.2kg"
        />

        <StatCard
          title="Body Fat"
          value="18%"
          icon={<TrendingUp size={22} />}
          change="-2%"
        />

        <StatCard
          title="Calories"
          value="2350"
          icon={<Flame size={22} />}
          change="+220"
        />

        <StatCard
          title="AI Score"
          value="87"
          icon={<Brain size={22} />}
          change="+8%"
        />

      </div>

      {/* MAIN SECTION */}

      <div className="grid lg:grid-cols-3 gap-6 mb-8">

        {/* CHART */}

        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              Weekly Progress
            </h2>

            <span className="text-cyan-400">
              Last 7 Days
            </span>
          </div>

          <div className="h-80 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center">
            <p className="text-slate-500 text-lg">
              Chart Integration Here
            </p>
          </div>

        </div>

        {/* AI COACH */}

        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8">

          <div className="flex items-center gap-3 mb-8">
            <Brain className="text-cyan-400" />
            <h2 className="text-2xl font-bold">
              AI Coach
            </h2>
          </div>

          <div className="space-y-4">

            <Tip
              icon="🥩"
              text="Protein intake is 18g below target"
            />

            <Tip
              icon="💪"
              text="Strength increased by 6%"
            />

            <Tip
              icon="😴"
              text="Recovery score is excellent"
            />

            <Tip
              icon="🔥"
              text="Calorie burn exceeded goal"
            />

          </div>

        </div>

      </div>

      {/* PROGRESS */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">

        <ProgressCard
          title="Water Intake"
          value={75}
          amount="3 / 4 L"
          icon={<Droplets />}
        />

        <ProgressCard
          title="Protein Goal"
          value={82}
          amount="152 g"
          icon={<Flame />}
        />

        <ProgressCard
          title="Sleep"
          value={91}
          amount="7.8 hrs"
          icon={<Moon />}
        />

        <ProgressCard
          title="Streak"
          value={100}
          amount="18 Days"
          icon={<Trophy />}
        />

      </div>

      {/* WORKOUT + ACTIVITY */}

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <div className="flex items-center gap-3 mb-6">
            <Dumbbell className="text-cyan-400" />
            <h2 className="text-2xl font-bold">
              Today's Workout
            </h2>
          </div>

          <h3 className="text-3xl font-bold mb-3">
            Chest + Triceps
          </h3>

          <p className="text-slate-400 mb-6">
            Estimated duration: 75 minutes
          </p>

          <button className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl text-black font-bold">
            Start Workout
          </button>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-5">

            <ActivityItem
              title="Chest Workout Completed"
              time="2 hours ago"
            />

            <ActivityItem
              title="Hit Protein Goal"
              time="Today"
            />

            <ActivityItem
              title="Walked 9,000 Steps"
              time="Morning"
            />

            <ActivityItem
              title="Body Fat Reduced"
              time="This Week"
            />

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

/* COMPONENTS */

function StatCard({ title, value, icon, change }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500/30 transition">

      <div className="flex justify-between mb-5">
        <p className="text-slate-400">{title}</p>

        <div className="text-cyan-400">
          {icon}
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-2">
        {value}
      </h2>

      <p className="text-green-400 text-sm">
        {change}
      </p>

    </div>
  );
}

function ProgressCard({
  title,
  amount,
  value,
  icon,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="flex justify-between mb-4">

        <div>
          <p className="text-slate-400">
            {title}
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {amount}
          </h3>
        </div>

        <div className="text-cyan-400">
          {icon}
        </div>

      </div>

      <div className="h-3 bg-slate-800 rounded-full">

        <div
          className="h-3 bg-cyan-400 rounded-full"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}

function Tip({ icon, text }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 flex gap-3 items-center">
      <span>{icon}</span>
      <p>{text}</p>
    </div>
  );
}

function ActivityItem({
  title,
  time,
}) {
  return (
    <div className="flex gap-4">

      <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2" />

      <div>
        <h4 className="font-semibold">
          {title}
        </h4>

        <p className="text-slate-400 text-sm">
          {time}
        </p>
      </div>

    </div>
  );
}

export default Dashboard;