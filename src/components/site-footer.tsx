import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
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
