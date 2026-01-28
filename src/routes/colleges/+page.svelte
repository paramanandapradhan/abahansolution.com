<script lang="ts">
	import AppNavbar from '$lib/core/components/app-navbar.svelte';
	import CopyRights from '$lib/core/components/copy-rights.svelte';
	import Footer from '$lib/core/components/footer.svelte';
	import CollegeShowcase from '$lib/colleges/college-showcase.svelte';
	import { scrollReveal } from '$lib/home/scroll-reveal';
	import type { CollegeItem } from '$lib/colleges/colleges-types';

	let colleges = $state<CollegeItem[]>([
		{
			id: 'iter',
			shortName: 'ITER',
			name: 'ITER (Institute of Technical Education and Research)',
			description:
				"ITER, the flagship engineering school of Siksha 'O' Anusandhan (SOA) Deemed to be University in Bhubaneswar, Odisha, was established in 1996 and is widely regarded as the top engineering college in the state. As part of a multidisciplinary deemed university, it offers a wide range of accredited programs in engineering, technology, and related fields, supported by state-of-the-art facilities, research centers, and a strong emphasis on innovation and holistic student development. With excellent placements, modern infrastructure including hostels and Wi-Fi-enabled campuses, and a focus on preparing students for global careers, ITER stands out for its academic excellence and research-driven approach in Odisha's education landscape.",
			images: ['/images/iter-college-image1.webp', '/images/iter-college-image2.webp']
		},
		{
			id: 'kiit',
			shortName: 'KIIT',
			name: 'KIIT (Kalinga Institute of Industrial Technology)',
			description:
				"KIIT Deemed to be University, founded in 1992 in Bhubaneswar, Odisha, has evolved from a small industrial training institute into one of India's premier private deemed universities, recognized as an Institution of Eminence. It offers over 200 programs across engineering, medicine, law, management, biotechnology, and more through 26 schools, with NAAC A++ accreditation and strong NIRF rankings. Known for its sprawling eco-friendly campus, world-class facilities, research opportunities, innovation incubators, and exceptional placement records, KIIT fosters holistic growth, academic rigor, and global exposure in a vibrant learning environment.",
			images: ['/images/kiit-college-image1.avif', '/images/kiit-college-image2.jpg']
		},
		{
			id: 'cgu',
			shortName: 'CGU',
			name: 'CGU (C.V. Raman Global University)',
			description:
				"C.V. Raman Global University (CGU) in Bhubaneswar, Odisha, originally established in 1997 as C.V. Raman College of Engineering and granted university status in 2020, is a leading private institution focused on engineering, management, and multidisciplinary education. Accredited with NAAC 'A' grade, NBA approval, and recognized as a Scientific and Industrial Research Organisation (SIRO), it provides modern infrastructure, well-equipped labs, and programs designed for industry relevance and innovation. With strong placement support from top recruiters and a commitment to research and skill development, CGU prepares students to become future-ready professionals in a dynamic academic setting.",
			images: ['/images/cgu-college-image1.jpg', '/images/cgu-college-image2.jpeg']
		},
		{
			id: 'gita',
			shortName: 'GITA',
			name: 'GITA (Gandhi Institute for Technological Advancement)',
			description:
				"Gandhi Institute for Technological Advancement (GITA) Autonomous College, established in 2004 near Bhubaneswar, Odisha, is a premier private engineering institute under the Gandhi Group, approved by AICTE and affiliated with BPUT. Accredited with NAAC 'A+' grade and NBA certification, it excels in delivering high-quality programs in engineering streams like Computer Science, Mechanical, Electrical, and more, with a strong focus on academics, research, industry-ready skills, and placements. Featuring modern facilities, experienced faculty, and a supportive environment, GITA consistently ranks among Odisha's top technical colleges for holistic education and career preparation.",
			images: ['/images/gita-college-image1.avif', '/images/gita-college-image2.png']
		},
		{
			id: 'gec',
			shortName: 'GEC',
			name: 'GEC (Gandhi Engineering College)',
			description:
				"Gandhi Engineering College (GEC) in Bhubaneswar, Odisha, founded in 2006, is a prominent autonomous private institution approved by AICTE, accredited by NAAC with 'A' grade, and affiliated with BPUT. It offers a diverse range of programs including B.Tech, M.Tech, MBA, MCA, BCA, and B.Sc., emphasizing quality technical and management education in a disciplined setting. With excellent infrastructure, sports facilities, hostels, and a dedicated placement cell attracting reputed companies, GEC focuses on innovative teaching, student development, and strong industry connections to ensure successful careers for its graduates.",
			images: ['/images/gec-college-image1.webp', '/images/gec-college-image2.jpg']
		},
		{
			id: 'trident',
			shortName: 'Trident',
			name: 'Trident Academy of Technology',
			description:
				"Trident Academy of Technology in Bhubaneswar, Odisha, is a well-established private engineering college known for its focus on technical education across streams like Computer Science, Electronics, Biotechnology, and Civil Engineering. Spread over a 10-acre campus, it provides a vibrant academic and social environment with friendly faculty, modern labs, and a commitment to disciplined learning and holistic growth. Recognized as one of Odisha's leading institutions, Trident emphasizes industry-relevant skills, extracurricular activities, and preparing students for competitive professional success.",
			images: ['/images/trident-college-image1.png', '/images/trident-college-image2.jpeg']
		},
		{
			id: 'driems',
			shortName: 'DRIEMS',
			name: 'DRIEMS University',
			description:
				"DRIEMS University (formerly Dhaneswar Rath Institute of Engineering and Management Studies) in Odisha is a prominent private university offering over 50 courses across engineering, technology, medical sciences, nursing, pharmacy, management, and more through dedicated schools. With a focus on innovation, research, and comprehensive education, it provides state-of-the-art facilities and a dynamic campus environment that promotes holistic student development. DRIEMS stands out for its multidisciplinary approach, quality infrastructure, and commitment to producing skilled professionals ready for diverse career paths.",
			images: ['/images/driems-college-image1.jpg', '/images/driems-college-image2.jpg']
		},
		{
			id: 'sri-sri',
			shortName: 'Sri Sri',
			name: 'Sri Sri University',
			description:
				"Sri Sri University, located in Cuttack near Bhubaneswar, Odisha, and established in 2009 under the vision of spiritual leader Sri Sri Ravi Shankar, is a unique private university blending Eastern wisdom with modern Western education. It offers world-class programs in fields like management, science, humanities, agriculture, and more, emphasizing holistic growth, innovation, research, and value-based learning. Set in a serene campus, the university promotes personal development alongside academic excellence, making it a distinctive choice for students seeking balanced and meaningful education.",
			images: ['/images/sri-college-image1.jpg', '/images/sri-college-image2.jpeg']
		},
		{
			id: 'giet',
			shortName: 'GIET',
			name: 'GIET, Baniatangi (Gandhi Institute for Education and Technology)',
			description:
				"GIET (Gandhi Institute for Education and Technology) in Baniatangi, on the southern outskirts of Bhubaneswar, Odisha, was established in 2009 as a fast-growing private technical institute offering B.Tech and M.Tech programs. Affiliated with BPUT and approved by AICTE, it focuses on quality techno-education, industry-relevant training in communication and aptitude, and a disciplined innovative learning environment. With modern facilities and a commitment to student success, GIET prepares aspiring engineers for global opportunities in a supportive academic setting.",
			images: ['/images/giet-college-image1.jpeg', '/images/giet-college-image2.jpg']
		},
		{
			id: 'nist',
			shortName: 'NIST',
			name: 'NIST Berhampur (National Institute of Science and Technology)',
			description:
				"NIST University (formerly National Institute of Science and Technology) in Berhampur, Odisha, established in 1996, is a premier private engineering and management institute and one of the first NRI-led higher education ventures in the state. Offering B.Tech, M.Tech, MBA, MCA, and more, it emphasizes research excellence, innovation in science and technology, and strong industry connections. With a research-oriented campus, expert faculty, and a focus on holistic development, NIST is renowned for producing skilled professionals and fostering cutting-edge advancements.",
			images: ['/images/nist-college-image1.jpeg', '/images/nist-college-image2.jpeg']
		},
		{
			id: 'kist',
			shortName: 'KIST',
			name: 'KIST (Konark Institute of Science and Technology)',
			description:
				"Konark Institute of Science and Technology (KIST) in Bhubaneswar, Odisha, founded in 2001 and approved by AICTE, is a respected private engineering and management college known for its quality education in a disciplined and innovative environment. It offers programs in engineering and related fields with modern facilities, experienced faculty, and a strong emphasis on holistic student development and career readiness. KIST continues to be recognized as a top choice in Odisha for technical education and professional growth.",
			images: ['/images/kist-college-image1.jpg', '/images/kist-college-image2.jpeg']
		},
		{
			id: 'nit',
			shortName: 'NIT',
			name: 'NIT (Nalanda Institute of Technology)',
			description:
				"Nalanda Institute of Technology (NIT) in Bhubaneswar, Odisha, is a premier private engineering institute dedicated to academic excellence, innovative programs, and cutting-edge research in technical fields. With world-class faculty, supportive infrastructure, and a vision for future-ready education, it focuses on holistic student development, industry alignment, and progressive learning. NIT provides a range of engineering courses in an encouraging environment that nurtures talent and prepares graduates for successful careers.",
			images: ['/images/nit-college-image1.jpeg', '/images/nit-college-image2.jpeg']
		},
		{
			id: 'dadhichi',
			shortName: 'Dadhichi',
			name: 'Dadhichi Group of Institutions',
			description:
				"Dadhichi Group of Institutions in Cuttack, Odisha, operates under the Dadhichi Educational Trust and specializes primarily in pharmaceutical and related health sciences education, including Dadhichi College of Pharmacy. Guided by values of excellence, integrity, compassion, and collaboration, it focuses on treating students with care in academic settings while promoting accountability and holistic development. The group emphasizes quality education, professional growth, and preparing students for impactful careers in pharmacy and allied fields.",
			images: ['/images/dadhichi-college-image1.jpg', '/images/dadhichi-college-image2.png']
		},
		{
			id: 'centurion',
			shortName: 'CUTM',
			name: 'Centurion University',
			description:
				"Centurion University of Technology and Management (CUTM), with campuses in Bhubaneswar and Paralakhemundi, Odisha, is a leading private university known for its skill-based, industry-aligned education and 100% placement opportunities. Offering programs in engineering, agriculture, fisheries, management, and more (with ICAR accreditation for select schools), it stands as the only technological university in South Odisha. Focused on innovation, vocational training, research, and practical learning, Centurion empowers students with real-world skills for successful professional futures.",
			images: ['/images/centurion-college-image1.jpeg', '/images/centurion-college-image2.jpeg']
		}
	]);
</script>

<div class="min-h-full bg-white">
	<AppNavbar hasLogo hasTitle hasSubtitle />

	<section class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
		<div
			aria-hidden="true"
			class="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary-200/40 blur-[120px]"
		></div>
		<div
			aria-hidden="true"
			class="pointer-events-none absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-[120px]"
		></div>

		<div
			class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8"
			use:scrollReveal={{ start: 'top 85%', stagger: 0.12, y: 26 }}
		>
			<div class="max-w-3xl space-y-4">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Colleges we guide
				</p>
				<h1 data-animate class="font-[var(--font-display)] text-3xl text-slate-900 sm:text-4xl">
					Odisha's top colleges, explained with clarity.
				</h1>
				<p data-animate class="text-sm text-slate-600 sm:text-base">
					Explore verified universities and institutions across Odisha. Each profile highlights what makes the campus
					stand out and how we support your admission journey.
				</p>
			</div>

			<div class="mt-10 grid gap-8">
				{#each colleges as college}
					<CollegeShowcase {college} />
				{/each}
			</div>
		</div>
	</section>

	<Footer />
	<CopyRights />
</div>
