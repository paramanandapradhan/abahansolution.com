<script lang="ts">
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const stats = [
		{ value: '120+', label: 'Partner colleges' },
		{ value: '500+', label: 'Successful admissions' },
		{ value: '1:1', label: 'Counselor support' },
		{ value: '24/7', label: 'Follow-up guidance' }
	];

	const focusCards = [
		{
			title: 'Personal counselor',
			description: 'Dedicated advisor for your goals, budget, and location preferences.'
		},
		{
			title: 'Transparent guidance',
			description: 'Clear eligibility checks, timelines, and fee planning before you apply.'
		},
		{
			title: 'Fast admissions support',
			description: 'Document review, application tracking, and admission updates in one place.'
		}
	];
</script>

<section class="relative overflow-hidden bg-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.12),transparent_55%)]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-[90px]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-200/50 blur-[90px]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -right-10 top-16 hidden h-[420px] w-[520px] rounded-[48px] bg-[url('/images/abahan-solution-banner.jpg')] bg-cover bg-center opacity-20 blur-2xl lg:block"
	></div>

	<div
		class="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:pb-20 lg:px-8 lg:pb-24"
		use:scrollReveal={{ start: 'top 85%', stagger: 0.1 }}
	>
		<div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
			<div class="space-y-8">
				<div
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					<span class="inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
					Admissions open now
				</div>

				<div data-animate class="space-y-4">
					<p class="text-xs font-semibold uppercase tracking-[0.5em] text-neutral-500">
						Abahan Solutions
					</p>
					<h1 class="font-[var(--font-display)] text-4xl leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
						Personalized college admission consulting that feels personal.
					</h1>
				</div>

				<p data-animate class="max-w-xl text-lg text-neutral-600">
					We guide students and parents through course selection, college shortlisting, documentation, and
					admission with clarity and speed. From MBBS to B.Tech, our team keeps every step on track.
				</p>

				<div data-animate class="flex flex-col gap-3 sm:flex-row sm:items-center">
					<a
						href="/contact"
						class="group inline-flex items-center justify-center rounded-full bg-linear-to-r from-primary-500 via-sky-500 to-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary-200/60 transition hover:-translate-y-0.5 hover:shadow-xl"
					>
						Book free counseling
					</a>
					<a
						href="tel:+917735477511"
						class="inline-flex items-center justify-center rounded-full border border-primary-200/70 bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 transition hover:-translate-y-0.5 hover:border-primary-400 hover:text-primary-700"
					>
						Call 7735477511
					</a>
				</div>

				<div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
					{#each stats as stat}
						<div
							data-animate
							class="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
						>
							<p class="text-lg font-semibold text-neutral-900">{stat.value}</p>
							<p class="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{stat.label}</p>
						</div>
					{/each}
				</div>

				<div data-animate class="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
					<a
						href="mailto:abahansolution@gmail.com"
						class="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-2 font-semibold text-neutral-700 transition hover:text-primary-700"
					>
						<span class="h-2 w-2 rounded-full bg-primary-500"></span>
						abahansolution@gmail.com
					</a>
					<span class="text-neutral-400">|</span>
					<span class="font-semibold text-neutral-700">+91 7735477511 / 6371494099</span>
				</div>
			</div>

			<div class="relative">
				<div
					data-animate
					class="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.45)] backdrop-blur"
				>
					<div class="flex items-start justify-between gap-3">
						<div>
							<p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">Admission desk</p>
							<h2 class="mt-2 font-[var(--font-display)] text-2xl text-neutral-900">
								Your counseling hub
							</h2>
						</div>
						<span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
							Live now
						</span>
					</div>

					<div class="mt-6 space-y-4">
						{#each focusCards as card}
							<div
								data-animate
								class="group rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md"
							>
								<div class="flex items-center justify-between gap-3">
									<h3 class="font-semibold text-neutral-900">{card.title}</h3>
									<span class="h-2 w-2 rounded-full bg-primary-500/70"></span>
								</div>
								<p class="mt-2 text-sm text-neutral-600">{card.description}</p>
							</div>
						{/each}
					</div>
				</div>

				<div
					data-animate
					class="absolute -bottom-8 -left-6 hidden w-64 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-lg backdrop-blur lg:block"
				>
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Next intake</p>
					<p class="mt-2 text-lg font-semibold text-neutral-900">2025-26 applications</p>
					<p class="mt-2 text-sm text-neutral-600">Get a counselor response in under 24 hours.</p>
				</div>
			</div>
		</div>
	</div>
</section>
