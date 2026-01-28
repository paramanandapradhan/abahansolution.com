<script lang="ts">
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const steps = [
		{
			title: 'Discovery & eligibility review',
			detail: 'We map your goals, exam scores, and budget into a verified eligibility plan.'
		},
		{
			title: 'Smart shortlist delivery',
			detail: 'Receive a curated list of colleges with counselor notes and cutoff clarity.'
		},
		{
			title: 'Application & confirmation',
			detail: 'We track documents, deadlines, and confirm your seat with full transparency.'
		}
	];
</script>

<section class="relative overflow-hidden bg-slate-50">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.14),transparent_60%)]"
	></div>

	<div
		class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8"
		use:scrollReveal={{ start: 'top 85%', stagger: 0.12, y: 26 }}
	>
		<div class="rounded-[2.5rem] border border-white/80 bg-white/90 p-8 shadow-lg">
			<div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
				<div class="max-w-2xl space-y-4">
					<p
						data-animate
						class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
					>
						Our commitment
					</p>
					<h2 data-animate class="font-[var(--font-display)] text-3xl text-slate-900 sm:text-4xl">
						A smoother admission journey starts here.
					</h2>
					<p data-animate class="text-sm text-slate-600 sm:text-base">
						If you are ready to begin, our team can build a custom shortlist and guide every next step within 24 hours.
					</p>
				</div>
				<a
					data-animate
					href="/contact"
					class="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-primary-700"
				>
					Start admission planning
				</a>
			</div>

			<div class="mt-8 grid gap-4 sm:grid-cols-3">
				{#each steps as step, index}
					<div
						data-animate
						class="group rounded-3xl border border-white/80 bg-white/90 px-5 py-4 text-sm text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md"
					>
						<p class="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-slate-400">
							Step {index + 1}
						</p>
						<p class="mt-3 font-semibold text-slate-900">{step.title}</p>
						<p class="mt-2 text-xs text-slate-600">{step.detail}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
