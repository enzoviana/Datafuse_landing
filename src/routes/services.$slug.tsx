import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/site-nav";
import { Footer } from "@/components/site-footer";
import { LazyChatbot } from "@/components/chatbot-lazy";
import { SERVICES, localizeService, type ServiceSlug, type ServiceDetail } from "@/lib/service-content";
import { useI18n } from "@/lib/i18n";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

const SLUGS = ["web", "mobile", "design", "ai"] as const;

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    if (!(SLUGS as readonly string[]).includes(params.slug)) throw notFound();
    return { service: SERVICES[params.slug as ServiceSlug] };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const en = localizeService(loaderData.service, "en");
    return {
      meta: [
        { title: en.metaTitle },
        { name: "description", content: en.metaDesc },
        { property: "og:title", content: en.metaTitle },
        { property: "og:description", content: en.metaDesc },
      ],
    };
  },
  component: ServicePage,
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

function ServicePage() {
  const { service: raw } = Route.useLoaderData() as { service: ServiceDetail };
  const { lang, t } = useI18n();
  const s = localizeService(raw, lang);

  useEffect(() => { track("service_view", { slug: raw.slug }); }, [raw.slug]);

  return (
    <main className="relative min-h-screen">
      <Nav />
      <section className="pt-36 md:pt-44 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-3.5 w-3.5" /> {t("detail.back.home")}
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-10">
            <div className="font-mono text-xs uppercase tracking-widest text-accent">— {t("detail.service")} {s.number}</div>
            <h1 className="mt-6 text-display text-6xl md:text-8xl leading-[0.95]">{s.title}</h1>
            <p className="mt-6 text-2xl md:text-3xl text-display italic text-muted-foreground max-w-3xl">{s.tagline}</p>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">{s.intro}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-surface/60">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">— {t("detail.capabilities.kicker")}</p>
          <h2 className="text-display text-4xl md:text-5xl mb-12">{t("detail.capabilities.title")}</h2>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {s.capabilities.map((c) => (
              <div key={c.t} className="bg-background p-8">
                <div className="text-display text-2xl">{c.t}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">— {t("detail.deliverables.kicker")}</p>
            <h2 className="text-display text-4xl md:text-5xl mb-10">{t("detail.deliverables.title")}</h2>
            <ul className="space-y-4">
              {s.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[15px]">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                    <Check className="h-3 w-3 text-accent" />
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">— {t("detail.stack.kicker")}</p>
            <h2 className="text-display text-4xl md:text-5xl mb-10">{t("detail.stack.tools")}</h2>
            <div className="flex flex-wrap gap-2">
              {s.stack.map((tt) => (
                <span key={tt} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-mono">{tt}</span>
              ))}
            </div>
            <div className="mt-12 rounded-2xl border border-border bg-card p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{t("detail.from")}</div>
              <div className="mt-2 text-display text-5xl">{s.pricingFrom}</div>
              <p className="mt-3 text-sm text-muted-foreground">{t("detail.pricing.note")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/60">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">— {t("detail.timeline.kicker")}</p>
          <h2 className="text-display text-4xl md:text-5xl mb-12">{t("detail.timeline.title")}</h2>
          <div className="grid md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {s.timeline.map((p, i) => (
              <div key={p.t} className="bg-background p-7 min-h-[240px] flex flex-col">
                <div className="font-mono text-xs uppercase tracking-widest text-accent">{p.d}</div>
                <div className="mt-3 text-display text-2xl">{p.t}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{p.c}</p>
                <div className="mt-4 text-display text-4xl text-muted-foreground/30">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-display text-4xl md:text-6xl">
            {t("detail.svc.cta.title1")} <span className="italic text-accent">{s.title.toLowerCase()}</span>.
          </h2>
          <p className="mt-6 text-muted-foreground">{t("detail.svc.cta.sub")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" hash="contact" onClick={() => track("cta_click", { where: "service_detail", slug: raw.slug, target: "contact" })} className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-sm font-medium hover:opacity-90 transition">
              {t("detail.svc.cta.start")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/offer/mvp" onClick={() => track("cta_click", { where: "service_detail", slug: raw.slug, target: "offer" })} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-medium hover:border-foreground/40 transition">
              {t("detail.svc.cta.offer")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <LazyChatbot />
    </main>
  );
}
