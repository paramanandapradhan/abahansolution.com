export const SITE_URL = "https://abahansolution.com";
export const SITE_NAME = "Abahan Solutions";
export const DEFAULT_OG_IMAGE = "/images/abahan-solution-banner.jpg";

type SeoRoute = {
	path: string;
	title: string;
	description: string;
	keywords: string;
	priority: number;
	changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
};

const SEO_ROUTES: SeoRoute[] = [
	{
		path: "/",
		title: "Abahan Solutions | Odisha Admission Counseling & College Guidance",
		description:
			"Get expert admission counseling, college shortlisting, and application support for top colleges in Odisha and across India.",
		keywords:
			"abahan solutions, admission counseling odisha, college admission guidance, btech admission, mbbs admission, mba admission",
		priority: 1,
		changeFrequency: "weekly"
	},
	{
		path: "/about",
		title: "About Abahan Solutions | Trusted Education Counselors",
		description:
			"Learn about Abahan Solutions, our counseling process, and how we help students choose the right college and course with confidence.",
		keywords:
			"about abahan solutions, education counselor odisha, career guidance odisha, admission consultant",
		priority: 0.8,
		changeFrequency: "monthly"
	},
	{
		path: "/colleges",
		title: "Top Colleges in Odisha | Verified College Profiles",
		description:
			"Explore top colleges and universities in Odisha with clear profiles, strengths, and admission guidance from Abahan Solutions.",
		keywords:
			"top colleges in odisha, engineering colleges odisha, mbbs colleges odisha, mba colleges odisha, college shortlist",
		priority: 0.9,
		changeFrequency: "weekly"
	},
	{
		path: "/contact",
		title: "Contact Abahan Solutions | Book Admission Counseling",
		description:
			"Connect with Abahan Solutions for personalized admission support, counseling calls, and application help for your preferred courses.",
		keywords:
			"contact abahan solutions, admission counseling contact, college admission help, education consultant contact",
		priority: 0.8,
		changeFrequency: "monthly"
	},
	{
		path: "/privacy",
		title: "Privacy Policy | Abahan Solutions",
		description: "Read the privacy policy of Abahan Solutions and how we collect, use, and protect your personal information.",
		keywords: "privacy policy, abahan solutions privacy",
		priority: 0.3,
		changeFrequency: "yearly"
	},
	{
		path: "/term",
		title: "Terms and Conditions | Abahan Solutions",
		description: "Read the terms and conditions for using Abahan Solutions website and admission guidance services.",
		keywords: "terms and conditions, abahan solutions terms",
		priority: 0.3,
		changeFrequency: "yearly"
	}
];

const DEFAULT_SEO: SeoRoute = {
	path: "/",
	title: "Abahan Solutions | Admission Guidance for Students",
	description:
		"Abahan Solutions helps students with personalized college shortlisting, counseling, and application support.",
	keywords: "abahan solutions, admission counseling, college guidance",
	priority: 0.5,
	changeFrequency: "monthly"
};

export function normalizePath(pathname: string): string {
	if (!pathname || pathname === "/") {
		return "/";
	}

	return pathname.replace(/\/+$/, "");
}

export function buildCanonicalUrl(pathname: string): string {
	const normalizedPath = normalizePath(pathname);
	return normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;
}

export function getSeoForPath(pathname: string): SeoRoute {
	const normalizedPath = normalizePath(pathname);
	return SEO_ROUTES.find((route) => route.path === normalizedPath) ?? DEFAULT_SEO;
}

export function getSitemapRoutes(): SeoRoute[] {
	return SEO_ROUTES;
}

type WebPageSchemaInput = {
	pathname: string;
	title: string;
	description: string;
};

export function getOrganizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: SITE_NAME,
		url: SITE_URL,
		logo: `${SITE_URL}/icons/web/icon-512.png`,
		email: "abahansolution@gmail.com",
		telephone: "+91-7735477511",
		contactPoint: [
			{
				"@type": "ContactPoint",
				telephone: "+91-7735477511",
				contactType: "customer support",
				areaServed: "IN",
				availableLanguage: ["English", "Hindi"]
			}
		]
	};
}

export function getWebsiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE_NAME,
		url: SITE_URL,
		inLanguage: "en-IN"
	};
}

export function getWebPageSchema({ pathname, title, description }: WebPageSchemaInput) {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: title,
		description,
		url: buildCanonicalUrl(pathname),
		isPartOf: {
			"@type": "WebSite",
			name: SITE_NAME,
			url: SITE_URL
		}
	};
}
