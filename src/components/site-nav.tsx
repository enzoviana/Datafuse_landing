import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";
import { useI18n } from "@/lib/i18n";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <svg width="22" height="22" viewBox="0 0 22 22" className="text-foreground">
        <circle cx="8" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="14" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="font-display text-xl tracking-tight">
        Datafuse<span className="text-muted-foreground italic"> studio</span>
      </span>
    </Link>
  );
}

export function Nav() {
  const { t } = useI18n();
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          <Link to="/" hash="services" className="hover:text-foreground transition">{t("nav.services")}</Link>
          <Link to="/" hash="portfolio" className="hover:text-foreground transition">Portfolio</Link>
          <Link to="/" hash="founder" className="hover:text-foreground transition">Founder</Link>
          <Link to="/offer/mvp" className="hover:text-foreground transition">{t("nav.offer")}</Link>
          <Link to="/" hash="faq" className="hover:text-foreground transition">{t("nav.faq")}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <ThemeToggle />
          <Link to="/" hash="contact" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition">
            {t("nav.start")}
          </Link>
        </div>
      </div>
    </header>
  );
}
