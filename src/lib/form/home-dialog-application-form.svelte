<script lang="ts">
	type PopupFormState = {
		name: string;
		course: string;
		branch: string;
		phone: string;
		email: string;
		message: string;
	};

	const courseOptions = ["B.Tech", "B.Sc", "BBA", "BCA", "MBA", "MCA", "MBBS"];
	const branchOptions = [
		"Computer Science",
		"Electronics & Communication",
		"Mechanical Engineering",
		"Civil Engineering",
		"Information Technology",
		"Business Analytics",
		"Finance",
		"Healthcare & Life Sciences"
	];
	const formspreeEndpoint = "https://formspree.io/f/mzdarpld";

	let { onClose = () => {} } = $props<{ onClose?: () => void }>();

	let form = $state<PopupFormState>({
		name: "",
		course: "",
		branch: "",
		phone: "",
		email: "",
		message: ""
	});
	let status = $state("");
	let isError = $state(false);
	let isSubmitting = $state(false);

	function setStatus(message: string, error = false) {
		status = message;
		isError = error;
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		if (isSubmitting) {
			return;
		}

		const submission = {
			name: form.name.trim(),
			course: form.course.trim(),
			branch: form.branch.trim(),
			phone: form.phone.trim(),
			email: form.email.trim(),
			message: form.message.trim()
		};

		if (
			!submission.name ||
			!submission.course ||
			!submission.branch ||
			!submission.message ||
			(!submission.phone && !submission.email)
		) {
			setStatus("Fill all required fields and provide email or phone.", true);
			return;
		}

		isSubmitting = true;

		try {
			const response = await fetch(formspreeEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(submission)
			});

			if (!response.ok) {
				setStatus("Failed to send message. Please try again.", true);
				return;
			}

			setStatus("Message sent successfully!");
			form = {
				name: "",
				course: "",
				branch: "",
				phone: "",
				email: "",
				message: ""
			};
		} catch (error) {
			console.error("Error submitting form:", error);
			setStatus("Something went wrong.", true);
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section
	class="relative overflow-hidden rounded-[30px] border border-white/70 bg-white/95 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.22)] sm:p-6"
>
	<div class="pointer-events-none absolute -left-14 -top-16 h-56 w-56 rounded-full bg-indigo-200/70 blur-3xl"></div>
	<div class="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-amber-200/70 blur-3xl"></div>

	<div class="relative">
		<div class="flex items-start justify-between gap-3">
			<div class="space-y-2">
				<p
					class="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-primary-600"
				>
					Admissions Desk
					<span class="h-2 w-2 rounded-full bg-emerald-500"></span>
				</p>
				<h2 class="font-(--font-display) text-xl leading-tight text-slate-900 sm:text-2xl">
					Apply in under a minute
				</h2>
				<p class="text-xs text-slate-600 sm:text-sm">
					Share your preference and get counselor callback with shortlist guidance.
				</p>
			</div>
			<button
				type="button"
				class="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
				aria-label="Close dialog"
				onclick={() => onClose()}
			>
				X
			</button>
		</div>

		<form class="mt-4 space-y-3" onsubmit={handleSubmit}>
			<div class="grid gap-3 sm:grid-cols-2">
				<input
					type="text"
					placeholder="Your full name"
					class="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
					bind:value={form.name}
					required
				/>
				<input
					type="tel"
					placeholder="Phone number"
					class="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
					bind:value={form.phone}
				/>
				<select
					class="h-11 cursor-pointer rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
					bind:value={form.course}
					required
				>
					<option value="" disabled hidden>Select course</option>
					{#each courseOptions as course}
						<option value={course}>{course}</option>
					{/each}
				</select>
				<select
					class="h-11 cursor-pointer rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
					bind:value={form.branch}
					required
				>
					<option value="" disabled hidden>Select branch</option>
					{#each branchOptions as branch}
						<option value={branch}>{branch}</option>
					{/each}
				</select>
				<input
					type="email"
					placeholder="Email address"
					class="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-primary-300 focus:ring-2 focus:ring-primary-100 sm:col-span-2"
					bind:value={form.email}
				/>
				<textarea
					rows={2}
					placeholder="Course interest, scholarship, or support needed"
					class="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-primary-300 focus:ring-2 focus:ring-primary-100 sm:col-span-2"
					bind:value={form.message}
					required
				></textarea>
			</div>

			<div class="flex flex-wrap items-center justify-between gap-3">
				<p class={`text-xs font-semibold ${isError ? "text-rose-600" : "text-emerald-600"}`}>
					{status || "Email or phone is required."}
				</p>
				<button
					type="submit"
					class="inline-flex h-11 items-center justify-center rounded-full bg-linear-to-r from-amber-400 via-indigo-400 to-indigo-600 px-5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-indigo-200/60 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
					disabled={isSubmitting}
				>
					{isSubmitting ? "Submitting..." : "Submit application"}
				</button>
			</div>
		</form>
	</div>
</section>
