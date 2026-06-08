import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative inline-flex h-8 w-14 items-center rounded-full border border-border bg-surface transition hover:border-foreground/40"
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-foreground transition-transform duration-300 ease-out ${dark ? "translate-x-7" : "translate-x-1"}`}
      />
      <span className="absolute left-1.5 text-[10px] opacity-60">☀</span>
      <span className="absolute right-1.5 text-[10px] opacity-60">☾</span>
    </button>
  );
}
