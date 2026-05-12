import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black
        border-b
        border-cyan-500/20
      "
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <h1 className="text-4xl font-black text-cyan-400">
          Physique AI
        </h1>

        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="text-white hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="text-white hover:text-cyan-400 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
              bg-cyan-400
              text-black
              px-5
              py-2
              rounded-full
              font-bold
              hover:scale-105
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