<script lang="ts">
	import { Icon } from '@cloudparker/moldex.js';
	import {
		mdiBookAccountOutline,
		mdiBookmarkOutline,
		mdiBookOpenVariantOutline,
		mdiBookshelf,
		mdiBookVariant
	} from '$lib/core/services/app-icons-service';
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const courses = [
		{
			title: 'MBBS',
			description: 'Medical degree focused on clinical training and patient care.',
			image: '/images/mbbs-image.jpg',
			icon: mdiBookOpenVariantOutline
		},
		{
			title: 'DDS',
			description: 'Dental surgery foundation with strong clinical exposure.',
			image: '/images/dds-image.jpg',
			icon: mdiBookmarkOutline
		},
		{
			title: 'B.Tech',
			description: 'Engineering program across core and emerging technologies.',
			image: '/images/btech-image.jpg',
			icon: mdiBookVariant
		},
		{
			title: 'M.Tech',
			description: 'Advanced specialization to deepen engineering expertise.',
			image: '/images/mtech-image.jpg',
			icon: mdiBookshelf
		},
		{
			title: 'MBA',
			description: 'Leadership, strategy, and business management skills.',
			image: '/images/mba-image.jpg',
			icon: mdiBookAccountOutline
		},
		{
			title: 'MCA',
			description: 'Computer applications with software development focus.',
			image: '/images/mca-image.jpg',
			icon: mdiBookOpenVariantOutline
		},
		{
			title: 'MSc',
			description: 'Postgraduate science programs for research and industry.',
			image: '/images/msc-image.jpg',
			icon: mdiBookshelf
		},
		{
			title: 'BBA',
			description: 'Undergraduate business administration and entrepreneurship.',
			image: '/images/bba-image.jpg',
			icon: mdiBookAccountOutline
		},
		{
			title: 'BCA',
			description: 'Foundations in computer applications and programming.',
			image: '/images/bca-image.jpg',
			icon: mdiBookOpenVariantOutline
		},
		{
			title: 'B.Sc Agriculture',
			description: 'Agronomy, crop science, and rural innovation pathways.',
			image: '/images/bsc-agri-image.jpg',
			icon: mdiBookshelf
		},
		{
			title: 'B.Pharm',
			description: 'Pharmacy, drug development, and clinical practice.',
			image: '/images/bpharm-image.jpg',
			icon: mdiBookmarkOutline
		},
		{
			title: 'BDS',
			description: 'Dental surgery with patient-focused clinical training.',
			image: '/images/bds-image.jpg',
			icon: mdiBookOpenVariantOutline
		}
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
				</div>

				<div class="grid gap-4">
					{#each tracks as track}
						<div
							data-animate
							class="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
						>
							<p class="text-sm font-semibold text-neutral-900">{track.title}</p>
							<p class="mt-1 text-xs text-neutral-600">{track.detail}</p>
						</div>
					{/each}
				</div>
		</div>
		<div class="space-y-6">
				<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{#each courses as course}
						<article
							data-animate
							class="group overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/60"
						>
							<div class="relative h-40 overflow-hidden">
								<img
									src={course.image}
									alt={`${course.title} course`}
									class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
									loading="lazy"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/5 to-transparent"></div>
								<span
									class="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow-sm transition duration-300 group-hover:scale-110"
								>
									<Icon path={course.icon} className="h-4 w-4" />
								</span>
							</div>
							<div class="space-y-2 p-4">
								<p class="text-sm font-semibold text-neutral-900">{course.title}</p>
								<p class="text-xs text-neutral-600">{course.description}</p>
							</div>
						</article>
					{/each}
				</div>
				<p data-animate class="text-sm text-neutral-600">
					Not seeing your program? Share your preference and we will create a custom shortlist.
				</p>
			</div>
	</div>
</section>
