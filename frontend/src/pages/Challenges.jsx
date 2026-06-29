import Navbar from "../components/Navbar";
import {
  Trophy,
  Flame,
  Footprints,
  Droplets,
  Dumbbell,
  Brain,
  Star,
} from "lucide-react";

function Challenges() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* HEADER */}

        <div className="mb-12">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
            <Trophy size={16} />
            Fitness Challenges
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Challenges & Rewards
          </h1>

          <p className="text-slate-400 text-lg">
            Stay consistent, earn rewards and compete with yourself.
          </p>

        </div>

        {/* DAILY CHALLENGES */}

        <section className="mb-12">

          <h2 className="text-2xl font-bold mb-6">
            Daily Challenges
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <ChallengeCard
              icon={<Footprints />}
              title="10,000 Steps"
              progress={78}
              value="7800 / 10000"
            />

            <ChallengeCard
              icon={<Droplets />}
              title="Water Intake"
              progress={75}
              value="3 / 4 Litres"
            />

            <ChallengeCard
              icon={<Flame />}
              title="Protein Goal"
              progress={84}
              value="152 / 180 g"
            />

            <ChallengeCard
              icon={<Dumbbell />}
              title="Workout"
              progress={100}
              value="Completed"
            />

          </div>

        </section>

        {/* WEEKLY */}

        <section className="mb-12">

          <h2 className="text-2xl font-bold mb-6">
            Weekly Challenges
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">

            <WeeklyCard
              title="Workout 5 Days"
              progress={80}
              current="4 / 5"
            />

            <WeeklyCard
              title="Burn Calories"
              progress={70}
              current="2800 / 3500"
            />

            <WeeklyCard
              title="Maintain Streak"
              progress={72}
              current="5 / 7"
            />

          </div>

        </section>

        {/* REWARDS + AI */}

        <div className="grid lg:grid-cols-2 gap-6 mb-12">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-6">

              <Star className="text-yellow-400" />

              <h2 className="text-2xl font-bold">
                Achievements
              </h2>

            </div>

            <div className="space-y-4">

              <Badge
                emoji="🥉"
                title="Bronze Athlete"
              />

              <Badge
                emoji="🥈"
                title="Silver Warrior"
              />

              <Badge
                emoji="🥇"
                title="Elite Physique"
              />

            </div>

          </div>

          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-6">

              <Brain />

              <h2 className="text-2xl font-bold">
                AI Challenge Recommendation
              </h2>

            </div>

            <div className="space-y-3">

              <p>✓ Workout 5 days this week</p>

              <p>✓ Hit 160g protein daily</p>

              <p>✓ Walk 10,000 steps</p>

              <p>✓ Sleep above 7.5 hours</p>

            </div>

          </div>

        </div>

        {/* LEADERBOARD */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Leaderboard
          </h2>

          <div className="space-y-4">

            <Leader
              rank="1"
              name="Mayuresh"
              xp="4250"
            />

            <Leader
              rank="2"
              name="Alex"
              xp="3980"
            />

            <Leader
              rank="3"
              name="Rahul"
              xp="3760"
            />

          </div>

        </div>

      </div>
    </div>
  );
}

function ChallengeCard({
  icon,
  title,
  progress,
  value,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="flex justify-between mb-5">

        <div className="text-cyan-400">
          {icon}
        </div>

        <p>{progress}%</p>

      </div>

      <h3 className="font-bold text-lg mb-2">
        {title}
      </h3>

      <p className="text-slate-400 mb-4">
        {value}
      </p>

      <div className="h-3 bg-slate-800 rounded-full">

        <div
          className="h-3 bg-cyan-400 rounded-full"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}

function WeeklyCard({
  title,
  progress,
  current,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <h3 className="font-bold mb-3">
        {title}
      </h3>

      <p className="text-slate-400 mb-4">
        {current}
      </p>

      <div className="h-3 bg-slate-800 rounded-full">

        <div
          className="h-3 bg-green-500 rounded-full"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}

function Badge({
  emoji,
  title,
}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 flex items-center gap-4">

      <div className="text-3xl">
        {emoji}
      </div>

      <div className="font-semibold">
        {title}
      </div>

    </div>
  );
}

function Leader({
  rank,
  name,
  xp,
}) {
  return (
    <div className="flex justify-between bg-slate-800 rounded-2xl p-4">

      <div>
        #{rank} {name}
      </div>

      <div className="text-cyan-400">
        {xp} XP
      </div>

    </div>
  );
}

export default Challenges;