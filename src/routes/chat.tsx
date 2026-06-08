import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import mascot from "@/assets/zoo-mascot.png";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "Ask Ranger Rusty — Oklahoma City Zoo AI Guide" },
      {
        name: "description",
        content:
          "Chat with Ranger Rusty, the Oklahoma City Zoo's AI guide. Ask about animals, conservation, and exhibits.",
      },
      { property: "og:title", content: "Ask Ranger Rusty" },
      { property: "og:description", content: "AI zoo guide for the Oklahoma City Zoo." },
    ],
  }),
  component: ChatPage,
  ssr: false,
});

const STORAGE_KEY = "okc-zoo-chat-v1";

const SUGGESTIONS = [
  "Why are red pandas endangered?",
  "Which animals are native to Oklahoma?",
  "What conservation projects does the zoo support?",
  "Where can I see the elephants?",
];

function ChatPage() {
  const initialMessages = useMemo<UIMessage[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as UIMessage[]) : [];
    } catch {
      return [];
    }
  }, []);

  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);
  const { messages, sendMessage, status, setMessages } = useChat({
    id: "okc-zoo",
    messages: initialMessages,
    transport,
    onError: (err) => console.error(err),
  });

  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Persist to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      /* ignore quota errors */
    }
  }, [messages]);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  // Keep textarea focused
  useEffect(() => {
    inputRef.current?.focus();
  }, [status]);

  const isBusy = status === "submitted" || status === "streaming";

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;
    setInput("");
    await sendMessage({ text: trimmed });
  };

  const clear = () => {
    setMessages([]);
    if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteNav />
      <main className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-4 pb-4 pt-4">
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto space-y-6 py-4"
          style={{ minHeight: 0 }}
        >
          {messages.length === 0 && (
            <div className="text-center pt-8">
              <img
                src={mascot}
                alt="Ranger Rusty"
                width={120}
                height={120}
                className="w-24 h-24 mx-auto object-contain"
              />
              <h1 className="mt-4 text-2xl font-bold text-foreground">Hi, I'm Ranger Rusty!</h1>
              <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                Ask me anything about the Oklahoma City Zoo — animals, conservation,
                or what to see today.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-2 max-w-lg mx-auto">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-left p-3 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-secondary/50 transition-colors text-sm text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m) => {
            const text = m.parts
              .map((p) => (p.type === "text" ? p.text : ""))
              .join("");
            if (m.role === "user") {
              return (
                <div key={m.id} className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary text-primary-foreground px-4 py-2.5 text-sm">
                    {text}
                  </div>
                </div>
              );
            }
            return (
              <div key={m.id} className="flex gap-3">
                <img
                  src={mascot}
                  alt=""
                  className="w-8 h-8 object-contain shrink-0 mt-1"
                />
                <div className="flex-1 prose prose-sm max-w-none text-foreground prose-p:my-2 prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary">
                  <ReactMarkdown>{text}</ReactMarkdown>
                </div>
              </div>
            );
          })}

          {status === "submitted" && (
            <div className="flex gap-3 items-center text-muted-foreground text-sm">
              <img src={mascot} alt="" className="w-8 h-8 object-contain" />
              <span className="animate-pulse">Ranger Rusty is thinking…</span>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            void send(input);
          }}
          className="border border-border bg-card rounded-2xl p-2 flex items-end gap-2 shadow-sm"
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void send(input);
              }
            }}
            rows={1}
            placeholder="Ask about an animal or exhibit…"
            className="flex-1 resize-none bg-transparent px-3 py-2 outline-none text-foreground placeholder:text-muted-foreground text-sm max-h-32"
          />
          <button
            type="submit"
            disabled={isBusy || !input.trim()}
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold disabled:opacity-40 hover:opacity-90 transition-opacity"
          >
            Send
          </button>
        </form>
        {messages.length > 0 && (
          <button
            onClick={clear}
            className="mt-2 text-xs text-muted-foreground hover:text-foreground self-end"
          >
            Clear conversation
          </button>
        )}
      </main>
    </div>
  );
}
