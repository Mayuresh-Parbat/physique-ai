import DashboardLayout from "../layouts/DashboardLayout";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Brain,
  Check,
  ChevronRight,
  Droplets,
  Dumbbell,
  Flame,
  Footprints,
  Moon,
  Plus,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
  Utensils,
  Zap,
} from "lucide-react";

function Dashboard() {
  const weeklyData = [
    { day: "Mon", value: 72 },
    { day: "Tue", value: 78 },
    { day: "Wed", value: 74 },
    { day: "Thu", value: 84 },
    { day: "Fri", value: 88 },
    { day: "Sat", value: 82 },
    { day: "Sun", value: 91 },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <section className="mb-8">

          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6">

            <div>

              <div className="flex items-center gap-2 mb-3">
                <Sparkles
                  size={17}
                  className="text-cyan-400"
                />

                <span className="text-cyan-400 uppercase tracking-[0.22em] text-xs font-semibold">
                  PhysiqueAI • Daily Overview
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                Welcome back, Mayuresh 👋
              </h1>

              <p className="text-slate-400 mt-2 text-base sm:text-lg">
                Here's what your body, training and nutrition look like today.
              </p>

            </div>


            <div className="flex flex-wrap gap-3">

              <Link
                to="/diet-plan"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-400/40 hover:text-white transition"
              >
                <Utensils size={17} />
                Diet Plan
              </Link>

              <Link
                to="/workout-tracker"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition"
              >
                <Dumbbell size={17} />
                Start Workout
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            DAILY STATUS
        ===================================================== */}

        <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

          <StatCard
            title="Current Weight"
            value="76 kg"
            change="-1.2 kg"
            positive
            icon={<Activity size={21} />}
          />

          <StatCard
            title="Body Fat"
            value="18%"
            change="-2% this month"
            positive
            icon={<TrendingDown size={21} />}
          />

          <StatCard
            title="Today's Calories"
            value="2,350"
            change="2,650 target"
            icon={<Flame size={21} />}
          />

          <StatCard
            title="Physique Score"
            value="87"
            change="+8% this month"
            positive
            icon={<Brain size={21} />}
          />

        </section>


        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <section className="grid xl:grid-cols-[1.7fr_1fr] gap-5 mb-6">

          {/* WEEKLY PROGRESS */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-7">

            <div className="flex items-start justify-between gap-4 mb-6">

              <div>

                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-2">
                  Performance
                </p>

                <h2 className="text-2xl font-bold">
                  Weekly Progress
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Your overall activity score over the last 7 days.
                </p>

              </div>

              <div className="text-right">

                <p className="text-3xl font-black text-cyan-400">
                  91
                </p>

                <p className="text-xs text-slate-500">
                  Best day
                </p>

              </div>

            </div>


            {/* CHART */}

            <div className="h-64 flex items-end gap-3 sm:gap-5 border-b border-slate-800 px-2">

              {weeklyData.map((item, index) => (

                <div
                  key={item.day}
                  className="flex-1 h-full flex flex-col justify-end items-center gap-3"
                >

                  <div className="w-full h-full flex items-end">

                    <div
                      className={`w-full rounded-t-xl transition-all duration-500 ${
                        index === weeklyData.length - 1
                          ? "bg-gradient-to-t from-cyan-500 to-cyan-300"
                          : "bg-slate-700 hover:bg-slate-600"
                      }`}
                      style={{
                        height: `${item.value}%`,
                      }}
                      title={`${item.value}%`}
                    />

                  </div>

                  <span className="text-xs text-slate-500 pb-3">
                    {item.day}
                  </span>

                </div>

              ))}

            </div>


            <div className="grid grid-cols-3 gap-3 mt-6">

              <ChartMetric
                label="Avg. Score"
                value="81%"
              />

              <ChartMetric
                label="Workouts"
                value="4 / 5"
              />

              <ChartMetric
                label="Consistency"
                value="91%"
              />

            </div>

          </div>


          {/* AI COACH */}

          <div className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-5 sm:p-7">

            <div className="flex items-start justify-between mb-6">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center">

                  <Brain size={22} />

                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    AI Coach
                  </h2>

                  <p className="text-xs text-slate-500">
                    Today's recommendations
                  </p>

                </div>

              </div>


              <span className="flex items-center gap-1.5 text-xs text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Active
              </span>

            </div>


            <div className="space-y-3">

              <CoachTip
                icon="🥩"
                title="Protein"
                text="You're about 18g below today's target."
                type="warning"
              />

              <CoachTip
                icon="💪"
                title="Strength"
                text="Your recent training performance is trending upward."
                type="positive"
              />

              <CoachTip
                icon="😴"
                title="Recovery"
                text="Your sleep score suggests you're ready to train."
                type="positive"
              />

              <CoachTip
                icon="💧"
                title="Hydration"
                text="Drink another 1L to reach today's target."
                type="warning"
              />

            </div>


            <Link
              to="/diet-plan"
              className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 py-3 text-sm font-semibold transition"
            >
              View Nutrition Recommendations
              <ArrowRight size={16} />
            </Link>

          </div>

        </section>


        {/* =====================================================
            DAILY TRACKING
        ===================================================== */}

        <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

          <ProgressCard
            title="Water"
            amount="3.0 / 4.0 L"
            value={75}
            icon={<Droplets size={20} />}
            action="+250 ml"
          />

          <ProgressCard
            title="Protein"
            amount="134 / 152 g"
            value={88}
            icon={<Flame size={20} />}
            action="+20 g"
          />

          <ProgressCard
            title="Sleep"
            amount="7.8 / 8 hrs"
            value={98}
            icon={<Moon size={20} />}
            action="Excellent"
          />

          <ProgressCard
            title="Steps"
            amount="9,240 / 10k"
            value={92}
            icon={<Footprints size={20} />}
            action="+760"
          />

        </section>


        {/* =====================================================
            TODAY'S PLAN
        ===================================================== */}

        <section className="grid xl:grid-cols-[1.15fr_0.85fr] gap-5 mb-6">

          {/* WORKOUT */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-7">

            <div className="flex items-start justify-between gap-4 mb-6">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                  <Dumbbell size={21} />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Today's Training
                  </p>

                  <h2 className="text-xl font-bold mt-1">
                    Chest + Triceps
                  </h2>

                </div>

              </div>


              <span className="text-xs px-3 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400">
                75 min
              </span>

            </div>


            <div className="grid sm:grid-cols-3 gap-3 mb-6">

              <WorkoutMetric
                label="Exercises"
                value="4"
              />

              <WorkoutMetric
                label="Total Sets"
                value="14"
              />

              <WorkoutMetric
                label="Est. Burn"
                value="540 kcal"
              />

            </div>


            <div className="flex flex-col sm:flex-row gap-3">

              <Link
                to="/workout-tracker"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition"
              >
                <Dumbbell size={17} />
                Continue Workout
              </Link>

              <Link
                to="/workout-plan"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition"
              >
                View Workout Plan
                <ChevronRight size={16} />
              </Link>

            </div>

          </div>


          {/* DAILY READINESS */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-7">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-11 h-11 rounded-xl bg-purple-400/10 text-purple-400 flex items-center justify-center">
                <Zap size={21} />
              </div>

              <div>

                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Recovery
                </p>

                <h2 className="text-xl font-bold">
                  Daily Readiness
                </h2>

              </div>

            </div>


            <div className="flex items-center gap-5 mb-6">

              <div className="relative w-24 h-24 shrink-0">

                <div className="absolute inset-0 rounded-full border-[7px] border-slate-800" />

                <div
                  className="absolute inset-0 rounded-full border-[7px] border-cyan-400"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 88%, 0 88%)",
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">

                  <span className="text-2xl font-black">
                    88
                  </span>

                </div>

              </div>


              <div>

                <p className="text-lg font-bold">
                  Ready to Train
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Good recovery. You can follow today's planned workout.
                </p>

              </div>

            </div>


            <div className="space-y-3">

              <ReadinessRow
                label="Sleep"
                value="7.8 hrs"
                score="Excellent"
              />

              <ReadinessRow
                label="Training Load"
                value="Moderate"
                score="Good"
              />

              <ReadinessRow
                label="Consistency"
                value="18 days"
                score="Excellent"
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            QUICK ACTIONS
        ===================================================== */}

        <section className="mb-6">

          <div className="flex items-center justify-between mb-4">

            <div>

              <h2 className="text-xl font-bold">
                Quick Actions
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Update today's fitness data.
              </p>

            </div>

          </div>


          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

            <QuickAction
              icon={<Droplets size={19} />}
              title="Log Water"
              subtitle="Add intake"
            />

            <QuickAction
              icon={<Utensils size={19} />}
              title="Log Meal"
              subtitle="Track nutrition"
              link="/diet-plan"
            />

            <QuickAction
              icon={<Activity size={19} />}
              title="Body Check"
              subtitle="Update metrics"
              link="/body-analysis"
            />

            <QuickAction
              icon={<Target size={19} />}
              title="View Goals"
              subtitle="Track progress"
            />

          </div>

        </section>


        {/* =====================================================
            ACTIVITY + ACHIEVEMENT
        ===================================================== */}

        <section className="grid xl:grid-cols-2 gap-5 mb-8">

          {/* RECENT ACTIVITY */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-7">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-xl font-bold">
                  Recent Activity
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Your latest actions.
                </p>

              </div>

              <Activity
                size={20}
                className="text-cyan-400"
              />

            </div>


            <div className="space-y-5">

              <ActivityItem
                icon={<Check size={15} />}
                title="Chest Workout Completed"
                time="2 hours ago"
              />

              <ActivityItem
                icon={<Check size={15} />}
                title="Protein Goal Updated"
                time="Today"
              />

              <ActivityItem
                icon={<Footprints size={15} />}
                title="Walked 9,240 Steps"
                time="This morning"
              />

              <ActivityItem
                icon={<TrendingDown size={15} />}
                title="Body Fat Trend Improved"
                time="This week"
              />

            </div>

          </div>


          {/* ACHIEVEMENT */}

          <div className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-slate-900 to-cyan-950/20 p-6 sm:p-7">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-2">
                  Latest Achievement
                </p>

                <h2 className="text-2xl font-black">
                  Consistency Master
                </h2>

                <p className="text-slate-400 mt-2 max-w-md">
                  You've maintained an 18-day fitness streak.
                  Keep the momentum going.
                </p>

              </div>


              <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">

                <Trophy size={28} />

              </div>

            </div>


            <div className="mt-7 flex flex-col sm:flex-row sm:items-end justify-between gap-5">

              <div>

                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  XP Earned
                </p>

                <p className="text-3xl font-black text-green-400 mt-1">
                  +250 XP
                </p>

              </div>


              <Link
                to="/challenges"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold transition"
              >
                View Challenges
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOOTER STATUS
        ===================================================== */}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 border-t border-slate-900 text-xs text-slate-600">

          <span>
            PhysiqueAI • Your fitness command center
          </span>

          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            All systems ready
          </span>

        </div>

      </div>
    </DashboardLayout>
  );
}


