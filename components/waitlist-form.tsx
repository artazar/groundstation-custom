"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "done" | "error";

/**
 * Posts the email to NEXT_PUBLIC_WAITLIST_ENDPOINT when one is configured.
 * With no endpoint the form resolves optimistically, so a generated site is
 * demo-able the moment it deploys.
 */
export function WaitlistForm({
  ctaText,
  footerNote,
}: {
  ctaText: string;
  footerNote: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading" || status === "done") return;

    setStatus("loading");
    const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        if (!response.ok) throw new Error(String(response.status));
      } else {
        await new Promise((resolve) => setTimeout(resolve, 650));
      }
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-3">
        <div className="glass flex items-center gap-3 rounded-2xl px-6 py-4">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
            <Check className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <p className="text-sm text-white/85">
            You&apos;re on the list. Watch your inbox.
          </p>
        </div>
        <p className="text-xs text-white/40">{footerNote}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-lg">
      <form
        onSubmit={onSubmit}
        className="glass flex flex-col gap-2 rounded-2xl p-2 sm:flex-row sm:items-center"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          aria-label="Email address"
          className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-[15px] text-white placeholder:text-white/35 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="cta group flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] font-semibold text-white disabled:opacity-70"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <span className="relative z-10">{ctaText}</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </form>

      <p className="mt-3 text-center text-xs text-white/40">
        {status === "error"
          ? "Something went wrong. Try again in a moment."
          : footerNote}
      </p>
    </div>
  );
}
