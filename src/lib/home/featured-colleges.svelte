<script lang="ts">
	import { scrollReveal } from '$lib/home/scroll-reveal';

	const colleges = [
		{
			id: 'iter',
			name: 'ITER (SOA University)',
			description:
				'Leading deemed university in Bhubaneswar known for engineering and research excellence with modern, innovation-driven programs.',
			image: '/images/iter-college-image1.webp'
		},
		{
			id: 'kiit',
			name: 'KIIT University',
			description:
				'Prestigious private deemed university with diverse programs from B.Tech to MBBS and strong placement outcomes.',
			image: '/images/kiit-college-image1.avif'
		},
		{
			id: 'cgu',
			name: 'C.V. Raman Global University (CGU)',
			description:
				'Multidisciplinary university delivering industry-focused engineering and management education with modern facilities.',
			image: '/images/cgu-college-image1.jpg'
		},
		{
			id: 'gita',
			name: 'GITA (Gandhi Institute for Technological Advancement)',
			description:
				'Autonomous college offering B.Tech, M.Tech, MBA, and MCA with strong academic discipline and placements.',
			image: '/images/gita-college-image1.avif'
		},
		{
			id: 'gec',
			name: 'Gandhi Engineering College (GEC)',
			description:
				'NAAC A-grade campus known for holistic technical and management education and industry-ready training.',
			image: '/images/gec-college-image1.webp'
		},
		{
			id: 'trident',
			name: 'Trident Academy of Technology',
			description:
				'Respected technical institution with strong programs in CS, electronics, biotech, and civil engineering.',
			image: '/images/trident-college-image1.png'
		},
		{
			id: 'driems',
			name: 'DRIEMS University',
			description:
				'Private university offering 50+ courses across engineering, health sciences, and management with a research focus.',
			image: '/images/driems-college-image1.jpg'
		},
		{
			id: 'sri-sri',
			name: 'Sri Sri University',
			description:
				'Holistic private university blending Eastern wisdom with modern education in a serene, innovation-led campus.',
			image: '/images/sri-college-image1.jpg'
		},
		{
			id: 'giet',
			name: 'GIET, Baniatangi',
			description:
				'Fast-growing technical institute focused on B.Tech and M.Tech programs with strong industry relevance.',
			image: '/images/giet-college-image1.jpeg'
		},
		{
			id: 'nist',
			name: 'NIST University, Berhampur',
			description:
				'Premier institute known for research excellence, innovation, and strong industry connections in Odisha.',
			image: '/images/nist-college-image1.jpeg'
		},
		{
			id: 'kist',
			name: 'KIST, Bhubaneswar',
			description:
				'AICTE-approved engineering college delivering disciplined learning, modern facilities, and career focus.',
			image: '/images/kist-college-image1.jpg'
		},
		{
			id: 'nit',
			name: 'Nalanda Institute of Technology (NIT)',
			description:
				'Premier private engineering institute emphasizing academic excellence and future-ready technical education.',
			image: '/images/nit-college-image1.jpeg'
		},
		{
			id: 'dadhichi',
			name: 'Dadhichi Group of Institutions',
			description:
				'Pharmacy-focused institutions promoting excellence, integrity, and holistic student development in Odisha.',
			image: '/images/dadhichi-college-image1.jpg'
		},
		{
			id: 'centurion',
			name: 'Centurion University (CUTM)',
			description:
				'Skill-based private university with strong placement focus and programs across engineering and applied sciences.',
			image: '/images/centurion-college-image1.jpeg'
		}
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

	<div class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8" use:scrollReveal>
		<div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
			<div class="max-w-2xl space-y-4">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Featured colleges
				</p>
				<h2 data-animate class="font-[var(--font-display)] text-3xl text-neutral-900 sm:text-4xl">
					Trusted campuses we work with.
				</h2>
				<p data-animate class="text-sm text-neutral-600">
					Discover Odisha's top colleges with verified programs, modern facilities, and strong placement support.
				</p>
			</div>
			<a
				data-animate
				href="/colleges"
				class="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-primary-700"
			>
				Read more
			</a>
		</div>

		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each colleges as college}
				<article
					data-animate
					class="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/60"
				>
					<div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
						<img
							src={college.image}
							alt={`${college.name} campus`}
							class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent"></div>
					</div>
					<div class="flex flex-1 flex-col gap-3 p-5">
						<h3 class="font-[var(--font-display)] text-lg text-slate-900">{college.name}</h3>
						<p class="text-sm text-slate-600">{college.description}</p>
						<a
							href={`/colleges#${college.id}`}
							class="mt-auto inline-flex items-center justify-center rounded-full border border-primary-200/70 bg-white px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-primary-700 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-800"
						>
							Read more
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