/* =============================================================
   STAT CARD
============================================================= */

function StatCard({
  title,
  value,
  icon,
  change,
  positive = false,
}) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-cyan-400/25 transition">

      <div className="flex items-center justify-between mb-5">

        <p className="text-sm text-slate-500">
          {title}
        </p>

        <div className="w-9 h-9 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-400/15 transition">
          {icon}
        </div>

      </div>


      <p className="text-3xl font-black">
        {value}
      </p>


      <div className="flex items-center gap-2 mt-2">

        {positive && (
          <TrendingUp
            size={14}
            className="text-green-400"
          />
        )}

        <span
          className={
            positive
              ? "text-green-400 text-xs"
              : "text-slate-500 text-xs"
          }
        >
          {change}
        </span>

      </div>

    </div>
  );
}


/* =============================================================
   CHART METRIC
============================================================= */

function ChartMetric({
  label,
  value,
}) {
  return (
    <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-3">

      <p className="text-xs text-slate-600">
        {label}
      </p>

      <p className="font-bold mt-1">
        {value}
      </p>

    </div>
  );
}


/* =============================================================
   COACH TIP
============================================================= */

function CoachTip({
  icon,
  title,
  text,
  type,
}) {
  return (
    <div className="flex gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">

      <span className="text-lg">
        {icon}
      </span>

      <div className="min-w-0">

        <div className="flex items-center gap-2">

          <p className="text-sm font-semibold">
            {title}
          </p>

          <span
            className={
              type === "positive"
                ? "text-[10px] text-green-400"
                : "text-[10px] text-yellow-400"
            }
          >
            {type === "positive"
              ? "ON TRACK"
              : "ATTENTION"}
          </span>

        </div>

        <p className="text-xs text-slate-500 mt-1 leading-5">
          {text}
        </p>

      </div>

    </div>
  );
}


