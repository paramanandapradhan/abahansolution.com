<script lang="ts">
	const currentYear = new Date().getFullYear();

	type QuickLink = { label: string; href: string; external?: boolean };

	const quickLinks: QuickLink[] = [
		{ label: 'Privacy', href: '/privacy' },
		{ label: 'Terms & Conditions', href: '/term' },
		{ label: 'Colleges', href: '/colleges' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'About', href: '/about' }
	];
</script>

<footer class="relative overflow-hidden border-t border-white/70 bg-white/80 text-neutral-700">
	<div aria-hidden="true" class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-400/80 to-transparent"></div>
	<div aria-hidden="true" class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.08),transparent_55%)]"></div>

	<div class="relative mx-auto max-w-7xl px-4 py-6 sm:py-8 lg:px-8">
		<div class="flex flex-col items-center gap-4 text-xs text-neutral-600 md:flex-row md:justify-between">
			<p class="text-center md:text-left">
				<span>&copy; {currentYear} </span>
				<a href="/" class="font-semibold text-neutral-800">
					Abahan Solutions
				</a>
				<span> All rights reserved.</span>
			</p>

			<div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
				{#each quickLinks as link}
					<a
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noopener noreferrer' : undefined}
						class="group relative text-neutral-600 transition hover:text-primary-600"
					>
						<span class="relative">
							{link.label}
							<span
								class="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-linear-to-r from-primary-400 to-primary-600 transition group-hover:scale-x-100"
							></span>
						</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
