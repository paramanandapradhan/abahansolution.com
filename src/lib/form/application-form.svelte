<script lang="ts">
	import { scrollReveal } from '$lib/home/scroll-reveal';

	type ApplicationForm = {
		name: string;
		course: string;
		branch: string;
		phone: string;
		email: string;
		message: string;
	};

	const courseOptions = ['B.Tech', 'B.Sc', 'BBA', 'BCA', 'MBA', 'MCA', 'MBBS'];
	const branchOptions = [
		'Computer Science',
		'Electronics & Communication',
		'Mechanical Engineering',
		'Civil Engineering',
		'Information Technology',
		'Business Analytics',
		'Finance',
		'Healthcare & Life Sciences'
	];

	let form = $state<ApplicationForm>({
		name: '',
		course: '',
		branch: '',
		phone: '',
		email: '',
		message: ''
	});

	let status = $state('');

	type ToastOptions = {
		msg: string;
	};

	const showToast = ({ msg }: ToastOptions) => {
		status = msg;
	};

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const submission = {
			name: (form.name || '').trim(),
			course: (form.course || '').trim(),
			branch: (form.branch || '').trim(),
			phone: (form.phone || '').trim(),
			email: (form.email || '').trim(),
			message: (form.message || '').trim()
		};

		if (
			submission.name &&
			submission.message &&
			submission.course &&
			submission.branch &&
			(submission.email || submission.phone)
		) {
			try {
				const response = await fetch('https://formspree.io/f/xldjdjyw', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(submission)
				});

				if (response.ok) {
					showToast({ msg: 'Message sent successfully!' });
					form = {
						name: '',
						course: '',
						branch: '',
						phone: '',
						email: '',
						message: ''
					};
				} else {
					showToast({ msg: 'Failed to send message. Please try again later.' });
				}
			} catch (error) {
				console.error('Error submitting form:', error);
				showToast({ msg: 'Something went wrong!' });
			}
		} else {
			showToast({ msg: 'Missing required fields.' });
		}
	}
</script>

