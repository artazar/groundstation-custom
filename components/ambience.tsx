/** Background layers: a spotlight from above, drifting auroras, grid, grain. */
export function Ambience() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="spotlight" />
      <div className="aurora aurora-violet left-1/2 top-[-16rem] h-[34rem] w-[52rem] -translate-x-1/2" />
      <div className="aurora aurora-cyan left-[-8rem] top-[26rem] h-[26rem] w-[26rem] opacity-40" />
      <div className="aurora aurora-fuchsia right-[-10rem] top-[8rem] h-[26rem] w-[26rem] opacity-35" />
      <div className="grid-veil" />
      <div className="grain" />
      <div className="absolute inset-x-0 bottom-0 h-[46rem] bg-gradient-to-t from-[#05060b] via-[#05060b]/85 to-transparent" />
    </div>
  );
}
