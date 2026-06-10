import { motion } from "motion/react";

export type SeoFaq = { q: string; a: string };
export type SeoArticleProps = {
  kicker: string;
  title: string;
  paragraphs: string[];
  faqs?: SeoFaq[];
  faqTitle?: string;
};

export function SeoArticle({ kicker, title, paragraphs, faqs, faqTitle }: SeoArticleProps) {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-5">— {kicker}</p>
          <h2 className="text-display text-3xl md:text-5xl mb-8">{title}</h2>
          <div className="prose-like space-y-5 text-[15px] md:text-base text-muted-foreground leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {faqs && faqs.length > 0 && (
            <div className="mt-14">
              <h3 className="text-display text-2xl md:text-3xl mb-6">{faqTitle ?? "Frequently asked questions"}</h3>
              <dl className="divide-y divide-border border-y border-border">
                {faqs.map((f, i) => (
                  <div key={i} className="py-5">
                    <dt className="text-foreground font-medium">{f.q}</dt>
                    <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
