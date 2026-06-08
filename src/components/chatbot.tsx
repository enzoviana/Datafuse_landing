import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { chatWithFuse } from "@/lib/chat.functions";

type Msg = { role: "user" | "assistant"; content: string };

const INITIAL: Msg = {
  role: "assistant",
  content: "Hi — I'm Fuse, the DATAFUSE concierge. Ask me anything about our 15-day MVP, services or process.",
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chat = useServerFn(chatWithFuse);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await chat({ data: { messages: next.map((m) => ({ role: m.role, content: m.content })) } });
      setMessages((prev) => [...prev, { role: "assistant", content: res.reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I couldn't reach the server. Please try again or email hello@datafuse.studio." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[560px] max-h-[80vh] rounded-3xl border border-border bg-card flex flex-col overflow-hidden"
            style={{ boxShadow: "var(--shadow-elevated)" }}
          >
            <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-surface/60">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-accent/60 to-accent/10 border border-border flex items-center justify-center font-display text-base">
                  F
                </div>
                <div>
                  <div className="text-display text-base leading-none">Fuse</div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5 align-middle" />
                    AI concierge · online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="h-8 w-8 rounded-full border border-border hover:border-foreground/40 flex items-center justify-center transition"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-foreground text-background"
                        : "bg-surface border border-border text-foreground"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl px-4 py-3 bg-surface border border-border">
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={send} className="p-3 border-t border-border bg-background flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about the 15-day MVP…"
                className="flex-1 bg-surface rounded-full px-4 py-2.5 text-sm outline-none border border-border focus:border-accent transition"
                maxLength={1000}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-90 transition disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="fixed bottom-5 right-4 sm:right-6 z-50 h-14 px-5 rounded-full bg-foreground text-background flex items-center gap-2.5 text-sm font-medium hover:opacity-90 transition"
        style={{ boxShadow: "var(--shadow-elevated)" }}
      >
        {open ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
        <span className="hidden sm:inline">{open ? "Close" : "Chat with Fuse"}</span>
      </button>
    </>
  );
}
