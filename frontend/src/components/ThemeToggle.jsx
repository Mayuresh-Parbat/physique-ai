import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition duration-300"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400" size={20} />
      ) : (
        <Moon className="text-cyan-400" size={20} />
      )}
    </button>
  );
}

export default ThemeToggle;