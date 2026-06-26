export default function GradientCard({
  title,
  value,
  subtitle,
}) {
  return (
    <div
      className="
        rounded-3xl
        p-8
        bg-gradient-to-br
        from-cyan-500
        via-blue-500
        to-indigo-600
        shadow-2xl
      "
    >
      <p className="text-white/80">
        {title}
      </p>

      <h1 className="text-6xl font-black mt-2">
        {value}
      </h1>

      <p className="mt-3 text-white/90">
        {subtitle}
      </p>
    </div>
  );
}