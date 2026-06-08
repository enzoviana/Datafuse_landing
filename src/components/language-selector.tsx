import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import { track } from "@/lib/analytics";

const langs: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "EN" },
  { code: "fr", label: "Français", flag: "FR" },
  { code: "pt", label: "Português", flag: "PT" },
];

export function LanguageSelector() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", h);
    return () => window.removeEventListener("mousedown", h);
  }, []);

  const current = langs.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-mono hover:border-foreground/40 transition"
        aria-label="Language"
      >
        <Globe className="h-3.5 w-3.5" />
        {current.flag}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl border border-border bg-card p-1 shadow-[var(--shadow-soft)] z-50">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); track("language_change", { to: l.code }); setOpen(false); }}
              className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg hover:bg-surface transition"
            >
              <span className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">{l.flag}</span>
                {l.label}
              </span>
              {lang === l.code && <Check className="h-3.5 w-3.5 text-accent" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
