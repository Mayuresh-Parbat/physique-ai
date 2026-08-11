import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Dumbbell,
  Check,
  Clock3,
  Flame,
  RotateCcw,
  Trophy,
  ArrowLeft,
  LayoutDashboard,
} from "lucide-react";

function WorkoutTracker() {
  const workout = [
    {
      exercise: "Bench Press",
      sets: 4,
      reps: 8,
      weight: "80 kg",
    },
    {
      exercise: "Incline Dumbbell Press",
      sets: 3,
      reps: 10,
      weight: "25 kg",
    },
    {
      exercise: "Cable Fly",
      sets: 3,
      reps: 12,
      weight: "20 kg",
    },
    {
      exercise: "Tricep Pushdown",
      sets: 4,
      reps: 12,
      weight: "35 kg",
    },
  ];

  const totalSets = useMemo(() => {
    return workout.reduce((total, item) => total + item.sets, 0);
  }, [workout]);

  const [completedSets, setCompletedSets] = useState({});

  const [workoutFinished, setWorkoutFinished] = useState(false);

  const completedCount = Object.values(completedSets).filter(
    Boolean
  ).length;

  const progress =
    totalSets === 0
      ? 0
      : Math.round((completedCount / totalSets) * 100);

  const toggleSet = (exerciseIndex, setIndex) => {
    if (workoutFinished) return;

    const key = `${exerciseIndex}-${setIndex}`;

    setCompletedSets((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const resetWorkout = () => {
    setCompletedSets({});
    setWorkoutFinished(false);
  };

  const finishWorkout = () => {
    if (completedCount !== totalSets) return;

    setWorkoutFinished(true);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* =========================================================
          TOP NAVIGATION
      ========================================================= */}

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
            className="text-xl font-bold tracking-tight"
          >
            Physique
            <span className="text-cyan-400">
              AI
            </span>
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition"
          >
            <LayoutDashboard size={17} />

            <span className="hidden sm:inline">
              Dashboard
            </span>
          </Link>

        </div>

      </header>


      {/* =========================================================
          MAIN
      ========================================================= */}

      <main className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">

        {/* =======================================================
            PAGE HEADER
        ======================================================= */}

        <section className="mb-7">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

            <div>

              <div className="flex items-center gap-2 text-cyan-400 mb-2">

                <Dumbbell size={18} />

                <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Training Session
                </span>

              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                Chest + Triceps
              </h1>

              <p className="text-slate-400 mt-2 text-base sm:text-lg">
                Complete each set and track your workout progress.
              </p>

            </div>

            <button
              onClick={resetWorkout}
              className="self-start lg:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900/70 text-slate-300 hover:text-white hover:border-slate-600 transition"
            >
              <RotateCcw size={16} />

              Reset Workout
            </button>

          </div>

        </section>


        {/* =======================================================
            STAT CARDS
        ======================================================= */}

        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-5">

          <WorkoutStat
            icon={<Dumbbell size={20} />}
            label="Exercises"
            value={workout.length}
          />

          <WorkoutStat
            icon={<Check size={20} />}
            label="Completed Sets"
            value={`${completedCount}/${totalSets}`}
          />

          <WorkoutStat
            icon={<Clock3 size={20} />}
            label="Duration"
            value="75 min"
          />

          <WorkoutStat
            icon={<Flame size={20} />}
            label="Est. Calories"
            value="540"
          />

        </section>


        {/* =======================================================
            PROGRESS
        ======================================================= */}

        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 mb-5">

          <div className="flex items-end justify-between gap-4 mb-3">

            <div>

              <p className="text-sm text-slate-400">
                Workout Progress
              </p>

              <p className="text-xl font-bold mt-1">
                {progress}% complete
              </p>

            </div>

            <p className="text-sm text-slate-500">
              {completedCount} of {totalSets} sets
            </p>

          </div>

          <div className="h-3 bg-slate-800 rounded-full overflow-hidden">

            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
            />

          </div>

        </section>


        {/* =======================================================
            EXERCISES
        ======================================================= */}

        {!workoutFinished && (

          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 overflow-hidden">

            <div className="px-5 sm:px-7 py-5 border-b border-slate-800 flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  Today's Exercises
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Tap a set when you complete it.
                </p>

              </div>

              <div className="hidden sm:flex items-center gap-2 text-sm text-slate-400">

                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />

                Active Session

              </div>

            </div>


            <div>

              {workout.map((item, exerciseIndex) => {

                const exerciseCompleted = Array.from(
                  { length: item.sets },
                  (_, index) =>
                    completedSets[`${exerciseIndex}-${index}`]
                ).filter(Boolean).length;

                return (
                  <ExerciseRow
                    key={item.exercise}
                    item={item}
                    exerciseIndex={exerciseIndex}
                    completedSets={completedSets}
                    exerciseCompleted={exerciseCompleted}
                    toggleSet={toggleSet}
                  />
                );
              })}

            </div>

          </section>

        )}


        {/* =======================================================
            BOTTOM AREA
        ======================================================= */}

        <section className="mt-5">

          <AnimatePresence mode="wait">

            {/* =================================================
                COMPLETED STATE
            ================================================= */}

            {workoutFinished ? (

              <CompletionCard
                totalSets={totalSets}
                resetWorkout={resetWorkout}
              />

            ) : (

              /* ===============================================
                 READY TO FINISH STATE
              =============================================== */

              <motion.div
                key="finish"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-900/50 p-5 sm:p-6"
              >

                <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

                  <div>

                    <h3 className="text-xl font-bold">
                      Ready to finish?
                    </h3>

                    <p className="text-sm text-slate-400 mt-1">
                      Complete all sets before finishing the workout.
                    </p>

                  </div>

                  <button
                    onClick={finishWorkout}
                    disabled={completedCount !== totalSets}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition ${
                      completedCount === totalSets
                        ? "bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/20"
                        : "bg-slate-800 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    <Trophy size={18} />

                    Finish Workout
                  </button>

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </section>

      </main>

    </div>
  );
}


/* =============================================================
   WORKOUT STAT
============================================================= */

function WorkoutStat({
  icon,
  label,
  value,
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.2,
      }}
      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
    >

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center text-cyan-400">
          {icon}
        </div>

        <p className="text-sm text-slate-400">
          {label}
        </p>

      </div>

      <p className="text-3xl font-bold mt-4">
        {value}
      </p>

    </motion.div>
  );
}


/* =============================================================
   EXERCISE ROW
============================================================= */

function ExerciseRow({
  item,
  exerciseIndex,
  completedSets,
  exerciseCompleted,
  toggleSet,
}) {
  return (
    <div className="border-b border-slate-800 last:border-b-0">

      <div className="p-5 sm:p-6">

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">

          {/* Exercise information */}

          <div className="flex items-start gap-4">

            <div className="w-11 h-11 shrink-0 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">

              <Dumbbell size={19} />

            </div>

            <div>

              <h3 className="text-lg sm:text-xl font-bold">
                {item.exercise}
              </h3>

              <p className="text-sm text-slate-400 mt-1">
                {item.reps} reps · {item.weight}
              </p>

              <p className="text-xs text-slate-500 mt-1">
                {exerciseCompleted}/{item.sets} sets completed
              </p>

            </div>

          </div>


          {/* Set buttons */}

          <div className="flex flex-wrap gap-2">

            {Array.from(
              { length: item.sets },
              (_, setIndex) => {

                const key = `${exerciseIndex}-${setIndex}`;

                const completed = completedSets[key];

                return (
                  <SetButton
                    key={key}
                    setNumber={setIndex + 1}
                    completed={completed}
                    onClick={() =>
                      toggleSet(
                        exerciseIndex,
                        setIndex
                      )
                    }
                  />
                );
              }
            )}

          </div>

        </div>


        {/* Exercise progress */}

        <div className="mt-4 h-1.5 rounded-full bg-slate-800 overflow-hidden">

          <motion.div
            className="h-full rounded-full bg-cyan-400"
            initial={{ width: 0 }}
            animate={{
              width: `${
                item.sets === 0
                  ? 0
                  : (exerciseCompleted / item.sets) * 100
              }%`,
            }}
            transition={{
              duration: 0.3,
            }}
          />

        </div>

      </div>

    </div>
  );
}


/* =============================================================
   SET BUTTON
============================================================= */

function SetButton({
  setNumber,
  completed,
  onClick,
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.92 }}
      whileHover={{
        y: -2,
      }}
      className={`relative w-[62px] h-[62px] rounded-2xl border transition ${
        completed
          ? "bg-cyan-400 text-black border-cyan-300 shadow-lg shadow-cyan-400/20"
          : "bg-slate-950 border-slate-700 text-slate-300 hover:border-cyan-400/60 hover:text-white"
      }`}
    >

      <span className="block text-[10px] uppercase tracking-wider opacity-60">
        Set
      </span>

      <span className="block text-lg font-bold mt-0.5">
        {setNumber}
      </span>

      {completed && (

        <motion.span
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          className="absolute -right-1.5 -top-1.5 w-5 h-5 rounded-full bg-green-400 text-black flex items-center justify-center border-2 border-[#050816]"
        >
          <Check size={11} strokeWidth={3} />
        </motion.span>

      )}

    </motion.button>
  );
}


/* =============================================================
   COMPLETION CARD
============================================================= */

function CompletionCard({
  totalSets,
  resetWorkout,
}) {
  const particles = [
    { left: "8%", delay: 0.05, x: -35, y: -80 },
    { left: "16%", delay: 0.12, x: 25, y: -110 },
    { left: "27%", delay: 0.2, x: -15, y: -65 },
    { left: "38%", delay: 0.08, x: 40, y: -120 },
    { left: "50%", delay: 0.15, x: -20, y: -100 },
    { left: "62%", delay: 0.22, x: 35, y: -70 },
    { left: "73%", delay: 0.1, x: -30, y: -115 },
    { left: "84%", delay: 0.18, x: 20, y: -85 },
    { left: "93%", delay: 0.06, x: -25, y: -105 },
  ];

  return (
    <motion.div
      key="completed"
      initial={{
        opacity: 0,
        scale: 0.94,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.96,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10 p-8 sm:p-10 lg:p-12 text-center shadow-2xl shadow-cyan-500/10"
    >

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 0.22,
          scale: 1.5,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute left-1/2 top-0 -translate-x-1/2 w-72 h-72 rounded-full bg-cyan-400 blur-3xl pointer-events-none"
      />


      {/* =====================================================
          CONFETTI
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {particles.map((particle, index) => (

          <motion.span
            key={index}
            initial={{
              opacity: 0,
              x: 0,
              y: 80,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: particle.x,
              y: particle.y,
              scale: [0, 1, 1, 0.5],
              rotate: 180 + index * 25,
            }}
            transition={{
              duration: 1.7,
              delay: particle.delay,
              ease: "easeOut",
            }}
            style={{
              left: particle.left,
              top: "45%",
            }}
            className={`absolute w-2.5 h-2.5 rounded-sm ${
              index % 3 === 0
                ? "bg-cyan-400"
                : index % 3 === 1
                ? "bg-blue-400"
                : "bg-green-400"
            }`}
          />

        ))}

      </div>


      {/* =====================================================
          TROPHY
      ===================================================== */}

      <motion.div
        initial={{
          scale: 0,
          rotate: -20,
        }}
        animate={{
          scale: [0, 1.15, 1],
          rotate: [-20, 8, 0],
        }}
        transition={{
          duration: 0.75,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        className="relative mx-auto w-24 h-24 rounded-full bg-green-500/10 border border-green-400/20 flex items-center justify-center shadow-lg shadow-green-500/10"
      >

        <Trophy
          size={44}
          className="text-green-400"
          strokeWidth={1.8}
        />

      </motion.div>


      {/* =====================================================
          TITLE
      ===================================================== */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.25,
        }}
        className="relative text-3xl sm:text-4xl lg:text-5xl font-black mt-7"
      >
        Workout Completed
        <span className="ml-2">
          🎉
        </span>
      </motion.h2>


      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.35,
        }}
        className="relative text-slate-400 mt-3 text-base sm:text-lg"
      >
        Excellent work. You completed all {totalSets} sets.
      </motion.p>


      {/* =====================================================
          COMPLETION STATS
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.45,
        }}
        className="relative grid grid-cols-3 max-w-xl mx-auto gap-3 mt-8"
      >

        <CompletionStat
          value={totalSets}
          label="Sets"
        />

        <CompletionStat
          value="540"
          label="Calories"
        />

        <CompletionStat
          value="75"
          label="Minutes"
        />

      </motion.div>


      {/* =====================================================
          BUTTONS
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.55,
        }}
        className="relative flex flex-col sm:flex-row justify-center gap-3 mt-8"
      >

        <Link
          to="/dashboard"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/10"
        >
          <LayoutDashboard size={17} />

          Back to Dashboard
        </Link>

        <button
          onClick={resetWorkout}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition"
        >
          <RotateCcw size={17} />

          Start Again
        </button>

      </motion.div>

    </motion.div>
  );
}


/* =============================================================
   COMPLETION STAT
============================================================= */

function CompletionStat({
  value,
  label,
}) {
  return (
    <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">

      <p className="text-2xl sm:text-3xl font-bold text-white">
        {value}
      </p>

      <p className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-[0.15em]">
        {label}
      </p>

    </div>
  );
}


export default WorkoutTracker;