import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  User,
  Ruler,
  Weight,
  Activity,
  Brain,
  Sparkles,
  ChevronRight,
  Target,
} from "lucide-react";

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

  const protein = Math.round(weight * 2);
  const carbs = Math.round(weight * 4);
  const fats = Math.round(weight * 0.9);
  const water = (weight * 0.04).toFixed(1);

  const healthScore =
    bmi >= 18.5 && bmi <= 24.9 ? 92 : 78;

  const bmiStatus =
    bmi < 18.5
      ? "Underweight"
      : bmi < 25
      ? "Healthy"
      : bmi < 30
      ? "Overweight"
      : "Obese";

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-36 pb-20">

        {/* HERO */}

        <div className="mb-14">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10">

            <Sparkles
              className="text-cyan-400"
              size={16}
            />

            <span className="text-cyan-400 font-semibold text-sm">
              AI Powered Body Analysis
            </span>

          </div>

          <h1 className="text-6xl font-black mt-6 leading-tight">

            Analyze Your Body

            <span className="text-cyan-400">
              {" "}Like A Professional
            </span>

          </h1>

          <p className="text-slate-400 text-lg mt-6 max-w-3xl">

            Get your BMI, calories,
            protein target,
            body type,
            hydration,
            health score,
            and AI-powered recommendations.

          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT PANEL */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Personal Information
            </h2>

            <div className="space-y-6">

              <InputField
                icon={<User size={18} />}
                label="Age"
                value={age}
                setValue={setAge}
              />

              <InputField
                icon={<Ruler size={18} />}
                label="Height (cm)"
                value={height}
                setValue={setHeight}
              />

              <InputField
                icon={<Weight size={18} />}
                label="Weight (kg)"
                value={weight}
                setValue={setWeight}
              />

              <div>

                <label className="flex items-center gap-2 mb-3">

                  <User
                    size={18}
                    className="text-cyan-400"
                  />

                  Gender

                </label>

                <select
                  value={gender}
                  onChange={(e) =>
                    setGender(e.target.value)
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>

              </div>

              <div>

                <label className="flex items-center gap-2 mb-3">

                  <Activity
                    size={18}
                    className="text-cyan-400"
                  />

                  Activity Level

                </label>

                <select
                  value={activity}
                  onChange={(e) =>
                    setActivity(e.target.value)
                  }
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
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
              >

                <Brain size={20} />

                Generate AI Report

                <ChevronRight size={18} />

              </button>

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div className="space-y-6">

            <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8">

              <p className="opacity-90">
                AI Health Score
              </p>

              <h2 className="text-7xl font-black mt-2">
                {healthScore}
              </h2>

              <p className="mt-3">
                Excellent Condition
              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <Metric
                title="BMI"
                value={bmi}
              />

              <Metric
                title="Status"
                value={bmiStatus}
              />

              <Metric
                title="Protein"
                value={`${protein} g`}
              />

              <Metric
                title="Water"
                value={`${water} L`}
              />

            </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Daily Nutrition
              </h2>

              <div className="grid md:grid-cols-3 gap-4">

                <Metric
                  title="Maintenance"
                  value={`${maintenanceCalories} kcal`}
                />

                <Metric
                  title="Fat Loss"
                  value={`${fatLossCalories} kcal`}
                />

                <Metric
                  title="Muscle Gain"
                  value={`${muscleGainCalories} kcal`}
                />

              </div>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Daily Macros
              </h2>

              <div className="space-y-5">

                <MacroBar
                  title="Protein"
                  value={protein}
                  max={220}
                  color="bg-cyan-400"
                />

                <MacroBar
                  title="Carbohydrates"
                  value={carbs}
                  max={400}
                  color="bg-orange-400"
                />

                <MacroBar
                  title="Healthy Fats"
                  value={fats}
                  max={100}
                  color="bg-pink-400"
                />

              </div>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-6">

                <Target
                  className="text-cyan-400"
                  size={22}
                />

                <h2 className="text-2xl font-bold">
                  AI Recommendations
                </h2>

              </div>

              <div className="space-y-4">

                <Recommendation
                  text={`Consume around ${protein}g protein daily for optimal muscle recovery.`}
                />

                <Recommendation
                  text="Train with progressive overload 4-5 days per week."
                />

                <Recommendation
                  text={`Drink at least ${water} litres of water daily.`}
                />

                <Recommendation
                  text="Aim for 7-8 hours of quality sleep every night."
                />

                <Recommendation
                  text="Track your body measurements every two weeks."
                />

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>

  );
}

function InputField({
  icon,
  label,
  value,
  setValue,
}) {
  return (

    <div>

      <label className="flex items-center gap-2 mb-3">

        <span className="text-cyan-400">

          {icon}

        </span>

        {label}

      </label>

      <input
        type="number"
        value={value}
        onChange={(e) =>
          setValue(Number(e.target.value))
        }
        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
      />

    </div>

  );
}

function Metric({
  title,
  value,
}) {
  return (

    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500 transition">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {value}
      </h3>

    </div>

  );
}

function MacroBar({
  title,
  value,
  max,
  color,
}) {

  const percent = Math.min(
    (value / max) * 100,
    100
  );

  return (

    <div>

      <div className="flex justify-between mb-2">

        <span>
          {title}
        </span>

        <span className="text-cyan-400">
          {value} g
        </span>

      </div>

      <div className="h-3 rounded-full bg-slate-800">

        <div
          className={`h-3 rounded-full ${color}`}
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

    </div>

  );
}

function Recommendation({
  text,
}) {

  return (

    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 hover:border-cyan-500 transition">

      {text}

    </div>

  );

}

export default BodyAnalysis;