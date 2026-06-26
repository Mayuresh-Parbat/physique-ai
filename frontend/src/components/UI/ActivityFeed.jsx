export default function ActivityFeed() {
  const activities = [
    "Completed Chest Workout",
    "Hit Protein Goal",
    "Walked 9,200 Steps",
    "Body Fat Reduced",
  ];

  return (
    <div className="space-y-4">
      {activities.map((item, index) => (
        <div
          key={index}
          className="
            flex
            items-center
            gap-4
            bg-slate-800
            rounded-xl
            p-4
          "
        >
          <div className="w-3 h-3 rounded-full bg-cyan-400" />

          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}