/* =============================================================
   PROGRESS CARD
============================================================= */

function ProgressCard({
  title,
  amount,
  value,
  icon,
  action,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-cyan-400/20 transition">

      <div className="flex justify-between items-start mb-5">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <p className="text-xl font-bold mt-1">
            {amount}
          </p>

        </div>

        <div className="w-9 h-9 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
          {icon}
        </div>

      </div>


      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">

        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
          style={{
            width: `${value}%`,
          }}
        />

      </div>


      <div className="flex justify-between items-center mt-3">

        <span className="text-xs text-slate-600">
          {value}% complete
        </span>

        <span className="text-xs text-cyan-400">
          {action}
        </span>

      </div>

    </div>
  );
}


/* =============================================================
   WORKOUT METRIC
============================================================= */

function WorkoutMetric({
  label,
  value,
}) {
  return (
    <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4">

      <p className="text-xs text-slate-600">
        {label}
      </p>

      <p className="font-bold mt-1">
        {value}
      </p>

    </div>
  );
}


/* =============================================================
   READINESS
============================================================= */

function ReadinessRow({
  label,
  value,
  score,
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">

      <div>

        <p className="text-sm text-slate-400">
          {label}
        </p>

        <p className="text-xs text-slate-600 mt-0.5">
          {value}
        </p>

      </div>

      <span className="text-xs text-green-400">
        {score}
      </span>

    </div>
  );
}


/* =============================================================
   QUICK ACTION
============================================================= */

function QuickAction({
  icon,
  title,
  subtitle,
  link,
}) {
  const content = (
    <>
      <div className="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div className="min-w-0 text-left">

        <p className="text-sm font-semibold">
          {title}
        </p>

        <p className="text-xs text-slate-600 mt-0.5">
          {subtitle}
        </p>

      </div>

      <ChevronRight
        size={16}
        className="ml-auto text-slate-600"
      />
    </>
  );

  if (link) {
    return (
      <Link
        to={link}
        className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 hover:border-cyan-400/30 hover:bg-slate-900 transition"
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 hover:border-cyan-400/30 hover:bg-slate-900 transition"
    >
      {content}
    </button>
  );
}


/* =============================================================
   ACTIVITY ITEM
============================================================= */

function ActivityItem({
  icon,
  title,
  time,
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="w-9 h-9 rounded-full bg-cyan-400/10 text-cyan-400 flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div className="flex-1">

        <p className="text-sm font-semibold">
          {title}
        </p>

        <p className="text-xs text-slate-600 mt-1">
          {time}
        </p>

      </div>

      <ChevronRight
        size={16}
        className="text-slate-700"
      />

    </div>
  );
}


export default Dashboard;