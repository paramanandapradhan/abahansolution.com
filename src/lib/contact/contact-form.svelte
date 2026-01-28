<script lang="ts">
	import { scrollReveal } from '$lib/home/scroll-reveal';

	type ContactForm = {
		name: string;
		email: string;
		phone: string;
		message: string;
	};

	let form = $state<ContactForm>({
		name: '',
		email: '',
		phone: '',
		message: ''
	});

	let status = $state('');

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();
		status = 'Thanks! Our team will reach out within 24 hours.';
	};
</script>

<section class="relative overflow-hidden bg-white">
	<div
		class="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8"
		use:scrollReveal={{ start: 'top 85%', stagger: 0.12, y: 24 }}
	>
		<div class="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
			<div class="order-2 space-y-6 lg:order-1">
				<p
					data-animate
					class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm"
				>
					Contact form
				</p>
				<h2 data-animate class="font-[var(--font-display)] text-3xl text-slate-900 sm:text-4xl">
					Send us your details.
				</h2>
				<p data-animate class="text-sm text-slate-600">
					Fill in your program preference and we will share a personalized shortlist with fee guidance.
				</p>

				<form
					data-animate
					class="rounded-3xl border border-white/80 bg-white/95 p-6 shadow-lg"
					onsubmit={handleSubmit}
				>
					<div class="grid gap-4 sm:grid-cols-2">
						<div class="space-y-2">
							<label class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" for="name">
								Full name
							</label>
							<input
								id="name"
								type="text"
								class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
								bind:value={form.name}
								required
							/>
						</div>
						<div class="space-y-2">
							<label class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" for="phone">
								Phone number
							</label>
							<input
								id="phone"
								type="tel"
								class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
								bind:value={form.phone}
								required
							/>
						</div>
					</div>

					<div class="mt-4 space-y-2">
						<label class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" for="email">
							Email address
						</label>
						<input
							id="email"
							type="email"
							class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
							bind:value={form.email}
							required
						/>
					</div>

					<div class="mt-4 space-y-2">
						<label class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" for="message">
							Program or requirement
						</label>
						<textarea
							id="message"
							rows={4}
							class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
							bind:value={form.message}
							required
						></textarea>
					</div>

					<div class="mt-6 flex flex-wrap items-center gap-4">
						<button
							type="submit"
							class="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-primary-700"
						>
							Send request
						</button>
						{#if status}
							<p class="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">{status}</p>
						{/if}
					</div>
				</form>
			</div>

			<div class="order-1 lg:order-2">
				<div
					data-animate
					class="relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/90 p-4 shadow-lg"
				>
					<div class="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
						<img
							src="/images/image11.jpg"
							alt="Student discussing admissions"
							class="h-full w-full object-cover"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/0 to-transparent"></div>
					</div>

					<div class="mt-5 rounded-2xl border border-white/80 bg-white/95 px-4 py-4 text-sm text-slate-600 shadow-sm">
						<p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">What happens next?</p>
						<p class="mt-2">
							We review your details, prepare a shortlist, and schedule a counselor call within one working day.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
