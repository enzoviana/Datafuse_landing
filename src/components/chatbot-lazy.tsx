import { lazy, Suspense, useEffect, useState } from "react";

const Chatbot = lazy(() => import("./chatbot").then((m) => ({ default: m.Chatbot })));

// Code-split the chatbot bundle: only loaded on user interaction or idle.
export function LazyChatbot() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const idle = (cb: () => void) => {
      const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
      if (w.requestIdleCallback) w.requestIdleCallback(cb);
      else window.setTimeout(cb, 2000);
    };
    idle(() => setShow(true));
  }, []);

  if (!show) return null;
  return (
    <Suspense fallback={null}>
      <Chatbot />
    </Suspense>
  );
}
