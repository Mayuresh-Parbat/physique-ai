import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      <Navbar />

      <section className="relative flex items-center justify-center min-h-[90vh] px-6">

        {/* Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl text-center">

          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-6">
            AI Powered Fitness Revolution
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
            Transform Your Body <br />

            <span className="text-cyan-400">
              With AI Power
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
            Personalized workout plans, smart nutrition tracking,
            body analysis, and AI-driven fitness recommendations —
            all in one powerful platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-10 py-4 rounded-2xl font-bold text-lg transition duration-300 shadow-lg shadow-cyan-500/20">
              Get Started
            </button>

            <button className="border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 px-10 py-4 rounded-2xl font-bold text-lg transition duration-300">
              Explore Features
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;