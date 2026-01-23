<script lang="ts">
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const colleges = [
		'ITER',
		'KIIT',
		'CGU',
		'GITA',
		'GEC',
		'Trident Academy of Technology',
		'DRIEMS',
		'Sri Sri University',
		'GIET, Baniatangi',
		'NIST Berhampur',
		'KIST',
		'NIT (Nalanda)',
		'Dadhichi Group of Institutions',
		'Centurion University'
	];

	const quickLinks = [
		{ label: 'About Us', href: '/about' },
		{ label: 'Colleges', href: '/colleges' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'Privacy Policy', href: '/privacy' },
		{ label: 'Terms & Conditions', href: '/term' }
	];
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-sky-200/40 blur-[80px]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-200/40 blur-[80px]"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-8" use:scrollReveal>
		<div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
			<div>
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Featured colleges
				</p>
				<h2 data-animate class="mt-4 font-[var(--font-display)] text-3xl text-neutral-900 sm:text-4xl">
					Trusted campuses we work with.
				</h2>
				<p data-animate class="mt-3 text-sm text-neutral-600">
					We partner with reputed colleges across Odisha and beyond to match students with the right program.
				</p>

				<div class="mt-8 grid gap-4 sm:grid-cols-2">
					{#each colleges as college, index}
						<div
							data-animate
							class="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md"
						>
							<span
								class="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary-600"
							>
								{index + 1}
							</span>
							<span class="text-sm font-semibold text-neutral-800">{college}</span>
						</div>
					{/each}
				</div>
				<p data-animate class="mt-6 text-sm text-neutral-600">And many more colleges across India.</p>
			</div>

			<div class="space-y-6">
				<div
					data-animate
					class="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
				>
					<h3 class="font-[var(--font-display)] text-xl text-neutral-900">Quick links</h3>
					<ul class="mt-4 space-y-3">
						{#each quickLinks as link}
							<li>
								<a
									href={link.href}
									class="group flex items-center justify-between text-sm font-semibold text-neutral-700 transition hover:text-primary-700"
								>
									<span>{link.label}</span>
									<span class="text-xs text-neutral-400 transition group-hover:text-primary-600">Explore</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<div
					data-animate
					class="rounded-3xl border border-primary-200/70 bg-linear-to-br from-white via-primary-50/60 to-emerald-50/60 p-6 shadow-lg"
				>
					<p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">Need a shortlist?</p>
					<p class="mt-3 text-lg font-semibold text-neutral-900">Get a custom list in 24 hours.</p>
					<p class="mt-3 text-sm text-neutral-600">
						Share your scores and preferences. We will send a curated list and eligibility guidance.
					</p>
					<a
						href="/contact"
						class="mt-5 inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-primary-700"
					>
						Request shortlist
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
