
<script lang="ts">
	import type { CollegeItem } from "./colleges-types";

	let { college } = $props<{ college: CollegeItem }>();
</script>

<article
	data-animate
	class="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/60"
>
	<div class="grid gap-4 sm:grid-cols-2">
		{#each college.images as image, index}
			<div class="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
				<img
					src={image}
					alt={`${college.shortName} campus view ${index + 1}`}
					class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
					loading="lazy"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/0 to-transparent"></div>
			</div>
		{/each}
	</div>

	<div class="mt-5 space-y-3">
		<p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">{college.shortName}</p>
		<h3 class="font-[var(--font-display)] text-xl text-slate-900">{college.name}</h3>
		<p class="text-sm leading-relaxed text-slate-600">{college.description}</p>
	</div>
</article>
