import { Link } from "react-router-dom";
import { Dumbbell, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-slate-800 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-2 mb-5">

              <Dumbbell className="text-cyan-400" size={30} />

              <h2 className="text-3xl font-black text-white">
                Physique<span className="text-cyan-400">AI</span>
              </h2>

            </div>

            <p className="text-gray-400 leading-7">
              AI-powered fitness platform helping you achieve your dream physique with smart workouts, nutrition and progress tracking.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>

              <li><Link to="/body-analysis" className="hover:text-cyan-400">Body Analysis</Link></li>

              <li><Link to="/workout-plan" className="hover:text-cyan-400">Workout Plan</Link></li>

              <li><Link to="/diet-plan" className="hover:text-cyan-400">Diet Plan</Link></li>

            </ul>

          </div>

          {/* Features */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Features
            </h3>

            <ul className="space-y-3">

              <li>AI Workout Generator</li>

              <li>Body Analysis</li>

              <li>Nutrition Planning</li>

              <li>Progress Tracking</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <Mail className="text-cyan-400" size={18} />
                support@physiqueai.com
              </div>

              <div className="flex gap-3">
                <Phone className="text-cyan-400" size={18} />
                +91 98765 43210
              </div>

              <div className="flex gap-3">
                <MapPin className="text-cyan-400" size={18} />
                pune, India
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-gray-500">

        © {new Date().getFullYear()} PhysiqueAI. All Rights Reserved.

      </div>

    </footer>
  );
}