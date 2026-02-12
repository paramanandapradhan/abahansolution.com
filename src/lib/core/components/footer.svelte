<script lang="ts">
	import { Icon } from '@cloudparker/moldex.js';
	import {
		mdiEmailOutline,
		mdiPhone,
		mdiFacebook,
		mdiInstagram,
		mdiLinkedin,
		mdiYoutube,
		mdiTwitter,
		mdiMapMarker
	} from '../services/app-icons-service';

	type FooterLink = { label: string; href: string; external?: boolean };
	type ContactLink = { label: string; href: string; icon: string; external?: boolean };

	const socialLinks = [
		{ href: 'https://facebook.com/', icon: mdiFacebook, label: 'Facebook', external: true },
		{ href: 'https://instagram.com/', icon: mdiInstagram, label: 'Instagram', external: true },
		{ href: 'https://www.linkedin.com/', icon: mdiLinkedin, label: 'LinkedIn', external: true },
		{ href: 'https://www.youtube.com/', icon: mdiYoutube, label: 'YouTube', external: true },
		{ href: 'https://twitter.com/', icon: mdiTwitter, label: 'Twitter', external: true }
	];

	const contactLinks: ContactLink[] = [
		{ href: 'tel:+917735477511', icon: mdiPhone, label: '+91 7735477511' },
		{ href: 'mailto:abahansolution@gmail.com', icon: mdiEmailOutline, label: 'abahansolution@gmail.com' }
	];

	const exploreLinks: FooterLink[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About Us', href: '/about' },
		{ label: 'Colleges', href: '/colleges' }
	];

	const supportLinks: FooterLink[] = [
		{ label: 'Contact', href: '/contact' },
		{ label: 'Privacy Policy', href: '/privacy' },
		{ label: 'Terms & Conditions', href: '/term' }
	];

	const focusAreas = ['MBBS', 'Engineering', 'Management', 'Career Counseling'];
</script>

