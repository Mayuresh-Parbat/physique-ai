import { motion } from "framer-motion";

function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-250px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center px-20">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-xl"
        >

          <p className="text-cyan-400 uppercase tracking-[0.4em] font-semibold mb-8 text-sm">
            AI FITNESS PLATFORM
          </p>

          <h1 className="text-7xl font-black leading-none mb-8">
            Physique{" "}
            <span className="text-cyan-400">
              AI
            </span>
          </h1>

          <p className="text-slate-400 text-xl leading-relaxed mb-10">
            Personalized fitness intelligence powered by AI,
            body analysis, smart nutrition planning,
            and adaptive workout systems.
          </p>

          <img
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200"
            alt="Fitness"
            className="rounded-3xl border border-white/10 shadow-xl"
          />

        </motion.div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 lg:px-20 pt-24 relative z-10">
        {children}
      </div>

    </div>
  );
}

export default AuthLayout;