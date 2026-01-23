<script lang="ts">
	import { Icon } from '@cloudparker/moldex.js';
	import { mdiEmailOutline, mdiPhone } from '../services/app-icons-service';

	type FooterLink = { label: string; href: string; external?: boolean };

	const socialLinks = [
		{ href: 'tel:+917735477511', icon: mdiPhone, label: 'Call', external: false },
		{ href: 'mailto:abahansolution@gmail.com', icon: mdiEmailOutline, label: 'Email', external: false }
	];

	const companyLinks: FooterLink[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About Us', href: '/about' },
		{ label: 'Colleges', href: '/colleges' },
		{ label: 'Contact', href: '/contact' }
	];

	const resourceLinks: FooterLink[] = [
		{ label: 'Privacy Policy', href: '/privacy' },
		{ label: 'Terms & Conditions', href: '/term' },
		{ label: 'Colleges', href: '/colleges' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<footer class="relative overflow-hidden bg-gradient-to-br from-white via-primary-50 to-sky-50">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-primary-300/20 blur-3xl"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.12),transparent_55%)]"
	></div>

	<div class="relative mx-auto w-full max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
		<div class="grid grid-cols-1 gap-10 text-neutral-800 md:grid-cols-2 lg:grid-cols-12">
			<div class="flex flex-col gap-6 lg:col-span-4">
				<div class="flex items-center gap-3">
					<a
						href="/"
						class="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-sm font-black text-primary-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
						aria-label="Abahan Solutions"
					>
						AS
					</a>
					<div>
						<p class="text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-primary-500">
							Admission Consulting
						</p>
						<h2 class="text-lg font-black tracking-[0.18em] text-neutral-900">ABAHAN SOLUTIONS</h2>
					</div>
				</div>

				<p class="text-sm text-neutral-600">
					Admission consulting for MBBS, engineering, management, and more across Odisha and India.
				</p>

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

				<div class="flex flex-wrap gap-2">
					<span
						class="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-600 shadow-sm"
					>
						Trusted counselors
					</span>
					<span
						class="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-600 shadow-sm"
					>
						Transparent process
					</span>
				</div>
			</div>

			<div class="space-y-4 lg:col-span-3">
				<p class="text-sm font-semibold text-neutral-900">Company</p>
				<ul class="space-y-3">
					{#each companyLinks as link}
						<li>
							<a
								href={link.href}
								class="group flex items-center gap-2 text-sm text-neutral-600 transition hover:text-primary-600"
							>
								<span class="h-1.5 w-1.5 rounded-full bg-primary-200 transition group-hover:bg-primary-500"></span>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="space-y-4 lg:col-span-2">
				<p class="text-sm font-semibold text-neutral-900">Resources</p>
				<ul class="space-y-3">
					{#each resourceLinks as link}
						<li>
							<a
								href={link.href}
								target={link.external ? '_blank' : undefined}
								rel={link.external ? 'noopener noreferrer' : undefined}
								class="group flex items-center gap-2 text-sm text-neutral-600 transition hover:text-primary-600"
							>
								<span class="h-1.5 w-1.5 rounded-full bg-primary-200 transition group-hover:bg-primary-500"></span>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="flex flex-col gap-6 lg:col-span-3">
				<div class="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-sm">
					<p class="text-sm font-semibold text-neutral-900">We are here to help.</p>
					<p class="mt-2 text-xs text-neutral-600">Reach out any time. Our counselors reply fast.</p>
					<div class="mt-4 space-y-3">
						<a
							href="tel:+917735477511"
							class="group flex items-center gap-3 text-sm text-neutral-700 transition hover:text-primary-600"
						>
							<span
								class="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition group-hover:bg-primary-100"
							>
								<Icon path={mdiPhone} className="h-4 w-4" />
							</span>
							+91-7735477511
						</a>
						<a
							href="mailto:abahansolution@gmail.com"
							class="group flex items-center gap-3 text-sm text-neutral-700 transition hover:text-primary-600"
						>
							<span
								class="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition group-hover:bg-primary-100"
							>
								<Icon path={mdiEmailOutline} className="h-4 w-4" />
							</span>
							abahansolution@gmail.com
						</a>
					</div>
				</div>

				<div class="footer-gradient group relative rounded-3xl p-[1px]">
					<div
						class="relative rounded-[calc(1.5rem-1px)] bg-white/95 p-5 shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-primary-200/60"
					>
					<p class="text-sm font-semibold text-neutral-900">Need a custom shortlist?</p>
					<p class="mt-2 text-xs text-neutral-600">
						Share your scores and goals. We will prepare a curated list with guidance.
					</p>
					<a
						href="/contact"
							class="mt-4 inline-flex items-center justify-center rounded-full bg-linear-to-r from-primary-400 via-primary-500 to-primary-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
						>
						Contact Us
					</a>
					<div class="mt-3 flex items-center gap-2 text-[0.65rem] text-neutral-500">
						<span class="inline-flex h-2 w-2 rounded-full bg-primary-500/80 motion-safe:animate-pulse"></span>
						<span>Counselor team online now</span>
					</div>
				</div>
			</div>
			</div>
		</div>

		<div class="relative mt-12 border-t border-white/70 pt-10">
			<p
				aria-hidden="true"
				class="pointer-events-none absolute left-1/2 top-2 w-full -translate-x-1/2 text-center text-[2.2rem] font-black tracking-[0.2em] text-primary-500/10 sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem]"
			>
				ABAHAN SOLUTIONS
			</p>
			<div class="relative flex flex-col items-center justify-center gap-2 text-center">
				<p class="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
					Trusted admission partners
				</p>
				<p class="footer-brand text-3xl font-black tracking-[0.35em] sm:tracking-[0.5em] sm:text-4xl">
					ABAHAN SOLUTIONS
				</p>
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

	.footer-brand {
		background-image: linear-gradient(120deg, rgba(14, 165, 233, 0.95), rgba(59, 130, 246, 0.85), rgba(16, 185, 129, 0.95));
		background-size: 200% 200%;
		animation: footer-brand 12s ease infinite;
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
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

	@keyframes footer-brand {
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
		.footer-brand {
			animation: none;
		}
	}
</style>
