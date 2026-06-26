export default function CircularProgress({
  value,
  label,
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">

        <svg
          className="w-32 h-32 rotate-[-90deg]"
          viewBox="0 0 120 120"
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="#1e293b"
            strokeWidth="10"
            fill="none"
          />

          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="#22d3ee"
            strokeWidth="10"
            fill="none"
            strokeDasharray="314"
            strokeDashoffset={
              314 - (314 * value) / 100
            }
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">
            {value}%
          </span>
        </div>

      </div>

      <p className="mt-4 text-slate-400">
        {label}
      </p>
    </div>
  );
}