<script lang="ts">
	import { Icon } from '@cloudparker/moldex.js';
	import {
		mdiAccountTie,
		mdiCheckCircle,
		mdiClockOutline,
		mdiMapMarker
	} from '$lib/core/services/app-icons-service';
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const values = [
		{
			title: 'Trusted counselors',
			description: 'Every student gets a dedicated expert for transparent, human guidance.',
			icon: mdiAccountTie,
			accent: 'from-amber-200/70 via-white to-indigo-200/60'
		},
		{
			title: 'Outcome focus',
			description: 'Clear timelines, verified updates, and full follow-through until admission.',
			icon: mdiCheckCircle,
			accent: 'from-emerald-200/70 via-white to-sky-200/60'
		},
		{
			title: 'Fast responses',
			description: '24-hour communication with proactive alerts and shortlist updates.',
			icon: mdiClockOutline,
			accent: 'from-sky-200/70 via-white to-emerald-200/60'
		},
		{
			title: 'Local expertise',
			description: 'Deep relationships with Odisha colleges for reliable admission support.',
			icon: mdiMapMarker,
			accent: 'from-indigo-200/70 via-white to-amber-200/60'
		}
	];
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-24 left-0 h-64 w-64 rounded-full bg-primary-200/35 blur-[90px]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-emerald-200/35 blur-[90px]"
	></div>

	<div
		class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8"
		use:scrollReveal={{ start: 'top 85%', stagger: 0.12, y: 26 }}
	>
		<div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
			<div class="max-w-xl space-y-4">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Our values
				</p>
				<h2 data-animate class="font-[var(--font-display)] text-3xl text-slate-900 sm:text-4xl">
					The standards we never compromise on.
				</h2>
			</div>
			<p data-animate class="max-w-md text-sm text-slate-600">
				Families trust us for clarity, speed, and accountability. These values guide every admission journey.
			</p>
		</div>

		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each values as value}
				<article
					data-animate
					class="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 text-sm text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
				>
					<div
						class={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${value.accent} text-slate-700 shadow-sm transition duration-300 group-hover:scale-110`}
					>
						<Icon path={value.icon} className="h-5 w-5" />
					</div>
					<h3 class="mt-4 font-[var(--font-display)] text-lg text-slate-900">{value.title}</h3>
					<p class="mt-2 text-sm text-slate-600">{value.description}</p>
					<div class="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary-100/60 blur-2xl"></div>
				</article>
			{/each}
		</div>
	</div>
</section>
