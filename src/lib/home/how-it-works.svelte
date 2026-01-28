<script lang="ts">
	import { Icon } from '@cloudparker/moldex.js';
	import {
		mdiAccountTie,
		mdiBookmarkOutline,
		mdiCheckCircle,
		mdiClockOutline,
		mdiFileDocumentOutline,
		mdiMapMarker,
		mdiShieldAccount
	} from '$lib/core/services/app-icons-service';
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const steps = [
		{
			number: '01',
			title: 'Profile review',
			description: 'We capture goals, scores, budget, and location preferences to map eligibility.',
			icon: mdiAccountTie,
			meta: 'Discovery call + intake',
			accent: 'from-amber-200/70 via-white to-indigo-200/50'
		},
		{
			number: '02',
			title: 'Smart shortlisting',
			description: 'Curated colleges, cutoff ranges, and fee clarity with counselor notes.',
			icon: mdiBookmarkOutline,
			meta: 'Shortlist delivered',
			accent: 'from-sky-200/70 via-white to-emerald-200/50'
		},
		{
			number: '03',
			title: 'Application support',
			description: 'Document checklist, form filling, deadline tracking, and submission support.',
			icon: mdiFileDocumentOutline,
			meta: 'Paperwork handled',
			accent: 'from-indigo-200/70 via-white to-amber-200/50'
		},
		{
			number: '04',
			title: 'Admission confirmation',
			description: 'Offer updates, payment guidance, and seat confirmation with final checklist.',
			icon: mdiCheckCircle,
			meta: 'Seat secured',
			accent: 'from-emerald-200/70 via-white to-primary-200/50'
		}
	];

	const badges = [
		{ icon: mdiClockOutline, label: '24-hour response' },
		{ icon: mdiShieldAccount, label: 'Verified counselors' },
		{ icon: mdiMapMarker, label: 'Odisha college network' }
	];

	const metrics = [
		{ value: '4 steps', label: 'Mapped journey' },
		{ value: '1:1', label: 'Dedicated counselor' },
		{ value: 'Daily', label: 'Status updates' }
	];
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-200/40 blur-[100px]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-[100px]"
	></div>

	<div
		class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8"
		use:scrollReveal={{ start: 'top 85%', stagger: 0.12, y: 24 }}
	>
		<div class="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
			<div class="space-y-6">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					How it works
				</p>
				<h2 data-animate class="font-[var(--font-display)] text-3xl text-slate-900 sm:text-4xl">
					A visual, guided admission journey.
				</h2>
				<p data-animate class="max-w-xl text-sm text-slate-600 sm:text-base">
					From the first profile review to seat confirmation, every step is mapped with counselor guidance and
					real-time updates.
				</p>

				<div data-animate class="flex flex-wrap gap-3">
					{#each badges as badge}
						<div
							class="group inline-flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
						>
							<span
								class="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm transition group-hover:scale-105"
							>
								<Icon path={badge.icon} className="h-4 w-4" />
							</span>
							{badge.label}
						</div>
					{/each}
				</div>

				<div data-animate class="grid gap-4 sm:grid-cols-3">
					{#each metrics as metric}
						<div
							class="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
						>
							<p class="text-lg font-semibold text-slate-900">{metric.value}</p>
							<p class="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
								{metric.label}
							</p>
						</div>
					{/each}
				</div>

				<div
					data-animate
					class="group soft-float relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-lg"
				>
					<img
						src="/images/image3.jpg"
						alt="Counselor guiding admissions"
						class="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent"></div>
					<div
						class="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/90 px-3 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-slate-700 shadow-sm"
					>
						Live counselor updates
					</div>
				</div>
			</div>

			<div class="relative">
				<div aria-hidden="true" class="pointer-events-none absolute inset-0 hidden lg:block">
					<span class="process-line"></span>
				</div>

				<div class="space-y-8">
					{#each steps as step, index}
						<div class="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
							<div
								data-animate
								class={`group relative order-2 max-w-lg rounded-3xl border border-white/80 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/60 lg:order-none lg:max-w-md lg:row-start-1 ${
									index % 2 === 0 ? 'lg:col-start-1 lg:justify-self-end' : 'lg:col-start-3 lg:justify-self-start'
								}`}
							>
								<span
									class={`pointer-events-none absolute top-1/2 hidden h-[2px] w-10 -translate-y-1/2 bg-gradient-to-r from-primary-200/0 via-primary-400/60 to-primary-200/0 opacity-60 transition group-hover:opacity-100 lg:block ${
										index % 2 === 0 ? 'right-[-40px]' : 'left-[-40px]'
									}`}
								>
									<span
										class={`absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary-500/80 shadow-md shadow-primary-200/80 ${
											index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
										}`}
									></span>
								</span>
								<div
									class={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''}`}
								>
									<span
										class={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-slate-700 shadow-sm transition duration-300 group-hover:scale-110`}
									>
										<Icon path={step.icon} className="h-5 w-5" />
									</span>
									<div>
										<p class="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
											Stage {step.number}
										</p>
										<h3 class="mt-2 font-[var(--font-display)] text-lg text-slate-900">{step.title}</h3>
										<p class="mt-2 text-sm text-slate-600">{step.description}</p>
										<div
											class={`mt-4 flex items-center gap-2 text-xs text-slate-500 ${
												index % 2 === 0 ? 'lg:justify-end' : ''
											}`}
										>
											<span class="h-2 w-2 rounded-full bg-emerald-500/80"></span>
											<span>{step.meta}</span>
										</div>
									</div>
								</div>
							</div>

							<div class="order-1 flex justify-center lg:order-none lg:col-start-2 lg:row-start-1">
								<div class="process-node flex h-12 w-12 items-center justify-center">
									<span class="process-node__pulse"></span>
									<span
										class="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-primary-200 bg-white/90 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-700 shadow"
									>
										{step.number}
									</span>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.process-line {
		position: absolute;
		left: 50%;
		top: 1.5rem;
		bottom: 1.5rem;
		width: 2px;
		transform: translateX(-50%);
		background: linear-gradient(
			180deg,
			rgba(56, 189, 248, 0) 0%,
			rgba(56, 189, 248, 0.55) 50%,
			rgba(56, 189, 248, 0) 100%
		);
	}

	.process-line::after {
		content: '';
		position: absolute;
		left: 50%;
		top: -20%;
		width: 10px;
		height: 30%;
		transform: translateX(-50%);
		background: linear-gradient(
			180deg,
			rgba(56, 189, 248, 0) 0%,
			rgba(56, 189, 248, 0.75) 50%,
			rgba(56, 189, 248, 0) 100%
		);
		filter: blur(6px);
		animation: flow 6s ease-in-out infinite;
	}

	.process-node {
		position: relative;
	}

	.process-node__pulse {
		position: absolute;
		inset: 0;
		border-radius: 9999px;
		background: rgba(56, 189, 248, 0.2);
		box-shadow: 0 0 0 6px rgba(186, 230, 253, 0.4);
		animation: halo 4.5s ease-in-out infinite;
	}

	.soft-float {
		animation: float 6s ease-in-out infinite;
	}

	@keyframes flow {
		0% {
			transform: translate(-50%, -35%);
			opacity: 0;
		}
		45% {
			opacity: 0.9;
		}
		100% {
			transform: translate(-50%, 90%);
			opacity: 0;
		}
	}

	@keyframes halo {
		0%,
		100% {
			transform: scale(0.92);
			opacity: 0.5;
		}
		50% {
			transform: scale(1.08);
			opacity: 0.9;
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-6px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.process-line::after,
		.process-node__pulse,
		.soft-float {
			animation: none;
		}
	}
</style>
