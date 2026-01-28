<script lang="ts">
	import { onMount } from 'svelte';
	import { Icon } from '@cloudparker/moldex.js';
	import { mdiEmailOutline, mdiMapMarker, mdiPhone } from '$lib/core/services/app-icons-service';
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const contactCards = [
		{ icon: mdiPhone, label: 'Phone', value: '+91 7735477511', href: 'tel:+917735477511' },
		{
			icon: mdiEmailOutline,
			label: 'Email',
			value: 'abahansolution@gmail.com',
			href: 'mailto:abahansolution@gmail.com'
		},
		{
			icon: mdiMapMarker,
			label: 'Address',
			value: 'Bhubaneswar, Odisha',
			href: 'https://maps.google.com/?q=Bhubaneswar,Odisha'
		}
	];

	const revealOptions = {
		start: 'top 85%',
		stagger: 0.2,
		y: 32,
		duration: 1.25,
		ease: 'power2.out',
		delay: 0.1
	};

	let heroSection: HTMLElement | null = null;

	const prefersReducedMotion = () =>
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	onMount(async () => {
		if (prefersReducedMotion()) return;
		if (!heroSection) return;

		const gsapModule = await import('gsap');
		const gsap =
			(gsapModule as typeof gsapModule & { gsap?: typeof gsapModule }).gsap ??
			gsapModule.default ??
			gsapModule;

		const targets = Array.from(heroSection.querySelectorAll('[data-hero]'));
		if (!targets.length) return;

		gsap.fromTo(
			targets,
			{ opacity: 0, y: 28 },
			{
				opacity: 1,
				y: 0,
				duration: 1.2,
				stagger: 0.18,
				ease: 'power3.out',
				clearProps: 'transform,opacity'
			}
		);
	});
</script>

<section bind:this={heroSection} class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary-200/40 blur-[120px]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-[120px]"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8" use:scrollReveal={revealOptions}>
		<div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
			<div class="space-y-6">
				<p
					data-hero
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Contact us
				</p>
				<h1 data-hero class="font-[var(--font-display)] text-4xl text-slate-900 sm:text-5xl">
					Let's plan your admission journey together.
				</h1>
				<p data-hero class="max-w-xl text-sm text-slate-600 sm:text-base">
					Share your details and we'll respond within 24 hours with personalized guidance, shortlist options, and
					clear next steps.
				</p>

				<div data-animate class="grid gap-4">
					{#each contactCards as card}
						<a
							href={card.href}
							class="group rounded-2xl border border-white/80 bg-white/90 p-4 text-sm text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
						>
							<div class="flex items-center gap-3">
								<span
									class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition duration-300 group-hover:scale-110"
								>
									<Icon path={card.icon} className="h-4 w-4" />
								</span>
								<div>
									<p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{card.label}</p>
									<p class="mt-1 text-sm font-semibold text-slate-900 transition group-hover:text-primary-700">
										{card.value}
									</p>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>

			<div class="space-y-5">
				<div
					data-animate
					class="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
				>
					<img
						src="/images/image14.jpg"
						alt="Counselor helping a student"
						class="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent"></div>
					<p class="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">
						Counselor-led guidance
					</p>
				</div>

				<div data-animate class="rounded-3xl border border-white/80 bg-white/95 p-6 shadow-lg">
					<p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Why reach out?</p>
					<p class="mt-3 text-sm text-slate-600">
						We respond fast, explain eligibility clearly, and keep your admission plan on track.
					</p>
					<div class="mt-4 grid gap-3 sm:grid-cols-2">
						<div class="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-center shadow-sm">
							<p class="text-lg font-semibold text-slate-900">24 hrs</p>
							<p class="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-500">Response time</p>
						</div>
						<div class="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-center shadow-sm">
							<p class="text-lg font-semibold text-slate-900">1:1</p>
							<p class="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
								Counselor support
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
