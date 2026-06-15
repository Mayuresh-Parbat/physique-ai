import {
  LayoutDashboard,
  Activity,
  Dumbbell,
  Salad,
  User,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0A0F1E] border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <div className="px-6 py-8 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-white">
          Physique
          <span className="text-cyan-400">AI</span>
        </h1>

        <p className="text-slate-500 text-sm mt-1">
          Fitness Intelligence
        </p>

      </div>

      {/* Menu */}

      <nav className="flex-1 px-4 py-6">

        <p className="text-xs uppercase tracking-widest text-slate-500 px-3 mb-4">
          Main Menu
        </p>

        <div className="space-y-2">

          <SidebarItem
            icon={<LayoutDashboard size={18} />}
            text="Dashboard"
            active
          />

          <SidebarItem
            icon={<Activity size={18} />}
            text="Body Analysis"
          />

          <SidebarItem
            icon={<Dumbbell size={18} />}
            text="Workouts"
          />

          <SidebarItem
            icon={<Salad size={18} />}
            text="Nutrition"
          />

          <SidebarItem
            icon={<User size={18} />}
            text="Profile"
          />

        </div>

      </nav>

      {/* Bottom Section */}

      <div className="p-4 border-t border-slate-800">

        <button className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-slate-900 transition">
          <Settings size={18} />
          Settings
        </button>

        <div className="mt-4 bg-slate-900 rounded-2xl p-4">

          <div className="flex items-center gap-3">

            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-10 h-10 rounded-full"
            />

            <div>
              <p className="font-medium text-white">
                Mayuresh
              </p>

              <p className="text-xs text-slate-400">
                Premium Member
              </p>
            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}

function SidebarItem({ icon, text, active }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
        active
          ? "bg-cyan-500 text-black font-semibold"
          : "text-slate-300 hover:bg-slate-900"
      }`}
    >
      {icon}
      {text}
    </button>
  );
}

export default Sidebar;