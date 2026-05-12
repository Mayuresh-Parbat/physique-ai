import { motion } from "framer-motion";

function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-250px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Left Section */}
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

          <h1 className="text-8xl font-black leading-none mb-10">
            Physique{" "}
            <span className="text-cyan-400">
              AI
            </span>
          </h1>

          <p className="text-slate-400 text-2xl leading-relaxed mb-12">
            Personalized fitness intelligence powered by AI,
            body analysis, smart nutrition planning, and
            adaptive workout systems.
          </p>

          {/* Stats */}
          <div className="flex gap-10">

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                10K+
              </h3>

              <p className="text-slate-500 mt-2">
                AI Plans Generated
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                95%
              </h3>

              <p className="text-slate-500 mt-2">
                User Satisfaction
              </p>
            </div>

          </div>

        </motion.div>

      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 lg:px-20 relative z-10">
        {children}
      </div>

    </div>
  );
}

export default AuthLayout;