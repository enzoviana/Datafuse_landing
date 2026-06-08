import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Clock, Shield, Award, Users, Sparkles, Mail, Plus, Star, Quote, Linkedin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Nav } from "@/components/site-nav";
import { Footer } from "@/components/site-footer";
import { LazyChatbot } from "@/components/chatbot-lazy";
import { track } from "@/lib/analytics";
import founderImg from "@/assets/founder-enzo.jpg";

const SITE_URL = "https://datafuse-mvp-spark.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DATAFUSE Studio — Web & Mobile Software Agency · MVP in 15 Days" },
      { name: "description", content: "DATAFUSE Studio is a senior software agency designing and shipping refined web apps, mobile apps and AI products. Production-ready MVP in 15 days from $15,000." },
      { name: "keywords", content: "software agency, web app development, mobile app development, MVP development, SaaS, React, TypeScript, AI integration, product design, DATAFUSE, Enzo Viana" },
      { name: "author", content: "DATAFUSE Studio" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "DATAFUSE Studio" },
      { property: "og:title", content: "DATAFUSE Studio — Refined Software, Shipped in 15 Days" },
      { property: "og:description", content: "A senior software agency. Web, mobile, design and AI. Production MVP in 15 days from $15,000." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "fr_FR" },
      { property: "og:locale:alternate", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "DATAFUSE Studio — MVP in 15 Days" },
      { name: "twitter:description", content: "Senior software agency. Web, mobile, design and AI. $15k MVP in 15 days." },
      { name: "theme-color", content: "#0a0a0a" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "DATAFUSE Studio",
          description: "Senior software agency designing and shipping refined web apps, mobile apps and AI products. MVP in 15 days from $15,000.",
          url: SITE_URL,
          email: "contact@datafuse.fr",
          founder: { "@type": "Person", name: "Enzo Viana" },
          areaServed: "Worldwide",
          priceRange: "$$$",
          serviceType: ["Web Application Development", "Mobile App Development", "Product Design", "AI Integration"],
          sameAs: ["https://www.linkedin.com/"],
        }),
      },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative pt-36 md:pt-48 pb-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-elegant)" }} />
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 0.6px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1.5 text-xs font-mono text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("hero.badge")}
          </div>

          <h1 className="mt-8 text-display text-[14vw] md:text-[7.5rem] lg:text-[9rem]">
            {t("hero.title1")}
            <br />
            <span className="italic text-accent">{t("hero.title2")}</span>
          </h1>

          <div className="mt-10 grid md:grid-cols-[1.3fr_1fr] gap-10 items-end">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {t("hero.desc")}
            </p>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <Link to="/offer/mvp" className="group inline-flex items-center justify-between gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition">
                {t("hero.cta1")}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </Link>
              <a href="#founder" className="group inline-flex items-center justify-between gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium hover:border-foreground/40 transition">
                {t("hero.cta2")}
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10">
          {[
            { k: "40+", v: t("stats.shipped") },
            { k: "15", v: t("stats.days") },
            { k: "100%", v: t("stats.ownership") },
            { k: "4.9/5", v: t("stats.rating") },
          ].map((m) => (
            <div key={m.v}>
              <div className="text-display text-4xl md:text-5xl">{m.k}</div>
              <div className="mt-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">{m.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useI18n();
  const services = [
    { n: "01", title: t("services.web.title"), desc: t("services.web.desc"), slug: "web" as const },
    { n: "02", title: t("services.mobile.title"), desc: t("services.mobile.desc"), slug: "mobile" as const },
    { n: "03", title: t("services.design.title"), desc: t("services.design.desc"), slug: "design" as const },
    { n: "04", title: t("services.ai.title"), desc: t("services.ai.desc"), slug: "ai" as const },
  ];
  return (
    <section id="services" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">{t("services.kicker")}</p>
            <h2 className="text-display text-5xl md:text-6xl">
              {t("services.title1")}<br /><span className="italic">{t("services.title2")}</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">{t("services.sub")}</p>
        </motion.div>

        <div className="border-t border-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group grid grid-cols-12 gap-6 border-b border-border py-8 md:py-10 hover:bg-surface/60 transition-colors px-2 -mx-2 rounded-md"
              >
                <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground pt-2">{s.n}</div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="text-display text-3xl md:text-4xl group-hover:text-accent transition-colors">{s.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-6 text-muted-foreground md:text-base text-sm leading-relaxed flex items-start justify-between gap-6">
                  <p className="max-w-md">{s.desc}</p>
                  <ArrowUpRight className="h-5 w-5 shrink-0 mt-1 opacity-40 group-hover:opacity-100 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useI18n();
  const values = [
    { icon: Award, title: t("about.value1.title"), desc: t("about.value1.desc") },
    { icon: Shield, title: t("about.value2.title"), desc: t("about.value2.desc") },
    { icon: Users, title: t("about.value3.title"), desc: t("about.value3.desc") },
  ];
  return (
    <section id="about" className="py-28 md:py-40 bg-surface/60 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">{t("about.kicker")}</p>
            <h2 className="text-display text-5xl md:text-6xl">
              {t("about.title1")}<br /><span className="italic">{t("about.title2")}</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>{t("about.p1")}</p>
            <p className="text-foreground">{t("about.p2")}</p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <div className="text-display text-4xl text-foreground">2024</div>
                <div className="mt-1 text-xs font-mono uppercase tracking-widest">{t("about.founded")}</div>
              </div>
              <div>
                <div className="text-display text-4xl text-foreground">40+</div>
                <div className="mt-1 text-xs font-mono uppercase tracking-widest">Products shipped</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="hairline my-16 md:my-20" />

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8 md:p-10"
            >
              <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center mb-6">
                <v.icon className="h-4 w-4 text-accent" />
              </div>
              <h3 className="text-display text-2xl mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  const { t } = useI18n();
  return (
    <section id="founder" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src={founderImg}
                alt={t("founder.imgAlt")}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-background/80 backdrop-blur px-4 py-3 border border-border">
                <div>
                  <div className="text-display text-lg leading-none">Enzo Viana</div>
                  <div className="mt-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">{t("founder.role")}</div>
                </div>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="h-9 w-9 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center transition"
                  aria-label="Enzo Viana on LinkedIn"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">{t("founder.kicker")}</p>
            <h2 className="text-display text-5xl md:text-7xl leading-[0.95]">
              {t("founder.title1")}<br /><span className="italic">{t("founder.title2")}</span>
            </h2>
            <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>{t("founder.p1")}</p>
              <p className="text-foreground">{t("founder.p2")}</p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-display text-4xl">{t("founder.stat1.value")}</div>
                <div className="mt-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">{t("founder.stat1.label")}</div>
              </div>
              <div>
                <div className="text-display text-4xl">{t("founder.stat2.value")}</div>
                <div className="mt-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">{t("founder.stat2.label")}</div>
              </div>
              <div>
                <div className="text-display text-4xl">{t("founder.stat3.value")}</div>
                <div className="mt-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">{t("founder.stat3.label")}</div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:border-foreground/40 transition"
            >
              <Mail className="h-4 w-4 text-accent" /> {t("founder.cta")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { PORTFOLIO, localizeProject } from "@/lib/portfolio-content";

function Portfolio() {
  const { t, lang } = useI18n();
  const items = PORTFOLIO.map((p) => localizeProject(p, lang));
  return (
    <section id="portfolio" className="py-28 md:py-40 bg-surface/60">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">{t("portfolio.kicker")}</p>
            <h2 className="text-display text-5xl md:text-6xl">
              {t("portfolio.title1")}<br /><span className="italic">{t("portfolio.title2")}</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">{t("portfolio.sub")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((p, i) => (
            <motion.article
              key={p.slug}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-foreground/40 transition-colors"
            >
              <Link to="/portfolio/$slug" params={{ slug: p.slug }} onClick={() => track("portfolio_view", { slug: p.slug, from: "home" })} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]" style={{ background: p.grad }} />
                  <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.6px, transparent 0)", backgroundSize: "16px 16px" }} />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur border border-border px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-foreground">
                    {p.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 text-[11px] font-mono text-white/80">{p.year}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-display text-2xl">{p.title}</h3>
                    <ArrowUpRight className="h-4 w-4 opacity-40 group-hover:opacity-100 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-4 text-xs font-mono uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition">{t("portfolio.read")}</div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const { t } = useI18n();
  const reviews = [1, 2, 3, 4].map((n) => ({
    quote: t(`reviews.${n}.quote`),
    author: t(`reviews.${n}.author`),
    role: t(`reviews.${n}.role`),
  }));
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="max-w-3xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">{t("reviews.kicker")}</p>
          <h2 className="text-display text-5xl md:text-6xl">
            {t("reviews.title1")}<br /><span className="italic">{t("reviews.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.author}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              <Quote className="absolute top-6 right-6 h-6 w-6 text-accent/40" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-display text-2xl md:text-3xl leading-tight">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 border border-border flex items-center justify-center font-display text-base">
                  {r.author[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{r.author}</div>
                  <div className="text-xs text-muted-foreground font-mono">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer() {
  const { t } = useI18n();
  const included = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => t(`offer.item${n}`));
  return (
    <section id="offer" className="py-28 md:py-40 bg-surface/60">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="max-w-3xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">{t("offer.kicker")}</p>
          <h2 className="text-display text-5xl md:text-7xl">
            {t("offer.title1")} <span className="italic text-accent">{t("offer.title2")}</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t("offer.sub")}</p>
        </motion.div>

        <motion.div {...fadeUp} className="rounded-3xl border border-border bg-card overflow-hidden" style={{ boxShadow: "var(--shadow-elevated)" }}>
          <div className="grid md:grid-cols-[1.1fr_1fr]">
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-border">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{t("offer.name")}</div>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-display text-7xl md:text-8xl">$15,000</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground font-mono">{t("offer.price.sub")}</div>
              <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">{t("offer.desc")}</p>

              <div className="mt-10 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-background p-5">
                  <Clock className="h-4 w-4 text-accent mb-3" />
                  <div className="text-display text-3xl">15 days</div>
                  <div className="mt-1 text-xs text-muted-foreground font-mono">{t("offer.days")}</div>
                </div>
                <div className="rounded-2xl border border-border bg-background p-5">
                  <Shield className="h-4 w-4 text-accent mb-3" />
                  <div className="text-display text-3xl">100%</div>
                  <div className="mt-1 text-xs text-muted-foreground font-mono">{t("offer.own")}</div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/offer/mvp" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-sm font-medium hover:opacity-90 transition">
                  See full details
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                </Link>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-4 text-sm font-medium hover:border-foreground/40 transition">
                  {t("offer.cta")}
                </a>
              </div>
            </div>

            <div className="p-10 md:p-14 bg-surface/40">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">{t("offer.included")}</p>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px]">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  const { t } = useI18n();
  const steps = [1, 2, 3, 4].map((n) => ({
    day: t(`process.${n}.day`),
    title: t(`process.${n}.title`),
    desc: t(`process.${n}.desc`),
  }));
  return (
    <section id="process" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">{t("process.kicker")}</p>
          <h2 className="text-display text-5xl md:text-6xl">
            {t("process.title1")}<br /><span className="italic">{t("process.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-7 md:p-8 min-h-[260px] flex flex-col"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-accent">{s.day}</div>
              <div className="mt-3 text-display text-3xl">{s.title}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-6 text-display text-5xl text-muted-foreground/30">0{i + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6].map((n) => ({ q: t(`faq.${n}.q`), a: t(`faq.${n}.a`) }));
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 md:py-40 bg-surface/60">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">{t("faq.kicker")}</p>
          <h2 className="text-display text-5xl md:text-6xl">
            {t("faq.title1")}<br /><span className="italic">{t("faq.title2")}</span>
          </h2>
        </motion.div>

        <div className="border-t border-border">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={it.q}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-border"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group"
                >
                  <span className="text-display text-xl md:text-2xl group-hover:text-accent transition-colors">
                    {it.q}
                  </span>
                  <span className={`shrink-0 h-9 w-9 rounded-full border border-border flex items-center justify-center transition-all ${isOpen ? "rotate-45 border-accent bg-accent/10" : ""}`}>
                    <Plus className={`h-4 w-4 transition-colors ${isOpen ? "text-accent" : ""}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-16 text-muted-foreground leading-relaxed">{it.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LeadCapture() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", project: "", budget: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    track("lead_submitted", { budget: form.budget || "unspecified", has_company: form.company ? "yes" : "no" });
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Budget: ${form.budget}`,
      ``,
      form.project,
    ].join("\n");
    window.location.href = `mailto:contact@datafuse.fr?subject=${encodeURIComponent("New project inquiry — " + form.name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-16 items-start">
          <div className="md:sticky md:top-24">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">{t("lead.kicker")}</p>
            <h2 className="text-display text-5xl md:text-7xl">
              {t("lead.title1")}<br /><span className="italic text-accent">{t("lead.title2")}</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">{t("lead.sub")}</p>

            <div className="mt-10 space-y-4 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Sparkles className="h-4 w-4 text-accent" />
                <span>Reply within <span className="text-foreground">24h</span></span>
              </div>
              <div className="pt-6 border-t border-border">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">{t("lead.or")}</div>
                <a href="mailto:contact@datafuse.fr" className="inline-flex items-center gap-2 text-foreground hover:text-accent transition">
                  <Mail className="h-4 w-4" />
                  <span>contact@datafuse.fr</span>
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-7 md:p-10 space-y-5" style={{ boxShadow: "var(--shadow-soft)" }}>
            {sent ? (
              <div className="py-10 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center">
                  <Check className="h-5 w-5 text-accent" />
                </div>
                <p className="mt-6 text-display text-3xl">{t("lead.success")}</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={t("lead.name")} required>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-foreground"
                    />
                  </Field>
                  <Field label={t("lead.email")} required>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2"
                    />
                  </Field>
                </div>
                <Field label={t("lead.company")}>
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2"
                  />
                </Field>
                <Field label={t("lead.budget")} required>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {[1, 2, 3, 4].map((n) => {
                      const v = t(`lead.budget.${n}`);
                      const active = form.budget === v;
                      return (
                        <button
                          type="button"
                          key={n}
                          onClick={() => setForm({ ...form, budget: v })}
                          className={`text-left text-sm rounded-full border px-4 py-2.5 transition ${active ? "border-accent bg-accent/10 text-foreground" : "border-border hover:border-foreground/40 text-muted-foreground"}`}
                        >
                          {v}
                        </button>
                      );
                    })}
                  </div>
                </Field>
                <Field label={t("lead.project")} required>
                  <textarea
                    required
                    rows={4}
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 resize-none"
                  />
                </Field>
                <button
                  type="submit"
                  className="group w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-4 text-sm font-medium hover:opacity-90 transition"
                >
                  {t("lead.submit")}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                </button>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
        {label}{required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}

function Landing() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Founder />
      <Reviews />
      <Offer />
      <Process />
      <FAQ />
      <LeadCapture />
      <Footer />
      <LazyChatbot />
    </main>
  );
}
