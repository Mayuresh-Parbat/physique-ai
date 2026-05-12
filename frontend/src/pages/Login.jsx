import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AuthLayout from "../layouts/AuthLayout";

function Login() {
  return (
    <AuthLayout>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-xl"
      >

        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 shadow-2xl">

          <div className="mb-10">

            <h2 className="text-5xl font-black mb-4">
              Welcome Back
            </h2>

            <p className="text-slate-400 text-lg">
              Login to continue your AI fitness journey.
            </p>

          </div>

          <form className="space-y-6">

            <div>
              <label className="block mb-3 text-slate-300 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 focus:bg-white/[0.05] transition duration-300"
              />
            </div>

            <div>
              <label className="block mb-3 text-slate-300 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 focus:bg-white/[0.05] transition duration-300"
              />
            </div>

            <button
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-black py-4 rounded-2xl font-bold text-lg transition duration-300 shadow-lg shadow-cyan-500/20"
            >
              Login
            </button>

          </form>

          <p className="text-slate-500 mt-8 text-center">
            Don’t have an account?{" "}

            <Link
              to="/register"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Create Account
            </Link>

          </p>

        </div>

      </motion.div>

    </AuthLayout>
  );
}

export default Login;