import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy Growth Infrastructure lander → the maintained flagship page.
      // Temporary (307) so it stays easy to reverse and browsers don't
      // cache it permanently while the repositioning settles.
      {
        source: "/growth-infrastructure",
        destination: "/linkedin-growth",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
