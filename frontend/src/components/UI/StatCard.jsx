export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-[#0B1120]
        p-6
        hover:border-cyan-500/40
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="flex justify-between items-start">

        <div>
          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

          {subtitle && (
            <p className="text-cyan-400 text-sm mt-2">
              {subtitle}
            </p>
          )}
        </div>

        <div className="text-cyan-400">
          {icon}
        </div>

      </div>
    </div>
  );
}