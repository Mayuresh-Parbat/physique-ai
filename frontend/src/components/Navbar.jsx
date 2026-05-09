import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link
          to="/"
          className="text-4xl font-black text-cyan-400 tracking-tight"
        >
          Physique AI
        </Link>

        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="text-slate-300 hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="text-slate-300 hover:text-cyan-400 transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold transition duration-300"
          >
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;