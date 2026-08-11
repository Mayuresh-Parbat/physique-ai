import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Brain,
  Calculator,
  Check,
  ChevronRight,
  Clock3,
  Droplets,
  Flame,
  Leaf,
  RefreshCw,
  Sparkles,
  Target,
  Utensils,
} from "lucide-react";


function DietPlan() {
  /* =========================================================
     USER INPUTS
  ========================================================= */

  const [weight, setWeight] = useState(76);
  const [height, setHeight] = useState(175);
  const [age, setAge] = useState(21);

  const [gender, setGender] = useState("Male");

  const [activity, setActivity] = useState(
    "Moderately Active"
  );

  const [goal, setGoal] = useState("Muscle Gain");

  const [diet, setDiet] = useState("Vegetarian");

  const [mealsPerDay, setMealsPerDay] = useState(4);

  const [budget, setBudget] = useState("Moderate");

  const [cookingTime, setCookingTime] = useState(
    "30 minutes"
  );

  const [avoidFoods, setAvoidFoods] = useState("");

  const [generated, setGenerated] = useState(true);

  const [completedMeals, setCompletedMeals] = useState({});


  /* =========================================================
     CALCULATIONS
  ========================================================= */

  const activityMultiplier = {
    Sedentary: 1.2,
    "Lightly Active": 1.375,
    "Moderately Active": 1.55,
    "Very Active": 1.725,
    "Extremely Active": 1.9,
  };

  const safeWeight = Math.max(
    30,
    Number(weight) || 30
  );

  const safeHeight = Math.max(
    120,
    Number(height) || 120
  );

  const safeAge = Math.max(
    15,
    Number(age) || 15
  );


  const bmr = useMemo(() => {
    const base =
      10 * safeWeight +
      6.25 * safeHeight -
      5 * safeAge;

    return Math.round(
      gender === "Male"
        ? base + 5
        : base - 161
    );
  }, [
    safeWeight,
    safeHeight,
    safeAge,
    gender,
  ]);


  const maintenanceCalories = Math.round(
    bmr *
      (activityMultiplier[activity] || 1.55)
  );


  const targetCalories = useMemo(() => {
    if (goal === "Muscle Gain") {
      return Math.round(
        maintenanceCalories + 250
      );
    }

    if (goal === "Fat Loss") {
      return Math.round(
        maintenanceCalories - 400
      );
    }

    return maintenanceCalories;
  }, [
    maintenanceCalories,
    goal,
  ]);


  const protein = useMemo(() => {
    if (goal === "Muscle Gain") {
      return Math.round(safeWeight * 1.8);
    }

    if (goal === "Fat Loss") {
      return Math.round(safeWeight * 2);
    }

    return Math.round(safeWeight * 1.6);
  }, [
    safeWeight,
    goal,
  ]);


  const fat = Math.round(
    (targetCalories * 0.27) / 9
  );


  const carbs = Math.max(
    0,
    Math.round(
      (targetCalories -
        protein * 4 -
        fat * 9) /
        4
    )
  );


  const water = Math.round(
    safeWeight * 35
  );


  /* =========================================================
     MEAL DATABASE
  ========================================================= */

  const mealDatabase = {
    Vegetarian: {
      breakfast: [
        {
          name: "Protein Oats Bowl",
          foods: [
            "60g oats",
            "250ml milk",
            "Greek yogurt",
            "Chia seeds",
            "Almonds",
          ],
          calories: 520,
          protein: 28,
          carbs: 58,
          fats: 19,
        },
        {
          name: "Paneer Egg Breakfast",
          foods: [
            "2 eggs",
            "100g paneer",
            "2 whole wheat toast",
            "Vegetables",
          ],
          calories: 560,
          protein: 35,
          carbs: 42,
          fats: 26,
        },
        {
          name: "High-Protein Poha",
          foods: [
            "Poha",
            "Peanuts",
            "Greek yogurt",
            "Vegetables",
            "2 eggs",
          ],
          calories: 480,
          protein: 25,
          carbs: 62,
          fats: 15,
        },
      ],

      lunch: [
        {
          name: "Paneer Dal Rice Bowl",
          foods: [
            "150g cooked rice",
            "1 bowl dal",
            "120g paneer",
            "Mixed vegetables",
            "Salad",
          ],
          calories: 690,
          protein: 38,
          carbs: 82,
          fats: 23,
        },
        {
          name: "Rajma Paneer Bowl",
          foods: [
            "Rajma",
            "Rice",
            "100g paneer",
            "Cucumber salad",
          ],
          calories: 650,
          protein: 34,
          carbs: 86,
          fats: 18,
        },
        {
          name: "Roti Paneer Plate",
          foods: [
            "3 rotis",
            "Paneer bhurji",
            "Dal",
            "Mixed vegetables",
          ],
          calories: 670,
          protein: 37,
          carbs: 74,
          fats: 22,
        },
      ],

      snack: [
        {
          name: "Greek Yogurt Protein Bowl",
          foods: [
            "Greek yogurt",
            "Almonds",
            "Seeds",
            "Berries",
          ],
          calories: 350,
          protein: 25,
          carbs: 28,
          fats: 15,
        },
        {
          name: "Egg & Toast Snack",
          foods: [
            "2 boiled eggs",
            "2 whole wheat toast",
            "Curd",
          ],
          calories: 330,
          protein: 22,
          carbs: 30,
          fats: 13,
        },
        {
          name: "Paneer Snack Bowl",
          foods: [
            "100g paneer",
            "Vegetables",
            "Curd",
          ],
          calories: 360,
          protein: 27,
          carbs: 14,
          fats: 22,
        },
      ],

      dinner: [
        {
          name: "Paneer Roti Dinner",
          foods: [
            "3 rotis",
            "Paneer bhurji",
            "Vegetable sabzi",
            "Salad",
          ],
          calories: 620,
          protein: 36,
          carbs: 70,
          fats: 20,
        },
        {
          name: "Dal Rice Dinner",
          foods: [
            "Rice",
            "Dal",
            "Paneer",
            "Mixed vegetables",
            "Salad",
          ],
          calories: 610,
          protein: 34,
          carbs: 78,
          fats: 18,
        },
        {
          name: "High Protein Khichdi",
          foods: [
            "Moong dal",
            "Rice",
            "Paneer",
            "Vegetables",
            "Curd",
          ],
          calories: 590,
          protein: 35,
          carbs: 73,
          fats: 17,
        },
      ],
    },

    "Vegetarian + Eggs": {
      breakfast: [
        {
          name: "Egg & Oats Power Breakfast",
          foods: [
            "60g oats",
            "2 eggs",
            "Greek yogurt",
            "Almonds",
          ],
          calories: 540,
          protein: 32,
          carbs: 50,
          fats: 21,
        },
      ],

      lunch: [
        {
          name: "Egg Paneer Rice Bowl",
          foods: [
            "Rice",
            "2 eggs",
            "Paneer",
            "Dal",
            "Vegetables",
          ],
          calories: 700,
          protein: 42,
          carbs: 78,
          fats: 23,
        },
      ],

      snack: [
        {
          name: "Egg Toast Snack",
          foods: [
            "2 boiled eggs",
            "Whole wheat toast",
            "Curd",
          ],
          calories: 330,
          protein: 22,
          carbs: 30,
          fats: 13,
        },
      ],

      dinner: [
        {
          name: "Egg Paneer Roti Plate",
          foods: [
            "3 rotis",
            "2 eggs",
            "Paneer bhurji",
            "Salad",
          ],
          calories: 650,
          protein: 40,
          carbs: 65,
          fats: 23,
        },
      ],
    },

    "Non-Vegetarian": {
      breakfast: [
        {
          name: "Egg Protein Breakfast",
          foods: [
            "3 eggs",
            "Oats",
            "Greek yogurt",
            "Fruit",
          ],
          calories: 540,
          protein: 34,
          carbs: 52,
          fats: 20,
        },
      ],

      lunch: [
        {
          name: "Chicken Rice Bowl",
          foods: [
            "150g chicken breast",
            "Rice",
            "Vegetables",
            "Salad",
            "Curd",
          ],
          calories: 650,
          protein: 52,
          carbs: 72,
          fats: 15,
        },
      ],

      snack: [
        {
          name: "Chicken Sandwich",
          foods: [
            "Whole wheat bread",
            "Chicken",
            "Vegetables",
            "Curd",
          ],
          calories: 380,
          protein: 31,
          carbs: 38,
          fats: 12,
        },
      ],

      dinner: [
        {
          name: "Chicken Roti Dinner",
          foods: [
            "150g chicken",
            "3 rotis",
            "Vegetable sabzi",
            "Salad",
          ],
          calories: 630,
          protein: 50,
          carbs: 62,
          fats: 17,
        },
      ],
    },
  };


  /* =========================================================
     GENERATE MEALS
  ========================================================= */

  const meals = useMemo(() => {
    const database =
      mealDatabase[diet] ||
      mealDatabase["Vegetarian"];

    return [
      {
        type: "Breakfast",
        time: "08:00 AM",
        data: database.breakfast[0],
      },
      {
        type: "Lunch",
        time: "01:00 PM",
        data: database.lunch[0],
      },
      ...(mealsPerDay >= 4
        ? [
            {
              type: "Snack",
              time: "05:00 PM",
              data: database.snack[0],
            },
          ]
        : []),
      {
        type: "Dinner",
        time: "08:30 PM",
        data: database.dinner[0],
      },
    ];
  }, [
    diet,
    mealsPerDay,
    generated,
  ]);


  /* =========================================================
     ACTIONS
  ========================================================= */

  const generatePlan = () => {
    setCompletedMeals({});
    setGenerated(false);

    setTimeout(() => {
      setGenerated(true);
    }, 150);
  };


  const toggleMeal = (index) => {
    setCompletedMeals((previous) => ({
      ...previous,
      [index]: !previous[index],
    }));
  };


  const completedMealCount =
    Object.values(completedMeals).filter(
      Boolean
    ).length;


  const calorieProgress = Math.min(
    100,
    Math.round(
      (meals.reduce(
        (total, meal) =>
          total + meal.data.calories,
        0
      ) /
        targetCalories) *
        100
    )
  );


  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#050816]/90 backdrop-blur-xl">

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          <Link
            to="/"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition"
          >
            <ArrowLeft size={18} />

            <span className="text-sm font-medium">
              Back to Home
            </span>
          </Link>


          <Link
            to="/"
            className="text-xl font-bold"
          >
            Physique
            <span className="text-cyan-400">
              AI
            </span>
          </Link>


          <Link
            to="/dashboard"
            className="text-sm text-slate-400 hover:text-cyan-400 transition"
          >
            Dashboard
          </Link>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="mb-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <div>

              <div className="flex items-center gap-2 text-cyan-400 mb-3">

                <Brain size={19} />

                <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                  AI Nutrition Intelligence
                </span>

              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                Your Personalized
                <span className="text-cyan-400">
                  {" "}Diet Plan
                </span>
              </h1>

              <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
                Build a nutrition plan around your body,
                training goal, food preferences and daily
                lifestyle.
              </p>

            </div>


            <div className="flex items-center gap-3">

              <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-sm">

                <Sparkles size={16} />

                Personalized Engine

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            PROFILE + TARGET
        =================================================== */}

        <section className="grid xl:grid-cols-[1.05fr_0.95fr] gap-5 mb-6">

          {/* PROFILE */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-7">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-11 h-11 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center">

                <Calculator size={20} />

              </div>

              <div>

                <h2 className="text-xl font-bold">
                  Your Nutrition Profile
                </h2>

                <p className="text-sm text-slate-500">
                  Give PhysiqueAI enough context to personalize your plan.
                </p>

              </div>

            </div>


            <div className="grid sm:grid-cols-2 gap-4">

              <InputField
                label="Weight"
                suffix="kg"
                value={weight}
                setValue={setWeight}
              />

              <InputField
                label="Height"
                suffix="cm"
                value={height}
                setValue={setHeight}
              />

              <InputField
                label="Age"
                suffix="years"
                value={age}
                setValue={setAge}
              />


              <SelectField
                label="Gender"
                value={gender}
                setValue={setGender}
                options={[
                  "Male",
                  "Female",
                ]}
              />


              <SelectField
                label="Activity Level"
                value={activity}
                setValue={setActivity}
                options={[
                  "Sedentary",
                  "Lightly Active",
                  "Moderately Active",
                  "Very Active",
                  "Extremely Active",
                ]}
              />


              <SelectField
                label="Primary Goal"
                value={goal}
                setValue={setGoal}
                options={[
                  "Muscle Gain",
                  "Fat Loss",
                  "Maintenance",
                ]}
              />


              <SelectField
                label="Diet Preference"
                value={diet}
                setValue={setDiet}
                options={[
                  "Vegetarian",
                  "Vegetarian + Eggs",
                  "Non-Vegetarian",
                ]}
              />


              <SelectField
                label="Meals Per Day"
                value={mealsPerDay}
                setValue={setMealsPerDay}
                options={[
                  3,
                  4,
                ]}
              />


              <SelectField
                label="Food Budget"
                value={budget}
                setValue={setBudget}
                options={[
                  "Low",
                  "Moderate",
                  "Flexible",
                ]}
              />


              <SelectField
                label="Cooking Time"
                value={cookingTime}
                setValue={setCookingTime}
                options={[
                  "15 minutes",
                  "30 minutes",
                  "60+ minutes",
                ]}
              />

            </div>


            <div className="mt-4">

              <label className="block text-sm text-slate-400 mb-2">
                Foods to avoid / allergies
              </label>

              <input
                type="text"
                value={avoidFoods}
                onChange={(e) =>
                  setAvoidFoods(e.target.value)
                }
                placeholder="e.g. peanuts, lactose, mushrooms..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 outline-none focus:border-cyan-400/60 transition"
              />

            </div>


            <button
              onClick={generatePlan}
              className="w-full mt-5 inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/10"
            >

              <Sparkles size={18} />

              Generate My AI Diet Plan

            </button>

          </div>


          {/* TARGET PANEL */}

          <div className="space-y-5">

            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10 p-6 sm:p-7">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-400">
                    Recommended Daily Target
                  </p>

                  <h2 className="text-4xl sm:text-5xl font-black mt-2">
                    {targetCalories}
                    <span className="text-lg font-medium text-slate-400 ml-2">
                      kcal
                    </span>
                  </h2>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center">

                  <Flame size={27} />

                </div>

              </div>


              <div className="grid grid-cols-2 gap-3 mt-7">

                <TargetCard
                  label="Protein"
                  value={`${protein} g`}
                  icon={<Target size={16} />}
                />

                <TargetCard
                  label="Carbs"
                  value={`${carbs} g`}
                  icon={<Leaf size={16} />}
                />

                <TargetCard
                  label="Fats"
                  value={`${fat} g`}
                  icon={<Flame size={16} />}
                />

                <TargetCard
                  label="Water"
                  value={`${water} ml`}
                  icon={<Droplets size={16} />}
                />

              </div>

            </div>


            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

              <div className="flex items-center justify-between mb-4">

                <div>

                  <p className="text-sm text-slate-400">
                    Daily Plan Progress
                  </p>

                  <p className="text-xl font-bold mt-1">
                    {completedMealCount}/{meals.length} meals
                  </p>

                </div>

                <span className="text-cyan-400 font-bold">
                  {Math.round(
                    (completedMealCount /
                      meals.length) *
                      100
                  )}%
                </span>

              </div>


              <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      (completedMealCount /
                        meals.length) *
                      100
                    }%`,
                  }}
                />

              </div>


              <div className="flex justify-between mt-4 text-xs text-slate-500">

                <span>
                  Planned calories
                </span>

                <span>
                  {meals.reduce(
                    (total, meal) =>
                      total +
                      meal.data.calories,
                    0
                  )} kcal
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            AI INSIGHTS
        =================================================== */}

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-7 mb-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">

              <Brain size={20} />

            </div>

            <div>

              <h2 className="text-xl font-bold">
                PhysiqueAI Insights
              </h2>

              <p className="text-sm text-slate-500">
                What your current profile suggests
              </p>

            </div>

          </div>


          <div className="grid md:grid-cols-3 gap-4">

            <Insight
              title="Goal"
              text={
                goal === "Muscle Gain"
                  ? "Prioritize adequate calories and protein while supporting resistance training."
                  : goal === "Fat Loss"
                  ? "Use a moderate calorie deficit while keeping protein high."
                  : "Keep intake close to estimated maintenance and monitor trends."
              }
            />

            <Insight
              title="Protein"
              text={`Your starting protein target is approximately ${protein}g/day based on your current body weight and goal.`}
            />

            <Insight
              title="Hydration"
              text={`A starting hydration target is approximately ${water}ml/day. Increase needs when training or sweating heavily.`}
            />

          </div>

        </section>


        {/* ===================================================
            MEAL PLAN
        =================================================== */}

        <section>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">

            <div>

              <div className="flex items-center gap-2 text-cyan-400 mb-2">

                <Utensils size={18} />

                <span className="text-sm font-semibold uppercase tracking-[0.15em]">
                  Today's Nutrition
                </span>

              </div>

              <h2 className="text-3xl sm:text-4xl font-black">
                Your Meal Plan
              </h2>

              <p className="text-slate-500 mt-1">
                Designed around your current profile.
              </p>

            </div>


            <button
              onClick={generatePlan}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-cyan-400/40 transition"
            >

              <RefreshCw size={16} />

              Regenerate

            </button>

          </div>


          <div className="grid lg:grid-cols-2 gap-5">

            {generated &&
              meals.map((meal, index) => (

                <MealCard
                  key={`${meal.type}-${index}`}
                  meal={meal}
                  completed={
                    completedMeals[index]
                  }
                  onComplete={() =>
                    toggleMeal(index)
                  }
                />

              ))}

          </div>

        </section>


        {/* ===================================================
            FOOTNOTE
        =================================================== */}

        <div className="mt-8 text-xs text-slate-600 leading-relaxed max-w-4xl">

          PhysiqueAI provides estimated nutrition targets for
          general fitness planning. Individual calorie needs,
          medical conditions, allergies, medications and eating
          disorders require assessment by an appropriately
          qualified healthcare or nutrition professional.

        </div>

      </main>

    </div>
  );
}


/* =============================================================
   INPUT FIELD
============================================================= */

function InputField({
  label,
  suffix,
  value,
  setValue,
}) {
  return (
    <div>

      <label className="block text-sm text-slate-400 mb-2">
        {label}
      </label>

      <div className="relative">

        <input
          type="number"
          value={value}
          onChange={(e) =>
            setValue(e.target.value)
          }
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pr-16 text-white outline-none focus:border-cyan-400/60 transition"
        />

        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-600">
          {suffix}
        </span>

      </div>

    </div>
  );
}


/* =============================================================
   SELECT FIELD
============================================================= */

function SelectField({
  label,
  value,
  setValue,
  options,
}) {
  return (
    <div>

      <label className="block text-sm text-slate-400 mb-2">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) =>
          setValue(
            typeof options[0] === "number"
              ? Number(e.target.value)
              : e.target.value
          )
        }
        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400/60 transition"
      >

        {options.map((option) => (

          <option
            key={option}
            value={option}
          >
            {option}
          </option>

        ))}

      </select>

    </div>
  );
}


/* =============================================================
   TARGET CARD
============================================================= */

function TargetCard({
  label,
  value,
  icon,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">

      <div className="flex items-center gap-2 text-cyan-400">

        {icon}

        <span className="text-xs text-slate-500">
          {label}
        </span>

      </div>

      <p className="text-xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}


/* =============================================================
   INSIGHT
============================================================= */

function Insight({
  title,
  text,
}) {
  return (
    <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-5">

      <div className="flex items-center gap-2 mb-3">

        <Sparkles
          size={16}
          className="text-cyan-400"
        />

        <h3 className="font-semibold">
          {title}
        </h3>

      </div>

      <p className="text-sm text-slate-400 leading-6">
        {text}
      </p>

    </div>
  );
}


/* =============================================================
   MEAL CARD
============================================================= */

function MealCard({
  meal,
  completed,
  onComplete,
}) {
  const data = meal.data;

  return (
    <div
      className={`rounded-3xl border overflow-hidden transition ${
        completed
          ? "border-green-500/30 bg-green-500/5"
          : "border-slate-800 bg-slate-900/70"
      }`}
    >

      <div className="p-6">

        <div className="flex items-start justify-between gap-4">

          <div>

            <div className="flex items-center gap-2 text-cyan-400 mb-2">

              <Clock3 size={15} />

              <span className="text-xs uppercase tracking-wider">
                {meal.time}
              </span>

            </div>

            <h3 className="text-2xl font-bold">
              {meal.type}
            </h3>

          </div>


          <button
            onClick={onComplete}
            className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${
              completed
                ? "bg-green-500 border-green-400 text-black"
                : "bg-slate-950 border-slate-700 text-slate-500 hover:text-white hover:border-cyan-400/50"
            }`}
          >

            <Check size={18} />

          </button>

        </div>


        <div className="mt-5">

          <h4 className="text-lg font-semibold">
            {data.name}
          </h4>

          <div className="space-y-2 mt-4">

            {data.foods.map(
              (food, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >

                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />

                  {food}

                </div>

              )
            )}

          </div>

        </div>


        {/* MACROS */}

        <div className="grid grid-cols-4 gap-2 mt-6">

          <Macro
            label="Calories"
            value={data.calories}
          />

          <Macro
            label="Protein"
            value={`${data.protein}g`}
          />

          <Macro
            label="Carbs"
            value={`${data.carbs}g`}
          />

          <Macro
            label="Fat"
            value={`${data.fats}g`}
          />

        </div>


        <button
          onClick={onComplete}
          className={`w-full mt-5 py-3 rounded-xl font-semibold transition ${
            completed
              ? "bg-green-500/10 text-green-400 border border-green-500/20"
              : "bg-slate-800 text-slate-300 hover:bg-cyan-500 hover:text-black"
          }`}
        >

          {completed
            ? "Meal Completed ✓"
            : "Mark Meal Complete"}

        </button>

      </div>

    </div>
  );
}


/* =============================================================
   MACRO
============================================================= */

function Macro({
  label,
  value,
}) {
  return (
    <div className="rounded-xl bg-slate-950 border border-slate-800 p-3 text-center">

      <p className="text-[10px] text-slate-600 uppercase">
        {label}
      </p>

      <p className="text-sm font-bold mt-1">
        {value}
      </p>

    </div>
  );
}


export default DietPlan;