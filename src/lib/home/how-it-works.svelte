<script lang="ts">
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const steps = [
		{
			title: 'Profile review',
			description: 'We understand your goals, scores, budget, and preferred locations.'
		},
		{
			title: 'College shortlist',
			description: 'Get a curated list of colleges and courses aligned with your profile.'
		},
		{
			title: 'Application support',
			description: 'We guide documentation, form filling, and follow-ups with campuses.'
		},
		{
			title: 'Admission confirmation',
			description: 'Secure your seat with verified updates and final admission steps.'
		}
	];
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-200/40 blur-[90px]"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8" use:scrollReveal>
		<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div class="max-w-xl space-y-4">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					How it works
				</p>
				<h2 data-animate class="font-[var(--font-display)] text-3xl text-neutral-900 sm:text-4xl">
					A simple, guided admission journey.
				</h2>
			</div>
			<p data-animate class="max-w-md text-sm text-neutral-600">
				Every step is handled with clarity. Our team keeps communication active so you know what to expect next.
			</p>
		</div>

		<ol class="mt-10 grid gap-6 lg:grid-cols-4">
			{#each steps as step, index}
				<li
					data-animate
					class="group relative rounded-3xl border border-white/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
				>
					<div class="flex items-center justify-between">
						<span class="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
							Step {index + 1}
						</span>
						<span
							class="rounded-full bg-primary-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-600"
						>
							Week {index + 1}
						</span>
					</div>
					<h3 class="mt-5 font-[var(--font-display)] text-lg text-neutral-900">{step.title}</h3>
					<p class="mt-3 text-sm text-neutral-600">{step.description}</p>
					<div class="mt-6 flex items-center gap-2 text-xs text-neutral-500">
						<span class="h-2 w-2 rounded-full bg-emerald-500/80"></span>
						<span>Dedicated counselor check-in</span>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>
