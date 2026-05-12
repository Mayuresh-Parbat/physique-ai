import { motion } from "framer-motion";

function FeatureCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.3 }}
      className="
        bg-white/[0.03]
        border border-white/10
        backdrop-blur-xl
        rounded-3xl
        p-8
        hover:border-cyan-400/40
        transition
        min-h-[260px]
      "
    >

      <div className="text-cyan-400 mb-6">
        {icon}
      </div>

      <h3 className="text-3xl font-bold mb-5">
        {title}
      </h3>

      <p className="text-slate-400 text-lg leading-relaxed">
        {description}
      </p>

    </motion.div>
  );
}

export default FeatureCard;