<script lang="ts">
	import { Icon } from '@cloudparker/moldex.js';
	import {
		mdiAccountTie,
		mdiBookOpenVariantOutline,
		mdiCheckCircle,
		mdiClockOutline,
		mdiMapMarker,
		mdiShieldAccount
	} from '$lib/core/services/app-icons-service';
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const courseTags = ['MBBS', 'BDS', 'B.Tech', 'MBA', 'MCA', 'B.Pharm', 'BBA', 'BCA', 'M.Sc'];

	const trustBadges = [
		{ icon: mdiShieldAccount, label: 'Verified counselors' },
		{ icon: mdiMapMarker, label: 'Odisha admissions only' },
		{ icon: mdiClockOutline, label: '24-hour response' }
	];

	const highlights = [
		{
			title: 'Smart shortlisting',
			detail: 'Data-backed college options matched to your budget and eligibility.',
			icon: mdiBookOpenVariantOutline
		},
		{
			title: 'Application support',
			detail: 'Document checks, form filling, and deadline tracking handled end-to-end.',
			icon: mdiCheckCircle
		},
		{
			title: 'Counselor guidance',
			detail: 'Dedicated experts help with interviews, scholarships, and seat confirmations.',
			icon: mdiAccountTie
		}
	];

	const stats = [
		{ value: '20+', label: 'Partner colleges' },
		{ value: '500+', label: 'Students guided' },
		{ value: '24 hrs', label: 'Avg. response time' }
	];

	const quickSteps = ['Profile evaluation', 'Document verification', 'Seat confirmation'];
</script>

<section class="relative overflow-hidden bg-slate-50">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),transparent_55%)]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-36 right-0 h-80 w-80 rounded-full bg-amber-200/50 blur-[100px]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-indigo-200/50 blur-[110px]"
	></div>

	<div
		class="relative mx-auto max-w-7xl px-4 py-14 sm:py-16 lg:py-20 lg:px-8"
		use:scrollReveal={{ start: 'top 85%', stagger: 0.12, y: 28 }}
	>
		<div class="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
			<div class="space-y-6">
				<div
					data-animate
					class="inline-flex items-center gap-3 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-primary-600 shadow-sm"
				>
					<span class="relative flex h-2 w-2">
						<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75"></span>
						<span class="relative inline-flex h-2 w-2 rounded-full bg-primary-600"></span>
					</span>
					Odisha admissions guidance
				</div>

				<h1
					data-animate
					class="font-[var(--font-display)] text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
				>
					Secure your dream admission with
					<span
						class="bg-gradient-to-r from-amber-500 via-primary-600 to-indigo-600 bg-clip-text text-transparent"
					>
						Abahan Solutions
					</span>
				</h1>

				<p data-animate class="max-w-xl text-base text-slate-600 sm:text-lg">
					Expert guidance for MBBS, BDS, B.Tech, MBA, MCA, B.Pharm, and more with verified admissions across top
					colleges in Odisha.
				</p>

				<div data-animate class="flex flex-wrap gap-2">
					{#each courseTags as tag}
						<span
							class="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm"
						>
							{tag}
						</span>
					{/each}
				</div>

				<div data-animate class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
					<a
						href="/contact"
						class="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary-600 via-sky-500 to-emerald-500 px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-primary-200/70 transition hover:-translate-y-0.5 hover:shadow-xl"
					>
						Get free counselling
					</a>
					<a
						href="/colleges"
						class="inline-flex items-center justify-center rounded-full border border-primary-200/70 bg-white px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-slate-700 transition hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-700"
					>
						Explore colleges
					</a>
					<a
						href="tel:+917735477511"
						class="inline-flex items-center justify-center rounded-full border border-emerald-200/70 bg-emerald-50 px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-700 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-800"
					>
						Call now
					</a>
				</div>

				<div data-animate class="flex flex-wrap gap-3">
					{#each trustBadges as badge}
						<div
							class="group inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
						>
							<span
								class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-200/70 via-white to-indigo-200/60 text-slate-700 transition group-hover:scale-105"
							>
								<Icon path={badge.icon} className="h-4 w-4" />
							</span>
							{badge.label}
						</div>
					{/each}
				</div>

				<div data-animate class="grid grid-cols-2 gap-4 sm:grid-cols-3">
					{#each stats as stat}
						<div
							class="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
						>
							<p class="text-lg font-semibold text-slate-900">{stat.value}</p>
							<p class="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
								{stat.label}
							</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="relative">
				<div
					data-animate
					class="group relative rounded-[2.5rem] border border-white/80 bg-white/90 p-3 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)]"
				>
					<div class="flex items-center justify-between px-2 pb-3">
						<span
							class="rounded-full border border-primary-200/70 bg-white px-3 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-primary-700 shadow-sm"
						>
							Admission desk
						</span>
						<span class="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-slate-400">
							Verified guidance
						</span>
					</div>
					<div class="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-slate-50">
						<img
							src="/images/abahan-solution-banner.jpg"
							alt="Abahan Solutions admission consulting banner"
							class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
							loading="eager"
						/>
					</div>
					<div
						class="absolute -bottom-10 left-6 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 text-xs shadow-lg sm:left-10"
					>
						<p class="font-semibold text-slate-900">Counselor guidance in 24 hours</p>
						<p class="mt-1 text-[0.65rem] text-slate-500">Personalized updates, zero confusion.</p>
					</div>
				</div>

				<div class="mt-12 grid gap-4 sm:grid-cols-2">
					<div
						data-animate
						class="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 shadow-lg"
					>
						<img
							src="/images/image6.jpg"
							alt="Campus visit assistance"
							class="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent"></div>
						<p class="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">
							Campus visits
						</p>
					</div>
					<div
						data-animate
						class="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg"
					>
						<p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
							Quick checklist
						</p>
						<ul class="mt-3 space-y-2 text-xs text-slate-600">
							{#each quickSteps as step}
								<li class="flex items-start gap-2">
									<span
										class="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
									>
										<Icon path={mdiCheckCircle} className="h-3 w-3" />
									</span>
									<span class="font-semibold uppercase tracking-[0.18em]">{step}</span>
								</li>
							{/each}
						</ul>
					</div>
					<div
						data-animate
						class="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 shadow-lg"
					>
						<img
							src="/images/image9.jpg"
							alt="Student counseling session"
							class="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent"></div>
						<p class="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">
							1:1 counseling
						</p>
					</div>
					<div
						data-animate
						class="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 shadow-lg"
					>
						<img
							src="/images/image11.jpg"
							alt="Admission documentation support"
							class="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent"></div>
						<p class="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">
							Document help
						</p>
					</div>
				</div>
			</div>
		</div>

		<div
			class="relative z-10 mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
			use:scrollReveal={{ start: 'top 85%', stagger: 0.12, y: 24, selector: '.highlight-card' }}
		>
			{#each highlights as highlight}
				<div
					class="highlight-card group rounded-2xl border border-primary-100/80 bg-gradient-to-br from-white via-primary-50/60 to-indigo-50/40 p-6 text-sm text-slate-800 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
				>
					<span
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm transition group-hover:scale-105"
					>
						<Icon path={highlight.icon} className="h-5 w-5" />
					</span>
					<p class="font-semibold text-slate-900">{highlight.title}</p>
					<p class="mt-2 text-sm text-slate-600">{highlight.detail}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
