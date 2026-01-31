import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export for Netlify
  output: "export",
  images: {
    unoptimized: true, // For static exports
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
