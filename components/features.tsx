import { resolveIcon } from "@/lib/icons";
import type { WaitlistFeature } from "@/lib/content";

export function Features({ features }: { features: WaitlistFeature[] }) {
  if (!features?.length) return null;

  return (
    <section className="px-6 pt-16 pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = resolveIcon(feature.icon);
            return (
              <article
                key={feature.title}
                className="feature-card glass rounded-2xl p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/40 to-cyan-400/20 text-violet-100 ring-1 ring-inset ring-white/10">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-[-0.01em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
