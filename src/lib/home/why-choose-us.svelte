<script lang="ts">
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const reasons = [
		{
			title: 'Personalized shortlisting',
			description: 'We match every student to colleges by rank, budget, and career goals.'
		},
		{
			title: 'Transparent process',
			description: 'Clear timelines, eligibility checks, and fee guidance from day one.'
		},
		{
			title: 'Strong college network',
			description: 'Trusted relationships across Odisha and pan-India campuses.'
		},
		{
			title: 'End-to-end support',
			description: 'From documents to final admission, we stay with you throughout.'
		}
	];
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/70 to-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-20 left-0 h-64 w-64 rounded-full bg-primary-200/40 blur-[80px]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-emerald-200/40 blur-[80px]"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8" use:scrollReveal>
		<div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
			<div class="max-w-xl space-y-4">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Why choose Abahan
				</p>
				<h2 data-animate class="font-[var(--font-display)] text-3xl text-neutral-900 sm:text-4xl">
					Guidance built on trust, speed, and real results.
				</h2>
			</div>
			<p data-animate class="max-w-md text-sm text-neutral-600">
				Every student deserves a clear admission path. We combine expert counselors, verified college options,
				and proactive follow-ups so you never miss a window.
			</p>
		</div>

		<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each reasons as reason}
				<article
					data-animate
					class="group rounded-3xl border border-white/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition group-hover:bg-primary-100"
					>
						<span class="text-sm font-semibold uppercase">{reason.title.slice(0, 1)}</span>
					</div>
					<h3 class="mt-5 font-[var(--font-display)] text-lg text-neutral-900">{reason.title}</h3>
					<p class="mt-3 text-sm text-neutral-600">{reason.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
