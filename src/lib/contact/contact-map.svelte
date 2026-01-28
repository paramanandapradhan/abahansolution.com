<script lang="ts">
	import { scrollReveal } from '$lib/home/scroll-reveal';
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white">
	<div
		class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8"	
	>
		<div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
			<div class="max-w-xl space-y-4">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Our location
				</p>
				<h2 data-animate class="font-[var(--font-display)] text-3xl text-slate-900 sm:text-4xl">
					Find us in Bhubaneswar.
				</h2>
			</div>
			<p data-animate class="max-w-md text-sm text-slate-600">
				Visit us or connect online. We are located in the heart of Odisha�s education hub.
			</p>
		</div>

		<div class="mt-8 overflow-hidden rounded-3xl border border-white/80 bg-white/95 shadow-lg">
			<iframe
				title="Bhubaneswar map"
				src="https://www.google.com/maps?q=Bhubaneswar,Odisha&output=embed"
				class="h-80 w-full border-0"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</div>
</section>
