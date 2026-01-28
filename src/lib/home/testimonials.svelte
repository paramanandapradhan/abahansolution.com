<script lang="ts">
	import { Icon } from '@cloudparker/moldex.js';
	import { mdiCheckCircle, mdiCommentQuoteOutline, mdiStar } from '$lib/core/services/app-icons-service';
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const ratingStars = Array.from({ length: 5 }, (_, index) => index);

	const testimonials = [
		{
			name: 'Anisha P.',
			program: 'MBBS Admission',
			outcome: 'Secured seat at a top medical college',
			quote:
				'Abahan Solutions made the process calm and clear. They explained every step and helped with documents on time.',
			tag: 'Parent review',
			accent: 'from-amber-200/70 via-white to-indigo-200/60'
		},
		{
			name: 'Rohan S.',
			program: 'B.Tech Admission',
			outcome: 'Shortlisted 6 colleges in 48 hours',
			quote:
				'The counselor understood my preferences and budget. I got fast responses and transparent guidance.',
			tag: 'Student review',
			accent: 'from-sky-200/70 via-white to-emerald-200/60'
		},
		{
			name: 'Mithila D.',
			program: 'MBA Admission',
			outcome: 'Admission confirmed with scholarship support',
			quote:
				'Their follow-up was outstanding. I never felt lost and got updates exactly when I needed them.',
			tag: 'Scholarship win',
			accent: 'from-indigo-200/70 via-white to-rose-200/60'
		},
		{
			name: 'Sagar K.',
			program: 'B.Pharm Admission',
			outcome: 'Document checklist completed in 2 days',
			quote:
				'Everything felt organized. The counselor checked every document and shared reminders that saved time.',
			tag: 'Fast onboarding',
			accent: 'from-emerald-200/70 via-white to-sky-200/60'
		},
		{
			name: 'Priya M.',
			program: 'BDS Admission',
			outcome: 'Seat confirmed after counseling round',
			quote:
				'I liked the clarity about fees and timelines. We always knew what the next step would be.',
			tag: 'Transparent process',
			accent: 'from-amber-200/70 via-white to-rose-200/60'
		},
		{
			name: 'Arjun N.',
			program: 'MCA Admission',
			outcome: 'Shortlisted 5 colleges with fit notes',
			quote:
				'They compared options and explained the pros and cons honestly. It made our decision easy.',
			tag: 'Clear guidance',
			accent: 'from-sky-200/70 via-white to-indigo-200/60'
		}
	];

	const highlights = [
		{ value: '4.9/5', label: 'Average rating' },
		{ value: '120+', label: 'Families guided' },
		{ value: '48 hrs', label: 'Avg. shortlist time' }
	];

	const trustPoints = [
		'End-to-end document support',
		'Verified counselor follow-ups',
		'Transparent fee guidance'
	];

	const chips = ['Verified admissions', 'Counselor-led updates', 'Odisha colleges'];
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/60 to-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),transparent_55%)]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-emerald-200/50 blur-[110px]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-amber-200/50 blur-[110px]"
	></div>

	<div
		class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8"
		use:scrollReveal={{ start: 'top 85%', stagger: 0.12, y: 26 }}
	>
		<div class="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
			<div class="space-y-5">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Testimonials
				</p>
				<h2 data-animate class="font-[var(--font-display)] text-3xl text-slate-900 sm:text-4xl">
					Real families. Real admissions. Real relief.
				</h2>
				<p data-animate class="max-w-xl text-sm text-slate-600 sm:text-base">
					Every admission story is personal. We keep it transparent, proactive, and organized so students and
					parents always know what is next.
				</p>

				<div data-animate class="flex flex-wrap gap-3">
					{#each chips as chip}
						<span
							class="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-slate-600 shadow-sm"
						>
							{chip}
						</span>
					{/each}
				</div>
			</div>

			<div
				data-animate
				class="relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 shadow-lg"
			>
				<div
					aria-hidden="true"
					class="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.25),transparent_70%)] blur-lg animate-pulse"
				></div>
				<div class="relative">
					<div class="flex items-center justify-between">
						<p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Trust score</p>
						<div class="flex items-center gap-1 text-amber-400">
							{#each ratingStars as star}
								<Icon path={mdiStar} className="h-4 w-4" />
							{/each}
						</div>
					</div>

					<div class="mt-4 flex flex-wrap items-end justify-between gap-4">
						<p class="text-4xl font-semibold text-slate-900">4.9</p>
						<span
							class="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-emerald-700"
						>
							Rated 5/5
						</span>
					</div>

					<div class="mt-6 grid gap-3 sm:grid-cols-3">
						{#each highlights as highlight}
							<div class="rounded-2xl border border-white/80 bg-white/90 px-3 py-3 text-center shadow-sm">
								<p class="text-base font-semibold text-slate-900">{highlight.value}</p>
								<p class="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
									{highlight.label}
								</p>
							</div>
						{/each}
					</div>

					<ul class="mt-6 space-y-3 text-xs text-slate-600">
						{#each trustPoints as point}
							<li class="flex items-start gap-2">
								<span
									class="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
								>
									<Icon path={mdiCheckCircle} className="h-3 w-3" />
								</span>
								<span class="font-semibold uppercase tracking-[0.18em]">{point}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each testimonials as testimonial}
				<article data-animate class="group relative h-full">
					<div
						class={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${testimonial.accent} opacity-0 blur-xl transition duration-500 group-hover:opacity-70`}
					></div>
					<div
						class="relative flex h-full min-h-[22rem] flex-col rounded-3xl border border-white/80 bg-white/90 p-6 shadow-sm backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary-100/60"
					>
						<div class="flex flex-wrap items-start justify-between gap-4">
							<div class="flex items-center gap-4">
								<span
									class={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${testimonial.accent} text-sm font-semibold text-slate-700 shadow-sm transition duration-300 group-hover:scale-105`}
								>
									{testimonial.name.slice(0, 1)}
								</span>
								<div>
									<p class="text-sm font-semibold text-slate-900">{testimonial.name}</p>
									<p class="text-xs text-slate-500">{testimonial.program}</p>
								</div>
							</div>
							<div class="flex items-center gap-1 text-amber-400">
								{#each ratingStars as star}
									<Icon path={mdiStar} className="h-4 w-4 transition group-hover:scale-110" />
								{/each}
							</div>
						</div>

						<div class="relative mt-5 overflow-hidden rounded-2xl bg-slate-50/80 p-6 text-sm text-slate-600">
							<div
								aria-hidden="true"
								class="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(125,211,252,0.35),transparent_70%)] opacity-70"
							></div>
							<!-- <span
								class="absolute -top-3 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/80 bg-white text-primary-600 shadow-sm"
							>
								<Icon path={mdiCommentQuoteOutline} className="h-4 w-4" />
							</span> -->
							<p>"{testimonial.quote}"</p>
						</div>

						<div class="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6 text-xs text-slate-500">
							<span>{testimonial.outcome}</span>
							<span
								class="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-700"
							>
								{testimonial.tag}
							</span>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
