import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://brandots.in"; // Change to your production domain

  // List your static routes here
  const routes = [
    "",
    "about",
    "services",
    "technologies",
    "industries",
    "careers",
    "contact",
    "blog",
    // Add more routes as needed
  ];

  const urls = routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}/${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}