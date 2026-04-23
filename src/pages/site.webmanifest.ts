import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const manifest = {
    name: "blu-consultant",
    short_name: "BluConsultant",
    description: "Your trusted single partner for all HR solutions across India.",
    start_url: `${base}/`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      { src: `${base}/icon-192.png`, sizes: "192x192", type: "image/png" },
      { src: `${base}/icon-512.png`, sizes: "512x512", type: "image/png" },
    ],
  };

  return new Response(JSON.stringify(manifest), {
    headers: { "Content-Type": "application/manifest+json" },
  });
};