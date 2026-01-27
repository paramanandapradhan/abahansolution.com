<script lang="ts">
	import { Icon } from '@cloudparker/moldex.js';
	import {
		mdiAccountTie,
		mdiBookmarkOutline,
		mdiCheckCircle,
		mdiClockOutline,
		mdiMapMarker
	} from '$lib/core/services/app-icons-service';
	import { scrollReveal } from '$lib/home/scroll-reveal';

	type Reason = {
		title: string;
		description: string;
		icon: string;
		accent: string;
	};

	const reasons: Reason[] = [
		{
			title: 'Personalized shortlisting',
			description: 'We match every student to Odisha colleges by rank, budget, and career goals.',
			icon: mdiBookmarkOutline,
			accent: 'from-amber-400/20 via-white to-indigo-200/30'
		},
		{
			title: 'Transparent process',
			description: 'Clear timelines, eligibility checks, and fee guidance from day one.',
			icon: mdiCheckCircle,
			accent: 'from-emerald-300/20 via-white to-sky-200/30'
		},
		{
			title: 'Odisha college network',
			description: 'Trusted relationships across public and private campuses in Odisha.',
			icon: mdiMapMarker,
			accent: 'from-sky-300/20 via-white to-amber-200/30'
		},
		{
			title: 'Counselor support',
			description: 'Dedicated experts guide documents, interviews, and seat confirmations.',
			icon: mdiAccountTie,
			accent: 'from-indigo-300/20 via-white to-emerald-200/30'
		},
		{
			title: 'Fast response time',
			description: 'Get verified updates within 24 hours so you never miss a window.',
			icon: mdiClockOutline,
			accent: 'from-rose-300/20 via-white to-amber-200/30'
		}
	];

	const metrics = [
		{ value: '1:1', label: 'Counselor support' },
		{ value: 'Odisha', label: 'Local expertise' },
		{ value: 'Step-by-step', label: 'Admission tracking' }
	];
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/70 to-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-28 left-0 h-72 w-72 rounded-full bg-primary-200/40 blur-[90px]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-[90px]"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8" use:scrollReveal>
		<div class="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
			<div class="space-y-5">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Why choose Abahan
				</p>
				<h2 data-animate class="font-[var(--font-display)] text-3xl text-neutral-900 sm:text-4xl">
					Guidance built on trust, speed, and real results.
				</h2>
				<p data-animate class="max-w-xl text-sm text-neutral-600 sm:text-base">
					Every student deserves a clear admission path. We combine expert counselors, verified Odisha colleges,
					and proactive follow-ups so you never miss a window.
				</p>

				<div data-animate class="flex flex-wrap gap-3">
					{#each metrics as metric}
						<div
							class="rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
						>
							<p class="text-lg font-semibold text-slate-900">{metric.value}</p>
							<p class="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
								{metric.label}
							</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="grid gap-4 sm:grid-cols-2">
				<div
					data-animate
					class="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 shadow-lg"
				>
					<img
						src="/images/image2.jpg"
						alt="Counselor supporting student"
						class="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent"></div>
					<p class="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">
						Verified guidance
					</p>
				</div>
				<div
					data-animate
					class="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 shadow-lg"
				>
					<img
						src="/images/image4.jpg"
						alt="Students in campus"
						class="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent"></div>
					<p class="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">
						Odisha colleges
					</p>
				</div>
			</div>
		</div>

		<div class="relative z-10 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each reasons as reason}
				<article
					class="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/60"
				>
					<div
						class={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${reason.accent} text-slate-700 shadow-sm transition duration-300 group-hover:scale-110`}
					>
						<Icon path={reason.icon} className="h-5 w-5" />
					</div>
					<h3 class="mt-5 font-[var(--font-display)] text-lg text-neutral-900">{reason.title}</h3>
					<p class="mt-3 text-sm text-neutral-600">{reason.description}</p>
					<div
						class="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary-100/60 blur-2xl"
					></div>
				</article>
			{/each}
		</div>
	</div>
</section>
