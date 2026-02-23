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
			description:
				'Comprehensive medical program covering anatomy, diagnostics, and clinical rotations. Ideal for students committed to patient care and hospital practice.',
			image: '/images/mbbs-image.jpg',
			icon: mdiBookOpenVariantOutline
		},
		{
			title: 'BDS',
			description:
				'Dental surgery pathway focused on oral health, procedures, and clinical skill development. Builds a solid base for modern dentistry practice.',
			image: '/images/dds-image.jpg',
			icon: mdiBookmarkOutline
		},
		{
			title: 'B.Tech',
			description:
				'Engineering degree covering core disciplines with exposure to new-age technologies. Prepares students for industry roles and higher studies.',
			image: '/images/btech-image.jpg',
			icon: mdiBookVariant
		},
		{
			title: 'M.Tech',
			description:
				'Advanced engineering specialization with research and project-driven learning. Ideal for students aiming for deeper expertise or academia.',
			image: '/images/mtech-image.jpg',
			icon: mdiBookshelf
		},
		{
			title: 'MBA',
			description:
				'Business leadership program focused on strategy, finance, and operations. Helps students build managerial skills and industry exposure.',
			image: '/images/mba-image.jpg',
			icon: mdiBookAccountOutline
		},
		{
			title: 'MCA',
			description:
				'Computer applications program with a strong software development focus. Covers programming, systems, and modern web technologies.',
			image: '/images/mca-image.jpg',
			icon: mdiBookOpenVariantOutline
		},
		{
			title: 'MSc',
			description:
				'Postgraduate science course with specialization in key disciplines. Balances research skills with practical industry applications.',
			image: '/images/msc-image.jpg',
			icon: mdiBookshelf
		},
		{
			title: 'BBA',
			description:
				'Undergraduate business program covering marketing, finance, and entrepreneurship. Builds a strong base for corporate careers.',
			image: '/images/bba-image.jpg',
			icon: mdiBookAccountOutline
		},
		{
			title: 'BCA',
			description:
				'Undergraduate computing course with programming and software foundations. Great for students targeting tech roles and MCA.',
			image: '/images/bca-image.jpg',
			icon: mdiBookOpenVariantOutline
		},
		{
			title: 'B.Sc Agriculture',
			description:
				'Focused on agronomy, crop science, and sustainable farming systems. Opens pathways in agribusiness and rural innovation.',
			image: '/images/bsc-agri-image.jpg',
			icon: mdiBookshelf
		},
		{
			title: 'B.Pharm',
			description:
				'Pharmacy program covering drug formulation, pharmacology, and clinical practice. Suits students interested in healthcare and research.',
			image: '/images/bpharm-image.jpg',
			icon: mdiBookmarkOutline
		},
		{
			title: 'BDS',
			description:
				'Dental surgery course with patient-focused clinical training. Includes diagnostics, procedures, and oral healthcare fundamentals.',
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
		<div class="space-y-6! mt-12">
				<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{#each courses as course}
						<article
							data-animate
							class="group flex min-h-[22rem] flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/60 sm:min-h-[24rem] lg:min-h-[26rem]"
						>
							<div class="relative aspect-[4/3] overflow-hidden bg-neutral-50 sm:aspect-[5/3] lg:aspect-[16/9]">
								<img
									src={course.image}
									alt={`${course.title} course`}
									class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
									loading="lazy"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-slate-900/0 to-transparent"></div>
								<span
									class="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow-sm transition duration-300 group-hover:scale-110"
								>
									<Icon path={course.icon} className="h-4 w-4" />
								</span>
							</div>
							<div class="flex grow flex-col gap-2 p-4">
								<p class="text-base font-semibold text-neutral-900">{course.title}</p>
								<p class="text-sm leading-relaxed text-neutral-600">{course.description}</p>
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
