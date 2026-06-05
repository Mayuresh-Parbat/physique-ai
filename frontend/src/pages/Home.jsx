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

      
      
      <section className="py-40 px-6">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    <div>
      <img
        src="https://st2.depositphotos.com/1100414/7469/i/450/depositphotos_74696339-Silhouette-of-a-strong-fighter.jpg"
        alt=""
        className="rounded-3xl shadow-2xl border border-white/10"
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
<section className="py-32 bg-black">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="text-cyan-400 uppercase tracking-[8px] mb-4">
        Success Stories
      </p>

      <h2 className="text-6xl font-black mb-6">
        Real Transformations
      </h2>

      <p className="text-gray-400 text-xl">
        Thousands of users are changing their bodies using Physique AI.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
        className="rounded-3xl h-[450px] w-full object-cover"
      />

      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
        className="rounded-3xl h-[450px] w-full object-cover"
      />

      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/068/909/594/small/powerful-back-workout-intense-fitness-training-gym-free-photo.jpg"
        className="rounded-3xl h-[450px] w-full object-cover"
      />

    </div>

  </div>

</section>


<section className="py-32 bg-[#050816]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <img
          src="https://img.freepik.com/premium-photo/fitness-fusion-diverse-group-achieving-their-workout-goals-together_1124573-40731.jpg"
          alt=""
          className="rounded-3xl w-full"
        />
      </div>

      <div>

        <p className="text-cyan-400 uppercase tracking-[8px] mb-4">
          AI WORKOUT GENERATION
        </p>

        <h2 className="text-6xl font-black mb-6">
          Workouts Built
          For Your Body
        </h2>

        <p className="text-gray-400 text-xl leading-relaxed mb-8">
          Physique AI creates custom training programs
          based on your body type, goals, recovery,
          and fitness level.
        </p>

        <button className="bg-cyan-400 text-black px-8 py-4 rounded-full font-bold">
          Explore Workouts
        </button>

      </div>

    </div>

  </div>

</section>

    </div>
  );
}

export default Home;