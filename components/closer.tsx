import { WaitlistForm } from "@/components/waitlist-form";
import type { WaitlistContent } from "@/lib/content";

/** Second ask, after the objections are handled. */
export function Closer({ content }: { content: WaitlistContent }) {
  return (
    <section className="relative px-6 pb-28">
      <div className="glass relative mx-auto max-w-3xl overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
        <div className="aurora aurora-violet left-1/2 top-[-14rem] h-[24rem] w-[36rem] -translate-x-1/2 opacity-70" />
        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            Be first through the door.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/50">
            Early access goes out in small batches, in signup order.
          </p>
          <div className="mt-8">
            <WaitlistForm
              ctaText={content.cta_button_text}
              footerNote={content.footer_note}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
