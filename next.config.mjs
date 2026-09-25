/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next advertises itself in a response header nobody needs.
  poweredByHeader: false,
  images: {
    // AVIF first (smallest), WebP fallback. Every project screenshot is served
    // through next/image, so this is literally what the browser downloads.
    formats: ["image/avif", "image/webp"],
    // Optimised variants are keyed by URL, so they can be cached for a long time.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  // Security headers for Lighthouse Best Practices & hardening
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        /*
         * Static artwork and screenshots in /public are served with
         * `Cache-Control: max-age=0` by default, which means a conditional
         * request on every single visit. These files only change when a new
         * deploy ships them, so let the browser keep them for a day and refresh
         * them in the background.
         */
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/projects/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/experience/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
