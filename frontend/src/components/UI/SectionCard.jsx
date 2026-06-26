export default function SectionCard({
  title,
  children,
}) {
  return (
    <div
      className="
        bg-[#0B1120]
        border
        border-slate-800
        rounded-3xl
        p-6
        shadow-2xl
      "
    >
      <h2 className="text-xl font-semibold mb-6">
        {title}
      </h2>

      {children}
    </div>
  );
}