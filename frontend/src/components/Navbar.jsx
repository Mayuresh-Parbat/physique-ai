import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-3xl font-black text-white">
          Physique
          <span className="text-cyan-400">AI</span>
        </h1>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8 text-gray-300">

          <Link
            to="/"
            className="hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="hover:text-cyan-400 transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
              bg-cyan-400
              text-black
              px-5
              py-2.5
              rounded-full
              font-semibold
              hover:scale-105
              transition
              duration-300
            "
          >
            Get Started
          </Link>
          <Link to="/body-analysis">
  Body Analysis
</Link>
<Link
  to="/dashboard"
  className="hover:text-cyan-400 transition duration-300"
>
  Dashboard
</Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;