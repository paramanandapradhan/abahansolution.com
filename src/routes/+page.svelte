<script lang="ts">
	import { browser } from "$app/environment";
	import { onDestroy, onMount } from "svelte";

	import AppNavbar from "$lib/core/components/app-navbar.svelte";
	import CopyRights from "$lib/core/components/copy-rights.svelte";
	import Footer from "$lib/core/components/footer.svelte";
	import HomeDialogApplicationForm from "$lib/form/home-dialog-application-form.svelte";
	import FeaturedColleges from "$lib/home/featured-colleges.svelte";
	import FooterCta from "$lib/home/footer-cta.svelte";
	import HeroSection from "$lib/home/hero-section.svelte";
	import HowItWorks from "$lib/home/how-it-works.svelte";
	import PopularCourses from "$lib/home/popular-courses.svelte";
	import Testimonials from "$lib/home/testimonials.svelte";
	import WhyChooseUs from "$lib/home/why-choose-us.svelte";
	import ApplicationForm from "$lib/form/application-form.svelte";

	const homeFormSessionKey = "home_application_dialog_seen";
	const minDialogDelayMs = 2000;
	const maxDialogDelayMs = 3000;

	let showApplicationDialog = $state(false);
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
		if (event.target !== event.currentTarget) {
			return;
		}

		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
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

	$effect(() => {
		if (!browser) {
			return;
		}

		document.body.classList.toggle("overflow-hidden", showApplicationDialog);

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	});

	onDestroy(() => {
		if (openDialogTimer) {
			clearTimeout(openDialogTimer);
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
		class="fixed inset-0 z-[120] grid place-items-center bg-slate-950/65 p-3 backdrop-blur-sm sm:p-6"
		role="dialog"
		aria-modal="true"
		aria-label="Application form dialog"
		tabindex="-1"
		onclick={handleBackdropClick}
		onkeydown={handleBackdropKeydown}
	>
		<div class="w-full max-w-4xl overflow-hidden rounded-[30px]">
			<HomeDialogApplicationForm onClose={closeApplicationDialog} />
		</div>
	</div>
{/if}
