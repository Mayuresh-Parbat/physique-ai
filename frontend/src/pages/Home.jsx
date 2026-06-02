import { Link } from "react-router-dom";
import {
  Dumbbell,
  Brain,
  Activity,
  LineChart,
} from "lucide-react";

 function Home() {
  return (
    <div className="bg-[#050816] text-white">

      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20241007/pngtree-gym-motivation-bold-typography-and-fitness-icons-inspire-in-the-image_16284008.jpg"
          alt="gym"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">

          <p className="uppercase tracking-[8px] text-cyan-400 text-sm mb-6">
            AI Powered Fitness Platform
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
            Train Smarter
            <br />
            With AI
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Personalized workouts, nutrition planning,
            body analysis and progress tracking powered
            by artificial intelligence.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">

            <button className="px-8 py-4 rounded-full bg-cyan-400 text-black font-bold text-lg hover:scale-105 transition">
              Start Free
            </button>

            <button className="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition text-lg">
              Watch Demo
            </button>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h2 className="text-5xl font-black text-cyan-400">
              10K+
            </h2>
            <p className="text-gray-400 mt-3">
              Active Users
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-black text-cyan-400">
              95%
            </h2>
            <p className="text-gray-400 mt-3">
              Goal Success Rate
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-black text-cyan-400">
              500K+
            </h2>
            <p className="text-gray-400 mt-3">
              Workouts Generated
            </p>
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-16">
            Everything You Need
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-[#0d1328] p-8 rounded-3xl hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold mb-4">
                AI Workouts
              </h3>
              <p className="text-gray-400">
                Adaptive workout plans tailored to your goals.
              </p>
            </div>

            <div className="bg-[#0d1328] p-8 rounded-3xl hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold mb-4">
                Nutrition
              </h3>
              <p className="text-gray-400">
                Smart meal planning and macro tracking.
              </p>
            </div>

            <div className="bg-[#0d1328] p-8 rounded-3xl hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold mb-4">
                Body Analysis
              </h3>
              <p className="text-gray-400">
                AI-powered body composition insights.
              </p>
            </div>

            <div className="bg-[#0d1328] p-8 rounded-3xl hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold mb-4">
                Progress Tracking
              </h3>
              <p className="text-gray-400">
                Monitor growth with advanced analytics.
              </p>
            </div>

          </div>

        </div>

      </section>
      <section className="py-40 px-6">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    <div>
      <img
        src="https://st2.depositphotos.com/1100414/7469/i/450/depositphotos_74696339-Silhouette-of-a-strong-fighter.jpg"
        alt=""
        className="rounded-3xl"
      />
    </div>

    <div>

      <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
        AI Body Analysis
      </p>

      <h2 className="text-5xl font-black mb-6">
        Your Personal Fitness Coach
      </h2>

      <p className="text-gray-400 text-lg leading-8 mb-8">
        Upload progress photos, track body composition,
        receive workout recommendations and get AI-powered
        insights tailored to your goals.
      </p>

      <button className="bg-cyan-400 text-black px-8 py-4 rounded-full font-bold">
        Learn More
      </button>

    </div>

  </div>

</section>

    </div>
  );
}

export default Home;