import { Hexagon } from "lucide-react";

export function Nav({ productName }: { productName: string }) {
  return (
    <nav className="absolute inset-x-0 top-0 z-20 px-6 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-semibold tracking-[-0.01em] text-white/85">
          <Hexagon className="h-4 w-4 text-violet-300" strokeWidth={2} />
          {productName}
        </span>
        <a
          href="#join"
          className="rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-white/60 transition hover:border-white/25 hover:text-white"
        >
          Join waitlist
        </a>
      </div>
    </nav>
  );
}
