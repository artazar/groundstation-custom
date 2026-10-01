import { Sparkles } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist-form";
import type { WaitlistContent } from "@/lib/content";

export function Hero({ content }: { content: WaitlistContent }) {
  return (
    <header className="relative px-6 pt-32 pb-14 sm:pt-40 sm:pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <div
          className="rise flex justify-center"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="badge-glow glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/70">
            <Sparkles className="h-3.5 w-3.5 text-violet-300" />
            {content.social_proof_badge}
          </span>
        </div>

        <h1
          className="rise mt-8 text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="gradient-text">{content.hero_title}</span>
        </h1>

        <p
          className="rise mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/55"
          style={{ animationDelay: "0.25s" }}
        >
          {content.hero_subtitle}
        </p>

        <div className="rise mt-10" style={{ animationDelay: "0.35s" }}>
          <WaitlistForm
            ctaText={content.cta_button_text}
            footerNote={content.footer_note}
          />
        </div>
      </div>

      <div className="horizon mx-auto mt-20 max-w-4xl" />
    </header>
  );
}
