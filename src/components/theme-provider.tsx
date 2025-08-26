import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl border px-2.5 py-1.5 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
      title="Toggle theme"
      data-testid="button-theme-toggle"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
