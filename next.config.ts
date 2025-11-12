import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes para Firebase
  },
};

export default nextConfig;
