import { useState } from "react";
import Navbar from "../components/Navbar";

function BodyAnalysis() {
  const [age, setAge] = useState(21);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(76);
  const [gender, setGender] = useState("Male");
  const [activity, setActivity] = useState("Moderate");

  const bmi = (
    weight /
    ((height / 100) * (height / 100))
  ).toFixed(1);

  const maintenanceCalories = Math.round(weight * 33);
  const fatLossCalories = maintenanceCalories - 500;
  const muscleGainCalories = maintenanceCalories + 300;

  const proteinMin = Math.round(weight * 1.6);
  const proteinOptimal = Math.round(weight * 2);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16">

        {/* HEADER */}

        <div className="mb-12">

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-4">
            Physique AI
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Body Analysis
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            Calculate BMI, calorie requirements, protein targets and receive
            personalized fitness recommendations powered by AI.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT PANEL */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

            <h2 className="text-2xl font-semibold mb-6">
              Body Information
            </h2>

            <div className="space-y-5">

              <InputField
                label="Age"
                value={age}
                setValue={setAge}
              />

              <InputField
                label="Height (cm)"
                value={height}
                setValue={setHeight}
              />

              <InputField
                label="Weight (kg)"
                value={weight}
                setValue={setWeight}
              />

              <div>
                <label className="block mb-2 text-slate-400">
                  Gender
                </label>

                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-slate-400">
                  Activity Level
                </label>

                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
                >
                  <option>Sedentary</option>
                  <option>Light</option>
                  <option>Moderate</option>
                  <option>Active</option>
                  <option>Very Active</option>
                </select>
              </div>

              <button
                className="
                  w-full
                  py-4
                  rounded-xl
                  bg-cyan-500
                  text-black
                  font-semibold
                  hover:bg-cyan-400
                  transition-all
                  duration-300
                "
              >
                Analyze Body
              </button>

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div className="space-y-6">

            {/* FITNESS SCORE */}

            <div className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 rounded-3xl p-8 shadow-2xl">

              <p className="text-sm opacity-90">
                Overall Fitness Score
              </p>

              <h2 className="text-6xl font-black mt-2">
                87
              </h2>

              <p className="mt-2 opacity-90">
                Excellent Progress
              </p>

            </div>

            {/* BODY METRICS */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                Body Metrics
              </h2>

              <div className="grid grid-cols-2 gap-4">

                <Metric title="BMI" value={bmi} />
                <Metric title="Body Fat" value="18%" />
                <Metric title="Height" value={`${height} cm`} />
                <Metric title="Weight" value={`${weight} kg`} />

              </div>

            </div>

            {/* CALORIES */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                Calories
              </h2>

              <div className="grid md:grid-cols-3 gap-4">

                <Metric
                  title="Maintenance"
                  value={`${maintenanceCalories}`}
                />

                <Metric
                  title="Fat Loss"
                  value={`${fatLossCalories}`}
                />

                <Metric
                  title="Muscle Gain"
                  value={`${muscleGainCalories}`}
                />

              </div>

            </div>

            {/* PROTEIN */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                Protein Targets
              </h2>

              <div className="grid grid-cols-2 gap-4">

                <Metric
                  title="Minimum"
                  value={`${proteinMin} g`}
                />

                <Metric
                  title="Optimal"
                  value={`${proteinOptimal} g`}
                />

              </div>

            </div>

            {/* RECOMMENDATIONS */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                AI Recommendations
              </h2>

              <div className="space-y-3">

                <Recommendation text="💪 Focus on lean muscle gain" />

                <Recommendation
                  text={`🍗 Consume ${proteinOptimal}g protein daily`}
                />

                <Recommendation
                  text="🔥 Follow progressive overload training"
                />

                <Recommendation
                  text="🚶 Walk 8,000–10,000 steps daily"
                />

                <Recommendation
                  text="😴 Sleep 7–8 hours every night"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

function InputField({ label, value, setValue }) {
  return (
    <div>
      <label className="block mb-2 text-slate-400">
        {label}
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="
          w-full
          bg-slate-950
          border
          border-slate-700
          rounded-xl
          px-4
          py-3
          outline-none
          focus:border-cyan-500
        "
      />
    </div>
  );
}

function Metric({ title, value }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="text-xl font-semibold mt-2">
        {value}
      </h3>

    </div>
  );
}

function Recommendation({ text }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
      {text}
    </div>
  );
}

export default BodyAnalysis;