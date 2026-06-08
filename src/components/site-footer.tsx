import { Link } from "@tanstack/react-router";
import { Download, Loader2 } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

// Bundle the latest project source at build time so the download
// always reflects the deployed version (not a stale zip).
const sourceFiles = import.meta.glob(
  [
    "/src/**/*",
    "/public/**/*",
    "/index.html",
    "/package.json",
    "/tsconfig.json",
    "/vite.config.ts",
    "/README.md",
  ],
  { query: "?raw", import: "default", eager: false },
);

export function Footer() {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);

  async function downloadSource() {
    if (loading) return;
    setLoading(true);
    try {
      const JSZip = (await import("jszip")).default;
      const zip = new JSZip();
      const entries = Object.entries(sourceFiles);
      await Promise.all(
        entries.map(async ([path, load]) => {
          try {
            const content = (await load()) as string;
            zip.file(path.replace(/^\//, ""), content);
          } catch {
            /* skip unreadable file */
          }
        }),
      );
      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const stamp = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = `datafuse-source-${stamp}.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 22 22" className="text-foreground">
            <circle cx="8" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="14" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <span className="font-display text-xl tracking-tight">
            Datafuse<span className="text-muted-foreground italic"> studio</span>
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <Link to="/offer/mvp" className="hover:text-foreground transition">15-day MVP</Link>
          <Link to="/services/web" className="hover:text-foreground transition">Web</Link>
          <Link to="/services/mobile" className="hover:text-foreground transition">Mobile</Link>
          <Link to="/services/design" className="hover:text-foreground transition">Design</Link>
          <Link to="/services/ai" className="hover:text-foreground transition">AI</Link>

        </div>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} Datafuse — {t("footer.tag")}
        </p>
      </div>
    </footer>
  );
}
