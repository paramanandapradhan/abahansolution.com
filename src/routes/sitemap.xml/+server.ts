import { buildCanonicalUrl, getSitemapRoutes } from "$lib/seo";

export const prerender = true;

export function GET() {
	const lastModified = new Date().toISOString().split("T")[0];
	const urls = getSitemapRoutes()
		.map(
			(route) => `<url>
	<loc>${buildCanonicalUrl(route.path)}</loc>
	<lastmod>${lastModified}</lastmod>
	<changefreq>${route.changeFrequency}</changefreq>
	<priority>${route.priority.toFixed(1)}</priority>
</url>`
		)
		.join("");

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=0, s-maxage=3600"
		}
	});
}
