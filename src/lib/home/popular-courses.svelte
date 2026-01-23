<script lang="ts">
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const courses = [
		'MBBS',
		'DDS',
		'B.Tech',
		'M.Tech',
		'MBA',
		'MCA',
		'MSc',
		'BBA',
		'BCA',
		'B.Sc Agriculture',
		'B.Pharm',
		'BDS',
		'B.Com',
		'B.Ed'
	];

	const tracks = [
		{ title: 'Medical', detail: 'MBBS, DDS, BDS, Nursing, Pharmacy' },
		{ title: 'Engineering', detail: 'B.Tech, M.Tech, Diploma, Polytechnic' },
		{ title: 'Management', detail: 'MBA, BBA, PGDM, Hospital Admin' },
		{ title: 'IT & Science', detail: 'MCA, BCA, MSc, B.Sc streams' }
	];
</script>

<section class="relative overflow-hidden bg-white">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.12),transparent_50%)]"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8" use:scrollReveal>
		<div class="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
			<div class="space-y-6">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Popular courses
				</p>
				<h2 data-animate class="font-[var(--font-display)] text-3xl text-neutral-900 sm:text-4xl">
					Courses we help students get into.
				</h2>
				<p data-animate class="text-sm text-neutral-600">
					From medicine to management, our counselors help students choose the right stream, build strong
					applications, and secure seats at trusted colleges.
				</p>

				<div class="grid gap-4">
					{#each tracks as track}
						<div
							data-animate
							class="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md"
						>
							<p class="text-sm font-semibold text-neutral-900">{track.title}</p>
							<p class="mt-1 text-xs text-neutral-600">{track.detail}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-sm">
				<div class="flex flex-wrap gap-3">
					{#each courses as course}
						<span
							data-animate
							class="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-700"
						>
							{course}
						</span>
					{/each}
				</div>
				<p data-animate class="mt-6 text-sm text-neutral-600">
					Not seeing your program? Share your preference and we will create a custom shortlist.
				</p>
			</div>
		</div>
	</div>
</section>