<footer class="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary-300/20 blur-3xl"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.12),transparent_55%)]"
	></div>

	<div class="relative mx-auto w-full max-w-7xl px-4 py-16 sm:py-20 lg:px-8">
		<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
			<div class="space-y-6 lg:col-span-5">
				<div class="flex items-center gap-3">
					<a
						href="/"
						
						aria-label="Abahan Solutions"
					>
						<img src="/icons/web/icon-512.png" alt="Abahan Solutions Logo" class="h-10 w-10 object-contain drop-shadow-md" />
					</a>
					<div>
						<p class="text-[0.6rem] font-semibold uppercase tracking-[0.45em] text-primary-500">
							Admission Consulting
						</p>
						<h2 class="text-lg font-black tracking-[0.2em] text-neutral-900">ABAHAN SOLUTIONS</h2>
					</div>
				</div>

				<p class="max-w-md text-sm text-neutral-600">
					Personalized admission guidance with curated college shortlists and clear next steps.
				</p>

				<div class="flex flex-wrap gap-2">
					{#each focusAreas as area}
						<span
							class="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-600 shadow-sm"
						>
							{area}
						</span>
					{/each}
				</div>

				<div class="space-y-3">
					<p class="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Follow</p>
					<div class="flex flex-wrap gap-3">
						{#each socialLinks as link}
							<a
								href={link.href}
								target={link.external ? '_blank' : undefined}
								rel={link.external ? 'noopener noreferrer' : undefined}
								aria-label={link.label}
								class="group relative"
							>
								<span
									class="absolute inset-0 rounded-full bg-primary-500/10 opacity-0 transition group-hover:opacity-100"
								></span>
								<span
									class="relative flex h-10 w-10 items-center justify-center rounded-full border border-primary-200/70 bg-white/90 text-primary-600 shadow-sm transition group-hover:-translate-y-0.5 group-hover:border-primary-300 group-hover:text-primary-700 group-hover:shadow-md"
								>
									<Icon path={link.icon} className="h-4 w-4" />
								</span>
							</a>
						{/each}
					</div>
				</div>
			</div>

			<div class="space-y-8 lg:col-span-4">
				<div class="grid gap-8 sm:grid-cols-2">
					<div class="space-y-4">
						<p class="text-sm font-semibold text-neutral-900">Explore</p>
						<ul class="space-y-3">
							{#each exploreLinks as link}
								<li>
									<a
										href={link.href}
										class="group flex items-center gap-3 text-sm text-neutral-600 transition hover:text-primary-600"
									>
										<!-- <span
											class="h-1.5 w-6 rounded-full bg-primary-100 transition group-hover:bg-primary-500"
										></span> -->
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>

					<div class="space-y-4">
						<p class="text-sm font-semibold text-neutral-900">Support</p>
						<ul class="space-y-3">
							{#each supportLinks as link}
								<li>
									<a
										href={link.href}
										target={link.external ? '_blank' : undefined}
										rel={link.external ? 'noopener noreferrer' : undefined}
										class="group flex items-center gap-3 text-sm text-neutral-600 transition hover:text-primary-600"
									>
										
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="rounded-3xl border border-white/70 bg-white/80 p-5 text-xs text-neutral-600 shadow-sm">
					<p class="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Admissions desk</p>
					<p class="mt-3 text-sm text-neutral-700">
						Guiding students across Odisha and India with clarity on choices and processes.
					</p>
				</div>
			</div>

			<div class="footer-gradient group relative rounded-3xl p-[1px] md:col-span-2 lg:col-span-3">
				<div
					class="relative rounded-[calc(1.5rem-1px)] bg-white/95 p-6 shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-primary-200/60"
				>
					<p class="text-sm font-semibold text-neutral-900">Talk to a counselor</p>
					<p class="mt-2 text-xs text-neutral-600">
						Share your goals and scores. We will craft a focused shortlist for you.
					</p>

					<div class="mt-4 space-y-3">
						{#each contactLinks as link}
							<a
								href={link.href}
								class="group flex items-center gap-3 text-sm text-neutral-700 transition hover:text-primary-600"
							>
								<span
									class="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition group-hover:bg-primary-100"
								>
									<Icon path={link.icon} className="h-4 w-4" />
								</span>
								{link.label}
							</a>
						{/each}
					</div>

					<a
						href="/contact"
						class="mt-5 inline-flex items-center justify-center rounded-full bg-linear-to-r from-primary-400 via-primary-500 to-primary-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
					>
						Get a shortlist
					</a>

					<div class="mt-4 flex items-center gap-3 rounded-2xl bg-primary-50/80 px-3 py-2 text-[0.65rem] text-neutral-600">
						<span class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-600">
							<Icon path={mdiMapMarker} className="h-4 w-4" />
						</span>
						<span>Serving Odisha and pan-India</span>
					</div>
				</div>
			</div>
		</div>

		<div class="relative mt-12 p-2 sm:p-4">
			<p
				aria-hidden="true"
				class="pointer-events-none absolute -bottom-6 left-1/2 w-full -translate-x-1/2 text-center text-[2.2rem] font-black tracking-[0.32em] text-primary-500/10 sm:text-[3rem] lg:text-[4.2rem]"
			>
				ABAHAN SOLUTIONS
			</p>
			<div class="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div class="space-y-2">
					<p class="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
						Trusted admission partners
					</p>
					<p class="text-sm text-neutral-700">
						Counseling, shortlists, and application support tailored to your academic goals.
					</p>
				</div>
				<div class="flex flex-wrap items-center gap-2">
					<span
						class="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-600 shadow-sm"
					>
						Counseling
					</span>
					<span
						class="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-600 shadow-sm"
					>
						Shortlists
					</span>
					<span
						class="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-600 shadow-sm"
					>
						Application support
					</span>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer-gradient {
		background-image: linear-gradient(120deg, rgba(14, 165, 233, 0.45), rgba(56, 189, 248, 0.4), rgba(16, 185, 129, 0.45));
		background-size: 200% 200%;
		animation: footer-gradient 10s ease infinite;
	}

	@keyframes footer-gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.footer-gradient {
			animation: none;
		}
	}
</style>
