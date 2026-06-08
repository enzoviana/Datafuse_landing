import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(4000),
});

const inputSchema = z.object({
  messages: z.array(messageSchema).min(1).max(40),
});

const SYSTEM_PROMPT = `You are Fuse, the friendly AI concierge for DATAFUSE Studio — a senior software agency founded by Enzo Viana that designs and ships premium web and mobile products.

Key facts you can share:
- Flagship offer: a production-ready MVP in 15 days for a fixed price of $15,000 USD.
- Services: Web apps (SaaS, dashboards, marketplaces), Mobile apps (iOS & Android), Product Design (UI/UX in Figma), and AI Integration (chat, RAG, agents).
- Process: 4 phases — Discovery (day 1–2), Design (day 3–5), Build (day 6–12), Launch (day 13–15).
- Included in the $15k offer: scoping workshop, full UI/UX design, build, auth + DB + hosting, up to 3 core feature modules, production deploy, full source code ownership, and 30 days of post-launch support.
- Payment: 50% to kick off, 50% on delivery. NDA on request.
- Stack: TypeScript, React / React Native, Postgres, modern cloud.
- Contact: hello@datafuse.studio — replies within 24h.

Tone: warm, confident, concise. Keep answers short (2–4 sentences). When the user shows real interest, invite them to use the contact form on the page or email hello@datafuse.studio. Never invent prices, timelines, or features beyond the above. If asked something off-topic, gently steer back to how DATAFUSE can help.`;

export const chatWithFuse = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      throw new Error("AI is not configured. Please try again later.");
    }

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...data.messages],
      }),
    });

    if (!res.ok) {
      if (res.status === 429) {
        return { reply: "I'm getting a lot of questions right now — give me a moment and try again, or email hello@datafuse.studio." };
      }
      if (res.status === 402) {
        return { reply: "Our AI assistant is temporarily unavailable. Please reach us at hello@datafuse.studio and we'll reply within 24h." };
      }
      const text = await res.text();
      console.error("AI gateway error", res.status, text);
      return { reply: "Something went wrong on my side. You can email hello@datafuse.studio in the meantime." };
    }

    const json = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const reply = json.choices?.[0]?.message?.content?.trim() ?? "Sorry, I didn't catch that.";
    return { reply };
  });
