import { motion } from "framer-motion";

import {
  Dumbbell,
  Brain,
  Salad,
  LineChart,
} from "lucide-react";

import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <div className="relative bg-black text-white overflow-hidden">

      {/* Grid Background */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px]" />

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-36">

        <div className="max-w-6xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              uppercase
              tracking-[0.3em]
              text-cyan-400
              font-semibold
              mb-6
              text-sm
            "
          >
            AI Powered Fitness Revolution
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-tight
            "
          >
            Transform Your Body
            <br />

            <span className="text-cyan-400">
              With AI Power
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              text-slate-400
              text-lg
              md:text-xl
              max-w-3xl
              mx-auto
              mt-8
              leading-relaxed
            "
          >
            Personalized workout plans, smart nutrition tracking,
            body analysis, and AI-driven fitness recommendations
            — all in one powerful platform.
          </motion.p>

          {/* Buttons */}
          <div className="flex justify-center gap-5 mt-10 flex-wrap">

            <button
              className="
                bg-cyan-400
                text-black
                px-7 py-3
                rounded-full
                font-bold
                hover:scale-105
                transition
              "
            >
              Get Started
            </button>

            <button
              className="
                border border-white/20
                px-7 py-3
                rounded-full
                font-semibold
                hover:border-cyan-400
                hover:text-cyan-400
                transition
              "
            >
              Explore Features
            </button>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm font-semibold mb-4">
              FEATURES
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Everything You Need
            </h2>

            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              AI-powered tools designed to transform your fitness
              journey with intelligent recommendations and analytics.
            </p>

          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <FeatureCard
              icon={<Dumbbell size={34} />}
              title="AI Workouts"
              description="Adaptive workout plans generated specifically for your body type and goals."
            />

            <FeatureCard
              icon={<Salad size={34} />}
              title="Smart Nutrition"
              description="Personalized meal planning with macro tracking and AI nutrition insights."
            />

            <FeatureCard
              icon={<Brain size={34} />}
              title="Body Analysis"
              description="Advanced body analysis powered by AI-driven metrics and visual intelligence."
            />

            <FeatureCard
              icon={<LineChart size={34} />}
              title="Progress Tracking"
              description="Track performance, body changes, and milestones in real time."
            />

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;