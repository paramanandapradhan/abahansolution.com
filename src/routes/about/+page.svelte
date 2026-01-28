<script lang="ts">
	import AppNavbar from "$lib/core/components/app-navbar.svelte";
	import CopyRights from "$lib/core/components/copy-rights.svelte";
	import Footer from "$lib/core/components/footer.svelte";
	import AboutCta from "$lib/about/about-cta.svelte";
	import AboutHero from "$lib/about/about-hero.svelte";
	import AboutStory from "$lib/about/about-story.svelte";
	import AboutValues from "$lib/about/about-values.svelte";

</script>

<div class="min-h-full bg-white text-neutral-900">
	<AppNavbar hasLogo hasTitle hasSubtitle />
	<main>
		<AboutHero />
		<AboutStory />
		<AboutValues />
		<AboutCta />
	</main>
	<Footer />
	<CopyRights />
</div>
