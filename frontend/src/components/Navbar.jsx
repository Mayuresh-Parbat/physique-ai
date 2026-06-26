import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">

      <div className="max-w-[1400px] mx-auto h-16 px-6 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold tracking-tight"
        >
          Physique
          <span className="text-cyan-400">
            AI
          </span>
        </Link>

        <div className="flex gap-8">

  <Link to="/">Home</Link>

  <Link to="/body-analysis">
    Body Analysis
  </Link>

  <Link to="/workout-tracker">
    Workout Tracker
  </Link>

  <Link to="/diet-plan">
    Diet Plan
  </Link>

  <Link to="/workout-plan">
    Workout Plan
  </Link>

  <Link to="/dashboard">
    Dashboard
  </Link>

  <Link to="/login">
    Login
  </Link>


          <Link
            to="/register"
            className="
              px-4
              py-2
              rounded-xl
              bg-cyan-500
              text-black
              font-semibold
              hover:bg-cyan-400
              transition
            "
          >
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;