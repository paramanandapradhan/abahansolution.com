<script lang="ts">
	import { Icon } from '@cloudparker/moldex.js';
	import {
		mdiCheckCircle,
		mdiClockOutline,
		mdiMapMarker,
		mdiShieldAccount
	} from '$lib/core/services/app-icons-service';
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const badges = [
		{ icon: mdiShieldAccount, label: 'Verified counselors' },
		{ icon: mdiMapMarker, label: 'Odisha-first expertise' },
		{ icon: mdiClockOutline, label: '24-hour response' }
	];

	const promises = [
		'Profile-first guidance with clear eligibility checks',
		'Transparent timelines, fees, and documentation',
		'End-to-end support until seat confirmation'
	];

	const stats = [
		{ value: '20+', label: 'Partner colleges' },
		{ value: '500+', label: 'Students guided' },
		{ value: '4.9/5', label: 'Family satisfaction' }
	];
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary-200/40 blur-[120px]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-[120px]"
	></div>

	<div
		class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8"
		use:scrollReveal={{ start: 'top 85%', stagger: 0.12, y: 26 }}
	>
		<div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
			<div class="space-y-6">
				<p
					data-animate
					class="inline-flex items-center gap-3 rounded-full border border-primary-200/70 bg-white/90 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-primary-600 shadow-sm"
				>
					<span class="relative flex h-2 w-2">
						<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75"></span>
						<span class="relative inline-flex h-2 w-2 rounded-full bg-primary-600"></span>
					</span>
					About Abahan Solutions
				</p>

				<h1 data-animate class="font-[var(--font-display)] text-4xl text-slate-900 sm:text-5xl">
					A guidance-first admission partner for Odisha families.
				</h1>
				<p data-animate class="max-w-xl text-sm text-slate-600 sm:text-base">
					We help students navigate competitive admissions with clarity, structure, and verified counselor
					support. From profile analysis to final seat confirmation, every decision stays informed and stress-free.
				</p>

				<div data-animate class="grid gap-3">
					{#each promises as promise}
						<div class="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-sm">
							<span class="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
								<Icon path={mdiCheckCircle} className="h-3.5 w-3.5" />
							</span>
							<p class="text-sm text-slate-600">{promise}</p>
						</div>
					{/each}
				</div>

				<div data-animate class="flex flex-wrap gap-3">
					{#each badges as badge}
						<div class="group inline-flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
							<span class="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition group-hover:scale-105">
								<Icon path={badge.icon} className="h-4 w-4" />
							</span>
							{badge.label}
						</div>
					{/each}
				</div>

				<div data-animate class="flex flex-wrap gap-4">
					<a
						href="/contact"
						class="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-primary-700"
					>
						Talk to a counselor
					</a>
					<a
						href="/colleges"
						class="inline-flex items-center justify-center rounded-full border border-primary-200/70 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 transition hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-700"
					>
						Explore colleges
					</a>
				</div>
			</div>

			<div class="space-y-5">
				<div data-animate class="grid gap-4 sm:grid-cols-2">
					<div class="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-lg">
						<img
							src="/images/image10.jpg"
							alt="Students receiving admission guidance"
							class="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent"></div>
						<p class="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">
							Guided admissions
						</p>
					</div>
					<div class="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-lg">
						<img
							src="/images/image12.jpg"
							alt="Campus counseling session"
							class="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent"></div>
						<p class="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">
							Student-first support
						</p>
					</div>
				</div>

				<div data-animate class="rounded-3xl border border-white/80 bg-white/95 p-6 shadow-lg">
					<p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Impact so far</p>
					<div class="mt-4 grid gap-4 sm:grid-cols-3">
						{#each stats as stat}
							<div class="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-center shadow-sm">
								<p class="text-lg font-semibold text-slate-900">{stat.value}</p>
								<p class="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
									{stat.label}
								</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
