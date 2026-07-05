import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the Turbopack workspace root to this project. Without this, a stray
  // lockfile in a parent directory (e.g. ~/package-lock.json) makes Next infer
  // the home folder as the root, which triggers "Permission denied (os error 13)".
  turbopack: {
    root: __dirname,
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
