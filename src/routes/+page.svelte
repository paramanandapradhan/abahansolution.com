<script lang="ts">
	import { browser } from "$app/environment";
	import { onDestroy, onMount } from "svelte";

	import AppNavbar from "$lib/core/components/app-navbar.svelte";
	import CopyRights from "$lib/core/components/copy-rights.svelte";
	import Footer from "$lib/core/components/footer.svelte";
	import FeaturedColleges from "$lib/home/featured-colleges.svelte";
	import FooterCta from "$lib/home/footer-cta.svelte";
	import HeroSection from "$lib/home/hero-section.svelte";
	import HowItWorks from "$lib/home/how-it-works.svelte";
	import ApplicationForm from "$lib/form/application-form.svelte";
	import PopularCourses from "$lib/home/popular-courses.svelte";
	import Testimonials from "$lib/home/testimonials.svelte";
	import WhyChooseUs from "$lib/home/why-choose-us.svelte";

	const homeFormSessionKey = "home_application_dialog_seen";
	const minDialogDelayMs = 3000;
	const maxDialogDelayMs = 4000;

	let showApplicationDialog = false;
	let openDialogTimer: ReturnType<typeof setTimeout> | undefined;

	function closeApplicationDialog() {
		showApplicationDialog = false;
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeApplicationDialog();
		}
	}

	function handleBackdropKeydown(event: KeyboardEvent) {
		if (event.key === "Enter" || event.key === " ") {
			closeApplicationDialog();
		}
	}

	function handleDialogKeydown(event: KeyboardEvent) {
		if (event.key === "Escape" && showApplicationDialog) {
			closeApplicationDialog();
		}
	}

	onMount(() => {
		const hasSeenDialog = sessionStorage.getItem(homeFormSessionKey) === "1";

		if (hasSeenDialog) {
			return;
		}

		const delayMs =
			Math.floor(Math.random() * (maxDialogDelayMs - minDialogDelayMs + 1)) + minDialogDelayMs;

		openDialogTimer = setTimeout(() => {
			showApplicationDialog = true;
			sessionStorage.setItem(homeFormSessionKey, "1");
		}, delayMs);
	});

	$: if (browser) {
		document.body.classList.toggle("overflow-hidden", showApplicationDialog);
	}

	onDestroy(() => {
		if (openDialogTimer) {
			clearTimeout(openDialogTimer);
		}

		if (browser) {
			document.body.classList.remove("overflow-hidden");
		}
	});
</script>

<svelte:window onkeydown={handleDialogKeydown} />

<div class="min-h-full bg-white text-neutral-900">
	<AppNavbar hasLogo hasTitle hasSubtitle/>
	<main>
		<HeroSection />
		<WhyChooseUs />
		<PopularCourses />
		<HowItWorks />
		<ApplicationForm />
		<Testimonials />
		<FeaturedColleges />
		<FooterCta />
	</main>
	<Footer />
	<CopyRights />
</div>

{#if showApplicationDialog}
	<div
		class="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/60 p-3 sm:p-6"
		role="dialog"
		aria-modal="true"
		aria-label="Application form dialog"
		tabindex="-1"
		onclick={handleBackdropClick}
		onkeydown={handleBackdropKeydown}
	>
		<div class="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl shadow-2xl">
			<button
				type="button"
				class="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
				aria-label="Close form"
				onclick={closeApplicationDialog}
			>
				X
			</button>
			<ApplicationForm />
		</div>
	</div>
{/if}
