import { useState } from "react";

function DietPlan() {
  const [weight, setWeight] = useState(76);
  const [goal, setGoal] = useState("Muscle Gain");

  const calories =
    goal === "Muscle Gain"
      ? weight * 37
      : goal === "Fat Loss"
      ? weight * 27
      : weight * 32;

  const protein = Math.round(weight * 2);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-8">
        AI Diet Plan Generator
      </h1>

      <div className="bg-slate-900 rounded-3xl p-8 max-w-3xl">

        <div className="mb-5">

          <label className="block mb-2">
            Weight (kg)
          </label>

          <input
            type="number"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
            className="w-full p-3 rounded-xl bg-slate-800"
          />

        </div>

        <div className="mb-8">

          <label className="block mb-2">
            Goal
          </label>

          <select
            value={goal}
            onChange={(e) =>
              setGoal(e.target.value)
            }
            className="w-full p-3 rounded-xl bg-slate-800"
          >
            <option>Muscle Gain</option>
            <option>Fat Loss</option>
            <option>Maintenance</option>
          </select>

        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">

          <h2 className="text-2xl font-bold mb-4">
            Daily Nutrition Target
          </h2>

          <p>Calories: {Math.round(calories)} kcal</p>

          <p>Protein: {protein} g</p>

        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <MealCard
          title="Breakfast"
          meals={[
            "Oats",
            "Milk",
            "4 Eggs"
          ]}
        />

        <MealCard
          title="Lunch"
          meals={[
            "Rice",
            "Dal",
            "Paneer"
          ]}
        />

        <MealCard
          title="Dinner"
          meals={[
            "Roti",
            "Paneer Bhurji",
            "Salad"
          ]}
        />

      </div>

    </div>
  );
}

function MealCard({ title, meals }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6">

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <ul className="space-y-2">

        {meals.map((meal, index) => (
          <li key={index}>
            • {meal}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default DietPlan;