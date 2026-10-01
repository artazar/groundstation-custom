import { ChevronDown } from "lucide-react";
import type { WaitlistFaq } from "@/lib/content";

export function Faq({ faq }: { faq: WaitlistFaq[] }) {
  if (!faq?.length) return null;

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-sm font-medium uppercase tracking-[0.2em] text-white/35">
          Questions
        </h2>

        <div className="mt-10 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {faq.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex items-center justify-between gap-6 text-left">
                <span className="text-[15px] font-medium text-white/90">
                  {item.question}
                </span>
                <ChevronDown className="faq-chevron h-4 w-4 shrink-0 text-white/40 transition-transform duration-300" />
              </summary>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
