<script lang="ts">
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const testimonials = [
		{
			name: 'Anisha P.',
			program: 'MBBS Admission',
			outcome: 'Secured seat at a top medical college',
			quote:
				'Abahan Solutions made the process calm and clear. They explained every step and helped with documents on time.'
		},
		{
			name: 'Rohan S.',
			program: 'B.Tech Admission',
			outcome: 'Shortlisted 6 colleges in 48 hours',
			quote:
				'The counselor understood my preferences and budget. I got fast responses and transparent guidance.'
		},
		{
			name: 'Mithila D.',
			program: 'MBA Admission',
			outcome: 'Admission confirmed with scholarship support',
			quote:
				'Their follow-up was outstanding. I never felt lost and got updates exactly when I needed them.'
		}
	];
</script>

<section class="relative overflow-hidden bg-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),transparent_55%)]"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8" use:scrollReveal>
		<div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
			<div class="max-w-xl space-y-4">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Success stories
				</p>
				<h2 data-animate class="font-[var(--font-display)] text-3xl text-neutral-900 sm:text-4xl">
					Students and parents who trusted us.
				</h2>
			</div>
			<p data-animate class="max-w-md text-sm text-neutral-600">
				We measure success by smooth admissions and delighted families. Here is what they shared after working
				with us.
			</p>
		</div>

		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each testimonials as testimonial}
				<article
					data-animate
					class="group rounded-3xl border border-white/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
				>
					<div class="flex items-center gap-4">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-sm font-semibold text-primary-600"
						>
							{testimonial.name.slice(0, 1)}
						</div>
						<div>
							<p class="text-sm font-semibold text-neutral-900">{testimonial.name}</p>
							<p class="text-xs text-neutral-500">{testimonial.program}</p>
						</div>
					</div>

					<p class="mt-4 text-sm text-neutral-600">"{testimonial.quote}"</p>

					<div class="mt-6 flex items-center justify-between text-xs text-neutral-500">
						<span>{testimonial.outcome}</span>
						<span
							class="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-700"
						>
							Rated 5/5
						</span>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
