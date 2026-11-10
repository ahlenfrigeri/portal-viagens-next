import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Libera o next/image para carregar as fotos do picsum.photos
  images: {
    remotePatterns: [new URL("https://picsum.photos/**"), new URL("https://fastly.picsum.photos/**")],
  },
};

export default nextConfig;
