<script lang="ts">
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const courseTags = [
		'MBBS',
		'BDS',
		'B.Tech',
		'M.Tech',
		'MBA',
		'MCA',
		'B.Pharm',
		'BBA',
		'BCA',
		'MSc',
		'B.Sc Ag.'
	];

	const highlights = [
		{
			title: 'Pan-India admissions',
			detail: 'Trusted network across leading colleges and universities.'
		},
		{
			title: '1:1 counselor guidance',
			detail: 'Dedicated support for shortlisting, applications, and follow-ups.'
		},
		{
			title: 'Clear, fast updates',
			detail: 'Transparent timelines and admission status at every step.'
		}
	];

	const stats = [
		{ value: '120+', label: 'Partner colleges' },
		{ value: '500+', label: 'Students guided' },
		{ value: '24 hrs', label: 'Avg. response time' }
	];
</script>

<section class="relative overflow-hidden bg-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),transparent_55%)]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-emerald-200/50 blur-[90px]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-sky-200/60 blur-[90px]"
	></div>

	<div
		class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8"
		use:scrollReveal={{ start: 'top 85%', stagger: 0.1 }}
	>
		<div class="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
			<div class="space-y-6">
				<div
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Admissions open 2025-26
				</div>

				<h1 data-animate class="font-[var(--font-display)] text-4xl leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
					Secure your dream admission with Abahan Solutions
				</h1>

				<p data-animate class="max-w-xl text-base text-neutral-600 sm:text-lg">
					Expert guidance for MBBS, BDS, B.Tech, MBA, MCA, B.Pharm, and more with hassle-free admissions across top
					colleges in India.
				</p>

				<div data-animate class="flex flex-wrap gap-2">
					{#each courseTags as tag}
						<span
							class="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 shadow-sm"
						>
							{tag}
						</span>
					{/each}
				</div>

				<div data-animate class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
					<a
						href="tel:+917735477511"
						class="inline-flex items-center justify-center rounded-full bg-linear-to-r from-primary-500 via-sky-500 to-emerald-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary-200/60 transition hover:-translate-y-0.5 hover:shadow-xl"
					>
						Call Now: 7735477511
					</a>
					<a
						href="mailto:abahansolution@gmail.com"
						class="inline-flex items-center justify-center rounded-full border border-primary-200/70 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 transition hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-700"
					>
						Email Us
					</a>
					<a
						href="/contact"
						class="inline-flex items-center justify-center rounded-full border border-emerald-200/70 bg-emerald-50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-800"
					>
						Get Free Counselling
					</a>
				</div>

				<div data-animate class="flex flex-wrap items-center gap-4 text-xs text-neutral-500">
					<span class="inline-flex items-center gap-2">
						<span class="h-2 w-2 rounded-full bg-emerald-500"></span>
						abahansolution@gmail.com
					</span>
					<span class="text-neutral-300">|</span>
					<span>+91 7735477511 / 6371494099</span>
				</div>

				<div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
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
			</div>

			<div class="relative">
				<div
					data-animate
					class="rounded-[2.5rem] border border-white/80 bg-white/90 p-3 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)]"
				>
					<div class="flex items-center justify-between px-2 pb-3">
						<span
							class="rounded-full border border-primary-200/70 bg-white px-3 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-primary-700 shadow-sm"
						>
							Admission Desk
						</span>
						<span class="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-neutral-400">
							Verified Guidance
						</span>
					</div>
					<div class="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-slate-50">
						<img
							src="/images/abahan-solution-banner.jpg"
							alt="Abahan Solutions admission consulting banner"
							class="h-full w-full object-contain"
							loading="lazy"
						/>
					</div>
				</div>

				<div
					data-animate
					class="mt-6 max-w-sm rounded-2xl border border-white/80 bg-white/90 p-4 shadow-lg"
				>
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Quick response</p>
					<p class="mt-2 text-sm font-semibold text-neutral-900">Get counselor guidance within 24 hours.</p>
					<p class="mt-2 text-xs text-neutral-600">Clear steps, verified updates, and smooth admissions.</p>
				</div>
			</div>
		</div>

		<div class="relative z-10 mt-8 grid gap-4 sm:grid-cols-3">
			{#each highlights as highlight}
				<div
					class="rounded-2xl border border-primary-100/80 bg-gradient-to-br from-white via-primary-50/60 to-emerald-50/50 p-6 text-md text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
				>
					<p class="font-semibold text-neutral-900">{highlight.title}</p>
					<p class="mt-2 text-sm text-neutral-600">{highlight.detail}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
