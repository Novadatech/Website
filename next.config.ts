import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // The Growth Infrastructure offer page now lives at
      // /growth-infrastructure (channel-agnostic URL — no LinkedIn mention).
      // Old URLs redirect there. All temporary (307) so they stay easy to
      // reverse and browsers don't cache them permanently.
      {
        source: "/linkedin-growth",
        destination: "/growth-infrastructure",
        permanent: false,
      },
      // Retired design-test URL.
      {
        source: "/linkedin-growth-v2",
        destination: "/growth-infrastructure",
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
        destination: "/growth-infrastructure",
        permanent: false,
      },
      // Dead closer-model offer — retired.
      {
        source: "/sales-closer",
        destination: "/growth-infrastructure",
        permanent: false,
      },
      {
        source: "/sales-closer2",
        destination: "/growth-infrastructure",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
