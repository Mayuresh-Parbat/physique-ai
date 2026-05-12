import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

function Register() {
  return (
    <AuthLayout>

      <div className="w-full max-w-lg bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 shadow-2xl">

        <h2 className="text-5xl font-black mb-3">
          Create Account
        </h2>

        <p className="text-slate-400 text-lg mb-10">
          Start your AI-powered fitness journey today.
        </p>

        <form className="space-y-6">

          <div>
            <label className="block mb-3 text-slate-300 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block mb-3 text-slate-300 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block mb-3 text-slate-300 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block mb-3 text-slate-300 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition"
            />
          </div>

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-4 rounded-2xl font-bold text-lg transition duration-300 shadow-lg shadow-cyan-500/20"
          >
            Create Account
          </button>

        </form>

        <p className="text-slate-400 mt-8 text-center">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Login
          </Link>

        </p>

      </div>

    </AuthLayout>
  );
}

export default Register;