<section class="relative overflow-hidden bg-linear-to-br from-white via-slate-50 to-primary-50/60">
	<div class="pointer-events-none absolute inset-0">
		<div class="absolute left-10 top-12 h-64 w-64 rounded-full bg-indigo-200 blur-3xl opacity-40 mix-blend-multiply animate-[float_10s_ease-in-out_infinite]"></div>
		<div class="absolute right-6 top-1/3 h-60 w-60 rounded-full bg-amber-200 blur-3xl opacity-40 mix-blend-multiply animate-[float_12s_ease-in-out_infinite]"></div>
		<div class="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-emerald-200 blur-3xl opacity-35 mix-blend-multiply animate-[float_11s_ease-in-out_infinite]"></div>
	</div>

	<div
		class="relative mx-auto max-w-7xl px-4 py-14 sm:py-18 lg:px-8"
		use:scrollReveal={{ start: 'top 85%', stagger: 0.14, y: 24 }}
	>
		<div class="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
			<div class="space-y-6">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/90 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-primary-600 shadow-sm shadow-primary-900/5 backdrop-blur"
				>
					Admission form
					<span class="flex h-2 w-2 animate-ping rounded-full bg-emerald-500"></span>
				</p>
				<h2
					data-animate
					class="font-(--font-display) text-3xl leading-tight text-slate-900 sm:text-4xl md:text-5xl"
				>
					Step into your next campus with a guided application.
				</h2>
				<p data-animate class="max-w-2xl text-sm text-slate-600 sm:text-base">
					Share your preference and we will craft a shortlist with fee guidance, deadlines, and a counselor to walk you through every step.
				</p>

				<form
					data-animate
					class="group relative overflow-hidden rounded-[28px] border border-white/80 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
					onsubmit={handleSubmit}
				>
					<div class="pointer-events-none absolute inset-x-6 top-0 h-32 bg-linear-to-b from-primary-100/60 to-transparent blur-[60px] opacity-60 transition duration-500 group-hover:opacity-90"></div>
					<div class="grid gap-4 sm:grid-cols-2">
						<div class="space-y-2">
							<label class="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500" for="name">
								Name
							</label>
							<input
								id="name"
								type="text"
								placeholder="Aditi Sharma"
								class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition hover:border-primary-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
								bind:value={form.name}
								required
							/>
						</div>
						<div class="space-y-2">
							<label class="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500" for="phone">
								Contact number
							</label>
							<input
								id="phone"
								type="tel"
								placeholder="+91 98765 43210"
								class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition hover:border-primary-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
								bind:value={form.phone}
							/>
						</div>
					</div>

					<div class="mt-4 grid gap-4 sm:grid-cols-2">
						<div class="space-y-2">
							<label class="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500" for="course">
								Course
							</label>
							<select
								id="course"
								class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition hover:border-primary-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 cursor-pointer"
								bind:value={form.course}
								required
							>
								<option value="" disabled hidden>Select course</option>
								{#each courseOptions as course}
									<option value={course}>{course}</option>
								{/each}
							</select>
						</div>

						<div class="space-y-2">
							<label class="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500" for="branch">
								Branch / Specialization
							</label>
							<select
								id="branch"
								class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition hover:border-primary-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 cursor-pointer"
								bind:value={form.branch}
								required
							>
								<option value="" disabled hidden>Select branch</option>
								{#each branchOptions as branch}
									<option value={branch}>{branch}</option>
								{/each}
							</select>
						</div>
					</div>

					<div class="mt-4 space-y-2">
						<label class="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500" for="email">
							Email id
						</label>
						<input
							id="email"
							type="email"
							placeholder="you@example.com"
							class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition hover:border-primary-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
							bind:value={form.email}
						/>
					</div>

					<div class="mt-4 space-y-2">
						<label class="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500" for="message">
							Program or requirement
						</label>
						<textarea
							id="message"
							rows={4}
							placeholder="Describe the specialization, scholarship need, or application support you are seeking."
							class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition hover:border-primary-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
							bind:value={form.message}
							required
						></textarea>
					</div>

					<div class="mt-6 flex flex-wrap items-center gap-4">
						<button
							type="submit"
							class="relative inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-amber-400 via-indigo-400 to-indigo-600 px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white shadow-lg shadow-indigo-200/60 transition hover:-translate-y-0.5 hover:shadow-indigo-300/80 active:translate-y-0"
						>
							<span class="flex h-2 w-2 rounded-full bg-white/70"></span>
							Submit application
						</button>
						{#if status}
							<p class="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-emerald-600">{status}</p>
						{/if}
					</div>
				</form>
			</div>

			<div class="relative">
				<div
					data-animate
					class="relative overflow-hidden rounded-[30px] border border-white/80 bg-white/90 shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
				>
					<div class="relative aspect-4/5 overflow-hidden">
						<img
							src="/images/image6.jpg"
							alt="Students reviewing admission brochure"
							class="h-full w-full object-cover transition duration-700 ease-out will-change-transform group-hover:scale-105"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-linear-to-t from-slate-900/45 via-slate-900/0 to-transparent"></div>
						<div class="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm">
							<span class="h-2 w-2 rounded-full bg-emerald-500"></span>
							Live counselling slot
						</div>
						<div class="absolute bottom-5 right-5 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-xs text-slate-700 shadow-lg shadow-slate-900/10">
							<p class="font-semibold text-slate-900">99.3% paperwork accuracy</p>
							<p class="mt-1 text-[0.72rem] text-slate-500">verified by partner colleges</p>
						</div>
					</div>

					<div class="grid gap-4 p-5 sm:grid-cols-2">
						<div class="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm shadow-slate-900/5">
							<p class="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-600">Fast track</p>
							<p class="mt-2 text-sm text-slate-700">Average processing time 18 hours with document review.</p>
						</div>
						<div class="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm shadow-slate-900/5">
							<p class="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-600">Guided steps</p>
							<p class="mt-2 text-sm text-slate-700">Get college-ready checklist, fee matrix, and scholarship nudges.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0) scale(1);
		}
		50% {
			transform: translateY(-12px) scale(1.05);
		}
	}
</style>
