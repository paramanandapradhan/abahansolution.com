<script lang="ts">
	import { scrollReveal } from '$lib/home/scroll-reveal';
</script>

<section class="relative overflow-hidden bg-linear-to-r from-primary-600 via-sky-600 to-emerald-600">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),transparent_55%)]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-white/20 blur-[90px]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-white/10 blur-[90px]"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8" use:scrollReveal>
		<div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
			<div class="space-y-6 text-white">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90"
				>
					Ready for admissions?
				</p>
				<h2 data-animate class="font-[var(--font-display)] text-3xl sm:text-4xl">
					Start your admission journey with Abahan Solutions.
				</h2>
				<p data-animate class="max-w-xl text-sm text-white/85">
					Schedule a free counseling session and get your personalized college shortlist. We respond quickly and
					guide you through every step.
				</p>

				<div data-animate class="flex flex-col gap-3 sm:flex-row sm:items-center">
					<a
						href="/contact"
						class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
					>
						Book free counseling
					</a>
					<a
						href="mailto:abahansolution@gmail.com"
						class="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-white/20"
					>
						Email us
					</a>
				</div>
			</div>

			<div
				data-animate
				class="rounded-3xl border border-white/30 bg-white/10 p-6 text-sm text-white shadow-xl backdrop-blur"
			>
				<p class="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Contact desk</p>
				<div class="mt-4 space-y-4">
					<div class="flex items-center justify-between gap-4">
						<span class="text-white/70">Call</span>
						<a href="tel:+917735477511" class="font-semibold text-white">+91 7735477511</a>
					</div>
					<div class="flex items-center justify-between gap-4">
						<span class="text-white/70">Call</span>
						<a href="tel:+916371494099" class="font-semibold text-white">+91 6371494099</a>
					</div>
					<div class="flex items-center justify-between gap-4">
						<span class="text-white/70">Email</span>
						<a href="mailto:abahansolution@gmail.com" class="font-semibold text-white">
							abahansolution@gmail.com
						</a>
					</div>
				</div>
				<div class="mt-6 rounded-2xl border border-white/30 bg-white/10 p-4 text-xs text-white/80">
					We serve students across Odisha and pan-India with verified admission guidance.
				</div>
			</div>
		</div>
	</div>
</section>
