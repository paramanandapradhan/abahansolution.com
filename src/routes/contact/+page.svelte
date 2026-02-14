<script lang="ts">
	import AppNavbar from "$lib/core/components/app-navbar.svelte";
	import CopyRights from "$lib/core/components/copy-rights.svelte";
	import Footer from "$lib/core/components/footer.svelte";
	import ApplicationForm from "$lib/form/application-form.svelte";
	import ContactHero from "$lib/contact/contact-hero.svelte";
	import ContactMap from "$lib/contact/contact-map.svelte";

</script>

<div class="min-h-full bg-white text-neutral-900">
	<AppNavbar hasLogo hasTitle hasSubtitle />
	<main>
		<ContactHero />
		<ApplicationForm />
		<ContactMap />
	</main>
	<Footer />
	<CopyRights />
</div>
