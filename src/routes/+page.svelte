<script lang="ts">
	import AppNavbar from "$lib/core/components/app-navbar.svelte";
	import CopyRights from "$lib/core/components/copy-rights.svelte";
	import Footer from "$lib/core/components/footer.svelte";
	import FeaturedColleges from "$lib/home/featured-colleges.svelte";
	import FooterCta from "$lib/home/footer-cta.svelte";
	import HeroSection from "$lib/home/hero-section.svelte";
	import HowItWorks from "$lib/home/how-it-works.svelte";
	import PopularCourses from "$lib/home/popular-courses.svelte";
	import Testimonials from "$lib/home/testimonials.svelte";
	import WhyChooseUs from "$lib/home/why-choose-us.svelte";

</script>


<div class="min-h-full bg-white text-neutral-900">
	<AppNavbar hasLogo hasTitle hasSubtitle/>
	<main>
		<HeroSection />
		<WhyChooseUs />
		<PopularCourses />
		<HowItWorks />
		<Testimonials />
		<FeaturedColleges />
		<FooterCta />
	</main>
	<Footer />
	<CopyRights />
</div>
