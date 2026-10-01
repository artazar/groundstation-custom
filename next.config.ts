import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export keeps generated sites deployable as a plain nginx container
  // on Coolify. Swap to "standalone" if you add API routes / server actions.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
