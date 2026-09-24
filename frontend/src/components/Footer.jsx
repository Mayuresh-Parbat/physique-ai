import { Link } from "react-router-dom";
import {
  Dumbbell,
  ArrowUpRight,
  Mail,
} from "lucide-react";

export default function Footer() {
  const productLinks = [
    { name: "Body Analysis", path: "/body-analysis" },
    { name: "Workout Plan", path: "/workout-plan" },
    { name: "Diet Plan", path: "/diet-plan" },
    { name: "Progress", path: "/progress" },
  ];

  const platformLinks = [
    { name: "Workout Tracker", path: "/workout-tracker" },
    { name: "Challenges", path: "/challenges" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <footer className="bg-[#030712] text-white border-t border-white/10">

      {/* MAIN FOOTER */}

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-14 lg:gap-20">

          {/* BRAND */}

          <div className="max-w-sm">

            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >

              <div className="w-11 h-11 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition">

                <Dumbbell
                  size={22}
                  className="text-cyan-400"
                />

              </div>

              <span className="text-3xl font-black tracking-tight">
                Physique
                <span className="text-cyan-400">
                  AI
                </span>
              </span>

            </Link>


            <p className="mt-7 text-slate-400 leading-7 text-[15px]">
              Your intelligent fitness companion for
              personalized workouts, nutrition,
              body insights and everyday progress.
            </p>


            <a
              href="mailto:support@physiqueai.com"
              className="inline-flex items-center gap-3 mt-7 text-sm text-slate-300 hover:text-cyan-400 transition"
            >

              <Mail size={17} />

              <span>
                support@physiqueai.com
              </span>

            </a>

          </div>


          {/* PRODUCT */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[3px] text-white mb-7">
              Product
            </h3>

            <div className="space-y-4">

              {productLinks.map((link) => (

                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center gap-1 text-slate-400 hover:text-white transition"
                >

                  <span>
                    {link.name}
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-cyan-400 transition"
                  />

                </Link>

              ))}

            </div>

          </div>


          {/* PLATFORM */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[3px] text-white mb-7">
              Platform
            </h3>

            <div className="space-y-4">

              {platformLinks.map((link) => (

                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center gap-1 text-slate-400 hover:text-white transition"
                >

                  <span>
                    {link.name}
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-cyan-400 transition"
                  />

                </Link>

              ))}

            </div>

          </div>
          
          {/* CONNECT */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[3px] text-white mb-7">
              Connect
            </h3>

            <p className="text-slate-400 text-sm leading-6 max-w-xs">
              Follow PhysiqueAI and stay connected
              with the latest fitness updates.
            </p>


            <div className="flex items-center gap-3 mt-7">

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 text-sm font-bold hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition"
              >
                IG
              </a>


              {/* LinkedIn */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 text-sm font-bold hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition"
              >
                in
              </a>
                            {/* GitHub */}

              <a
                href="#"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 text-sm font-bold hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition"
              >
                GH
              </a>

            </div>

          </div>

        </div>

      </div>
      {/* BOTTOM BAR */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-slate-500">
              © 2026 PhysiqueAI. All rights reserved.
            </p>


            <div className="flex items-center gap-6 text-sm">

              <Link
                to="/"
                className="text-slate-500 hover:text-white transition"
              >
                Privacy
              </Link>

              <Link
                to="/"
                className="text-slate-500 hover:text-white transition"
              >
                Terms
              </Link>

              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Back to top ↑
              </button>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}




