import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy landers → maintained pages. All temporary (307) so they stay
      // easy to reverse and browsers don't cache them permanently — if any
      // ad campaign turns out to point at one, removing the redirect
      // restores the original page instantly.
      {
        source: "/growth-infrastructure",
        destination: "/linkedin-growth",
        permanent: false,
      },
      // Old booking funnel (duplicate of /book-call).
      {
        source: "/apply",
        destination: "/book-call",
        permanent: false,
      },
      // Old offer lander.
      {
        source: "/get-meetings",
        destination: "/linkedin-growth",
        permanent: false,
      },
      // Dead closer-model offer — retired.
      {
        source: "/sales-closer",
        destination: "/linkedin-growth",
        permanent: false,
      },
      {
        source: "/sales-closer2",
        destination: "/linkedin-growth",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
