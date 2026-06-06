import {
  Activity,
  Dumbbell,
  TrendingUp,
  Flame,
  Brain,
  User,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <aside className="w-72 border-r border-white/10 bg-[#070b16] p-8">

        <h1 className="text-3xl font-black mb-14">
          Physique
          <span className="text-cyan-400">AI</span>
        </h1>

        <nav className="space-y-3">

          <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-cyan-500 text-black font-semibold">
            <Activity size={20} />
            Dashboard
          </button>

          <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5">
            <User size={20} />
            Body Analysis
          </button>

          <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5">
            <Dumbbell size={20} />
            Workouts
          </button>

          <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5">
            <Flame size={20} />
            Nutrition
          </button>

        </nav>

      </aside>

      {/* MAIN */}
      <main className="flex-1 p-10">

        {/* HERO */}
        <div className="mb-10">

          <p className="text-cyan-400 tracking-[0.3em] uppercase mb-3">
            Dashboard
          </p>

          <h1 className="text-6xl font-black mb-4">
            Welcome Back 👋
          </h1>

          <p className="text-slate-400 text-xl">
            Your AI coach generated 3 new insights today.
          </p>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-6 mb-10">

          <div className="bg-[#0c1224] p-8 rounded-3xl">
            <p className="text-slate-400">Weight</p>
            <h2 className="text-5xl font-black mt-2">78kg</h2>
          </div>

          <div className="bg-[#0c1224] p-8 rounded-3xl">
            <p className="text-slate-400">Body Fat</p>
            <h2 className="text-5xl font-black text-cyan-400 mt-2">
              18%
            </h2>
          </div>

          <div className="bg-[#0c1224] p-8 rounded-3xl">
            <p className="text-slate-400">Calories</p>
            <h2 className="text-5xl font-black mt-2">
              2350
            </h2>
          </div>

          <div className="bg-[#0c1224] p-8 rounded-3xl">
            <p className="text-slate-400">AI Score</p>
            <h2 className="text-5xl font-black text-green-400 mt-2">
              87
            </h2>
          </div>

        </div>

        {/* CHART + AI COACH */}
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-[#0c1224] rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Weight Progress
            </h2>

            <div className="h-[350px] flex items-center justify-center text-slate-500">
              Chart Goes Here
            </div>

          </div>

          <div className="bg-[#0c1224] rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-6">
              <Brain className="text-cyan-400" />
              <h2 className="text-3xl font-bold">
                AI Coach
              </h2>
            </div>

            <div className="space-y-4">

              <div className="bg-black/30 p-5 rounded-2xl">
                Chest development improving.
              </div>

              <div className="bg-black/30 p-5 rounded-2xl">
                Increase protein to 156g.
              </div>

              <div className="bg-black/30 p-5 rounded-2xl">
                Add one extra upper chest exercise.
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;