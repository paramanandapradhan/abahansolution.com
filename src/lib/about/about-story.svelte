<script lang="ts">
	import { Icon } from '@cloudparker/moldex.js';
	import { mdiCheckCircle, mdiAccountTie, mdiBookOpenVariantOutline } from '$lib/core/services/app-icons-service';
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const pillars = [
		{
			title: 'Student-first counseling',
			detail: 'Every shortlist is built around your scores, budget, and long-term goals.'
		},
		{
			title: 'Clear documentation',
			detail: 'We track every form, deadline, and verification step with full transparency.'
		},
		{
			title: 'Outcome-ready guidance',
			detail: 'Our team follows through until seat confirmation and onboarding.'
		}
	];

	const storyPoints = [
		'Built in Odisha with deep local college knowledge',
		'Guidance that balances ambition with eligibility reality',
		'Families stay informed with proactive counselor updates'
	];
</script>

<section class="relative overflow-hidden bg-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.12),transparent_55%)]"
	></div>

	<div
		class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8"
		use:scrollReveal={{ start: 'top 85%', stagger: 0.12, y: 24 }}
	>
		<div class="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
			<div class="space-y-6">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Our story
				</p>
				<h2 data-animate class="font-[var(--font-display)] text-3xl text-slate-900 sm:text-4xl">
					Built on clarity, care, and real admissions success.
				</h2>
				<p data-animate class="text-sm text-slate-600 sm:text-base">
					Abahan Solutions was created to remove the confusion from admissions. Our counselors stay local, highly
					trained, and deeply connected to Odisha colleges so families always receive guidance they can trust.
				</p>

				<div data-animate class="grid gap-4">
					{#each storyPoints as point}
						<div class="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-sm">
							<span class="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
								<Icon path={mdiCheckCircle} className="h-3.5 w-3.5" />
							</span>
							<p class="text-sm text-slate-600">{point}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="space-y-6">
				<div data-animate class="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/90 p-3 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.35)]">
					<div class="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
						<img
							src="/images/image6.jpg"
							alt="Counselor guiding student"
							class="h-full w-full object-cover"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/0 to-transparent"></div>
					</div>
				</div>

				<div data-animate class="grid gap-4 sm:grid-cols-3">
					{#each pillars as pillar}
						<div class="rounded-2xl border border-white/80 bg-white/95 px-4 py-4 text-sm text-slate-700 shadow-sm">
							<p class="font-semibold text-slate-900">{pillar.title}</p>
							<p class="mt-2 text-xs text-slate-600">{pillar.detail}</p>
						</div>
					{/each}
				</div>

				<div data-animate class="flex flex-wrap gap-3">
					<div class="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm">
						<Icon path={mdiAccountTie} className="h-4 w-4" />
						Expert counselors
					</div>
					<div class="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm">
						<Icon path={mdiBookOpenVariantOutline} className="h-4 w-4" />
						Verified colleges
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
