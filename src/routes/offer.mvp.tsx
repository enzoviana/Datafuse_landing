import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Clock, Shield, Rocket, Zap } from "lucide-react";
import { Nav } from "@/components/site-nav";
import { Footer } from "@/components/site-footer";
import { LazyChatbot } from "@/components/chatbot-lazy";

export const Route = createFileRoute("/offer/mvp")({
  head: () => ({
    meta: [
      { title: "The 15-Day MVP — $15,000 Fixed Price · DATAFUSE Studio" },
      { name: "description", content: "Take your idea from blank canvas to a production-ready product in 15 days. Fixed scope, fixed price, full source code ownership." },
      { property: "og:title", content: "The 15-Day MVP — $15,000 · DATAFUSE Studio" },
      { property: "og:description", content: "A production-ready MVP shipped in 15 days. Fixed price, fixed scope." },
    ],
  }),
  component: OfferPage,
});

const included = [
  { t: "Product strategy & scoping workshop", d: "We turn a fuzzy idea into a sharp, shippable plan in 48 hours." },
  { t: "Full UI/UX design in Figma", d: "Polished interface and complete user flows — no placeholder screens." },
  { t: "Production-grade engineering", d: "Web app or mobile app built on TypeScript, React/React Native, Postgres." },
  { t: "Authentication, database & hosting", d: "Set up, secured, and deployed to your own cloud accounts." },
  { t: "Up to 3 core feature modules", d: "We focus ruthlessly on what your first users need to fall in love." },
  { t: "Production deployment & monitoring", d: "Domain, SSL, error tracking, analytics — wired and live on day 15." },
  { t: "100% source code ownership", d: "Your repository, your code, day one. No proprietary lock-in." },
  { t: "30 days of post-launch support", d: "Bug fixes and small refinements as your first users come in." },
];

const phases = [
  { d: "Day 1–2", t: "Discovery", c: "Strategy workshop. Define the smallest version of your product worth shipping. Sign off on scope and success metrics." },
  { d: "Day 3–5", t: "Design", c: "Complete UI/UX in Figma. Brand direction, full screen flows, polished components — review and approve before code." },
  { d: "Day 6–12", t: "Build", c: "Daily progress builds. You watch your product come alive in real time, with a Loom every 48h and a private staging URL." },
  { d: "Day 13–15", t: "Launch", c: "QA, deploy to production, hand over the keys. We stay on call for the first 30 days while real users come in." },
];

function OfferPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <section className="pt-36 md:pt-44 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to home
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1.5 text-xs font-mono text-muted-foreground">
              <Rocket className="h-3 w-3 text-accent" /> Flagship offer
            </div>
            <h1 className="mt-8 text-display text-6xl md:text-8xl leading-[0.95]">
              The 15-day MVP.<br />
              <span className="italic text-accent">$15,000.</span> Live.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A fixed-scope, fixed-price sprint that turns your idea into a real, production product
              your users can touch. No hourly billing, no surprise invoices, no slipping deadlines.
            </p>
          </motion.div>

          <div className="mt-14 grid md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {[
              { i: Clock, k: "15 days", v: "From kickoff to live in production" },
              { i: Shield, k: "100%", v: "Source code in your repository" },
              { i: Zap, k: "$15,000", v: "Fixed price · no hidden fees" },
            ].map((s) => (
              <div key={s.k} className="bg-background p-8">
                <s.i className="h-4 w-4 text-accent mb-4" />
                <div className="text-display text-4xl md:text-5xl">{s.k}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface/60">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mb-14">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">— Everything included</p>
            <h2 className="text-display text-4xl md:text-5xl">
              One price. <span className="italic">Eight deliverables.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {included.map((it) => (
              <div key={it.t} className="bg-background p-7 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                    <Check className="h-3 w-3 text-accent" />
                  </span>
                  <div>
                    <div className="text-display text-xl">{it.t}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mb-14">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">— The 15 days</p>
            <h2 className="text-display text-4xl md:text-5xl">
              How it unfolds, <span className="italic">day by day.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {phases.map((p, i) => (
              <div key={p.t} className="bg-background p-7 min-h-[260px] flex flex-col">
                <div className="font-mono text-xs uppercase tracking-widest text-accent">{p.d}</div>
                <div className="mt-3 text-display text-3xl">{p.t}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{p.c}</p>
                <div className="mt-4 text-display text-5xl text-muted-foreground/30">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface/60">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-display text-4xl md:text-6xl">
            Ready to ship in <span className="italic text-accent">15 days?</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            We onboard 2 projects per month. Book a 30-minute discovery call — we'll tell you straight
            whether your idea fits the 15-day window.
          </p>
          <Link to="/" hash="contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-sm font-medium hover:opacity-90 transition">
            Book a discovery call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <LazyChatbot />
    </main>
  );
}
