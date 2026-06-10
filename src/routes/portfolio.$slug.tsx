import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Quote } from "lucide-react";
import { Nav } from "@/components/site-nav";
import { Footer } from "@/components/site-footer";
import { LazyChatbot } from "@/components/chatbot-lazy";
import { PORTFOLIO_BY_SLUG, PORTFOLIO, localizeProject, type PortfolioProject } from "@/lib/portfolio-content";
import { PORTFOLIO_SEO } from "@/lib/seo-content";
import { SeoArticle } from "@/components/seo-article";
import { useI18n } from "@/lib/i18n";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

const SITE = "https://datafuse-mvp-spark.lovable.app";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const p = PORTFOLIO_BY_SLUG[params.slug];
    if (!p) throw notFound();
    return { project: p };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    // SSR head uses English by default; client lang switch updates UI only.
    const en = localizeProject(loaderData.project, "en");
    return {
      meta: [
        { title: en.metaTitle },
        { name: "description", content: en.metaDesc },
        { property: "og:title", content: en.metaTitle },
        { property: "og:description", content: en.metaDesc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE}/portfolio/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: en.metaTitle },
        { name: "twitter:description", content: en.metaDesc },
      ],
      links: [{ rel: "canonical", href: `${SITE}/portfolio/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: en.title,
            description: en.metaDesc,
            creator: { "@type": "Organization", name: "DATAFUSE Studio" },
            datePublished: en.year,
            url: `${SITE}/portfolio/${params.slug}`,
          }),
        },
      ],
    };
  },
  component: PortfolioDetail,
  notFoundComponent: () => (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">404</p>
        <h1 className="mt-3 text-display text-4xl">Not found</h1>
        <Link to="/" className="mt-6 inline-block text-sm text-accent hover:underline">Back to home</Link>
      </div>
    </main>
  ),
});

function PortfolioDetail() {
  const { project: raw } = Route.useLoaderData() as { project: PortfolioProject };
  const { lang, t } = useI18n();
  const p = localizeProject(raw, lang);
  const others = PORTFOLIO.filter((x) => x.slug !== raw.slug).slice(0, 3).map((x) => localizeProject(x, lang));

  useEffect(() => { track("portfolio_view", { slug: raw.slug }); }, [raw.slug]);

  return (
    <main className="relative min-h-screen">
      <Nav />
      <section className="pt-36 md:pt-44 pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <Link to="/" hash="portfolio" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-3.5 w-3.5" /> {t("detail.back.portfolio")}
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-10">
            <div className="font-mono text-xs uppercase tracking-widest text-accent">— {t("detail.case")} · {p.year}</div>
            <h1 className="mt-6 text-display text-6xl md:text-8xl leading-[0.95]">{p.title}</h1>
            <p className="mt-6 text-2xl md:text-3xl text-display italic text-muted-foreground max-w-3xl">{p.desc}</p>
          </motion.div>

          <div className="mt-12 relative aspect-[16/8] overflow-hidden rounded-3xl border border-border">
            <div className="absolute inset-0" style={{ background: p.grad }} />
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.6px, transparent 0)", backgroundSize: "18px 18px" }} />
            <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur border border-border px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest">
              {p.tag}
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {[
              { k: t("detail.client"), v: p.client },
              { k: t("detail.industry"), v: p.industry },
              { k: t("detail.duration"), v: p.duration },
              { k: t("detail.role"), v: p.role },
            ].map((m) => (
              <div key={m.k} className="bg-background p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{m.k}</div>
                <div className="mt-2 text-sm">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/60">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">— {t("detail.challenge.kicker")}</p>
          <h2 className="text-display text-4xl md:text-5xl mb-8">{t("detail.challenge.title")}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{p.challenge}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">— {t("detail.approach.kicker")}</p>
            <h2 className="text-display text-4xl md:text-5xl mb-10">{t("detail.approach.title")}</h2>
            <ul className="space-y-4">
              {p.approach.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[15px]">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                    <Check className="h-3 w-3 text-accent" />
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">— {t("detail.stack.kicker")}</p>
            <h2 className="text-display text-4xl md:text-5xl mb-10">{t("detail.stack.title")}</h2>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((tt) => (
                <span key={tt} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-mono">{tt}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/60">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">— {t("detail.outcome.kicker")}</p>
          <h2 className="text-display text-4xl md:text-5xl mb-12">{t("detail.outcome.title")}</h2>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {p.outcome.map((o) => (
              <div key={o.k} className="bg-background p-8">
                <div className="text-display text-5xl">{o.k}</div>
                <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{o.v}</div>
              </div>
            ))}
          </div>

          {p.testimonial && (
            <figure className="mt-14 rounded-3xl border border-border bg-card p-10 md:p-14 relative">
              <Quote className="absolute top-6 right-6 h-7 w-7 text-accent/40" />
              <blockquote className="text-display text-2xl md:text-3xl leading-tight max-w-3xl">
                "{p.testimonial.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border text-sm">
                <div className="font-medium">{p.testimonial.author}</div>
                <div className="text-xs font-mono text-muted-foreground mt-1">{p.testimonial.role}</div>
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {PORTFOLIO_SEO[raw.slug as keyof typeof PORTFOLIO_SEO] && (
        <SeoArticle {...PORTFOLIO_SEO[raw.slug as keyof typeof PORTFOLIO_SEO][lang]} />
      )}

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-display text-3xl md:text-4xl">{t("detail.more")}</h2>
            <Link to="/" hash="portfolio" className="text-sm text-muted-foreground hover:text-foreground">{t("detail.viewall")} →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/portfolio/$slug"
                params={{ slug: o.slug }}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-foreground/40 transition-colors"
              >
                <div className="relative aspect-[4/3]">
                  <div className="absolute inset-0" style={{ background: o.grad }} />
                </div>
                <div className="p-5">
                  <div className="text-display text-xl">{o.title}</div>
                  <div className="mt-1 text-xs font-mono text-muted-foreground">{o.tag}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface/60">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-display text-4xl md:text-6xl">
            {t("detail.cta.title1")} <span className="italic text-accent">{t("detail.cta.title2")}</span>
          </h2>
          <p className="mt-6 text-muted-foreground">{t("detail.cta.sub")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" hash="contact" onClick={() => track("cta_click", { where: "portfolio_detail", target: "contact" })} className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-sm font-medium hover:opacity-90 transition">
              {t("detail.cta.start")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/offer/mvp" onClick={() => track("cta_click", { where: "portfolio_detail", target: "offer" })} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-medium hover:border-foreground/40 transition">
              {t("detail.cta.offer")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <LazyChatbot />
    </main>
  );
}
