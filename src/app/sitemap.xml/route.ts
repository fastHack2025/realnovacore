import { NextResponse } from "next/server";

export async function GET() {
  const urls = [
    '/',
    '/services',
    '/realisations',
    '/novacore',
    '/contact',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>${process.env.NEXT_PUBLIC_SITE_URL}${url}</loc>
    </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
