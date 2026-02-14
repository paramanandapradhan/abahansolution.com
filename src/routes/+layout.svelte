<script lang="ts">
	import { ScreenDetector } from '@cloudparker/moldex.js';
	import { page } from '$app/state';
	import {
		DEFAULT_OG_IMAGE,
		buildCanonicalUrl,
		getOrganizationSchema,
		getSeoForPath,
		getWebPageSchema,
		getWebsiteSchema
	} from '$lib/seo';
	import '../app.css';
	import { onMount } from 'svelte';
	import type Lenis from 'lenis';

	let { children } = $props();
	let lenis: Lenis | undefined;
	let tickerCallback: ((time: number) => void) | undefined;
	let gsapInstance: (typeof import('gsap'))['default'] | undefined;

	const organizationSchema = getOrganizationSchema();
	const websiteSchema = getWebsiteSchema();

	const seo = $derived(getSeoForPath(page.url.pathname));
	const canonicalUrl = $derived(buildCanonicalUrl(page.url.pathname));
	const ogImageUrl = $derived(buildCanonicalUrl(DEFAULT_OG_IMAGE));
	const webPageSchema = $derived(
		getWebPageSchema({
			pathname: page.url.pathname,
			title: seo.title,
			description: seo.description
		})
	);

	onMount(() => {
		let destroyed = false;

		void (async () => {
			const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			if (prefersReducedMotion) return;

			const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] = await Promise.all([
				import('lenis'),
				import('gsap'),
				import('gsap/ScrollTrigger')
			]);

			if (destroyed) return;

			gsapInstance = gsap;
			gsap.registerPlugin(ScrollTrigger);

			const instance = new Lenis({
				lerp: 0.08,
				smoothWheel: true
			});

			lenis = instance;
			tickerCallback = (time: number) => {
				instance.raf(time * 1000);
				if (instance.isScrolling) {
					ScrollTrigger.update();
				}
			};

			gsap.ticker.add(tickerCallback);
			gsap.ticker.lagSmoothing(0);
			ScrollTrigger.refresh();
		})();

		return () => {
			destroyed = true;
			if (tickerCallback && gsapInstance) {
				gsapInstance.ticker.remove(tickerCallback);
			}
			lenis?.destroy();
		};
	});
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<link rel="canonical" href={canonicalUrl} />
	<link rel="alternate" hreflang="en-IN" href={canonicalUrl} />
	<link rel="alternate" hreflang="x-default" href={canonicalUrl} />

	<meta property="og:site_name" content="Abahan Solutions" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:alt" content="Abahan Solutions - Admission Guidance and Counseling" />
	<meta property="og:locale" content="en_IN" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={ogImageUrl} />

	<script type="application/ld+json">
		{JSON.stringify(organizationSchema)}
	</script>
	<script type="application/ld+json">
		{JSON.stringify(websiteSchema)}
	</script>
	<script type="application/ld+json">
		{JSON.stringify(webPageSchema)}
	</script>
</svelte:head>

<ScreenDetector />

{@render children()}
