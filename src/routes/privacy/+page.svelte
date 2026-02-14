<script lang="ts">
	import CopyRights from '$lib/core/components/copy-rights.svelte';
	import Footer from '$lib/core/components/footer.svelte';

	import { goBack, Navbar } from '@cloudparker/moldex.js';
</script>

<div class="">
	<Navbar
		hasLogo
		logoImgSrc="/icons/web/icon-192.png"
		logoImgClassName="!h-8 !w-auto !object-contain !filter"
		className=" bg-gradient-to-r from-base-100 to-base-50 !h-20 border-b border-base-400"
		hasTitle
		hasSubtitle
		titleClassName="!text-primary-600 !font-black"
		subtitle="Privacy Policy"
		hasBack
		onBack={goBack}
		backButtonClassName="hover:!bg-white hover:!text-base-800"
	/>
	<section class="m-4 py-0 md:py-10">
		<div class="m-auto w-full max-w-[800px] rounded bg-white p-4 shadow md:p-16">
			<div class=" ">
				<h3 class="mb-4 text-2xl font-bold text-base-800">Privacy Policy</h3>
				<p class="mb-6 text-sm text-base-500">Last updated: 01 January 2026</p>

				<p class="mb-4 text-base-700">
					This Privacy Policy describes Our policies and procedures on the collection, use and
					disclosure of Your information when You use the Service and tells You about Your privacy
					rights and how the law protects You.
				</p>

				<p class="mb-4 text-base-700">
					We use Your Personal data to provide and improve the Service. By using the Service, You
					agree to the collection and use of information in accordance with this Privacy Policy.
				</p>

				<h4 class="mb-4 text-xl font-semibold text-base-800">Interpretation and Definitions</h4>

				<h5 class="mb-2 text-lg font-semibold text-base-800">Interpretation</h5>
				<p class="mb-4 text-base-700">
					The words of which the initial letter is capitalized have meanings defined under the
					following conditions. The following definitions shall have the same meaning regardless of
					whether they appear in singular or in plural.
				</p>

				<h5 class="mb-2 text-lg font-semibold text-base-800">Definitions</h5>
				<p class="mb-4 text-base-700">For the purposes of this Privacy Policy:</p>

				<ul class="mb-6 list-inside list-disc space-y-2 text-base-700">
					<li>
						<strong>Account</strong> means a unique account created for You to access our Service or
						parts of our Service.
					</li>
					<li>
						<strong>Company</strong> refers to Abahan Solution, Bhubaneswar, Odisha, referred to as "We", "Us",
						or "Our".
					</li>
					<li>
						<strong>Cookies</strong> are small files placed on Your device that track your browsing history
						for various uses.
					</li>
					<li>
						<strong>Country</strong> refers to: Odisha, India.
					</li>
					<li>
						<strong>Device</strong> means any device that can access the Service, such as a computer,
						cellphone, or tablet.
					</li>
					<li>
						<strong>Personal Data</strong> is any information that relates to an identified or identifiable
						individual.
					</li>
					<li>
						<strong>Service</strong> refers to the Website.
					</li>
					<li>
						<strong>Service Provider</strong> refers to third-party companies or individuals who process
						data on behalf of the Company.
					</li>
					<li>
						<strong>Third-party Social Media Service</strong> refers to any social network website through
						which a user can log in.
					</li>
					<li>
						<strong>Usage Data</strong> refers to data collected automatically, such as page visit duration
						or browser type.
					</li>
					<li>
						<strong>Website</strong> refers to Cloudparker, accessible at
						<a href="https://abahansolution.com/" target="_blank" class="text-blue-500 hover:underline"
							>https://abahansolution.com</a
						>.
					</li>
					<li>
						<strong>You</strong> refers to the individual accessing or using the Service, or the entity
						on behalf of which the individual is accessing or using the Service.
					</li>
				</ul>

				<h4 class="mb-4 text-xl font-semibold text-base-800">
					Collecting and Using Your Personal Data
				</h4>

				<h5 class="mb-2 text-lg font-semibold text-base-800">Types of Data Collected</h5>
				<h5 class="mb-2 text-lg font-semibold text-base-800">Personal Data</h5>
				<p class="mb-4 text-base-700">
					While using Our Service, We may ask You to provide Us with certain personally identifiable
					information that can be used to contact or identify You. Personally identifiable
					information may include, but is not limited to:
				</p>

				<ul class="mb-6 list-inside list-disc space-y-2 text-base-700">
					<li>Email address</li>
					<li>First name and last name</li>
					<li>Phone number</li>
					<li>Address, State, Province, ZIP/Postal code, City</li>
					<li>Usage Data</li>
				</ul>

				<h5 class="mb-2 text-lg font-semibold text-base-800">Usage Data</h5>
				<p class="mb-4 text-base-700">
					Usage Data is collected automatically when using the Service and may include information
					such as your device's IP address, browser type, pages you visit, and the time spent on
					them.
				</p>

				<h5 class="mb-2 text-lg font-semibold text-base-800">Tracking Technologies and Cookies</h5>
				<p class="mb-4 text-base-700">
					We use Cookies and similar tracking technologies to track activity on Our Service and
					store certain information.
				</p>

				<h5 class="mb-2 text-lg font-semibold text-base-800">Use of Your Personal Data</h5>
				<p class="mb-4 text-base-700">
					The Company may use Personal Data for the following purposes:
				</p>

				<ul class="mb-6 list-inside list-disc space-y-2 text-base-700">
					<li>
						<strong>To provide and maintain our Service</strong>, including to monitor the usage of
						our Service.
					</li>
					<li>
						<strong>To manage Your Account:</strong> To manage Your registration as a user of the Service.
					</li>
					<li>
						<strong>For the performance of a contract:</strong> For services you have purchased or contracted.
					</li>
					<li>
						<strong>To contact You:</strong> By email, phone, or SMS regarding updates, offers, or other
						information.
					</li>
					<li>
						<strong>For business transfers:</strong> In the case of a merger, sale, or acquisition of
						Company assets.
					</li>
				</ul>

				<h5 class="mb-2 text-lg font-semibold text-base-800">Retention of Your Personal Data</h5>
				<p class="mb-4 text-base-700">
					We retain your Personal Data for as long as necessary to fulfill the purposes outlined in
					this Privacy Policy.
				</p>

				<h5 class="mb-2 text-lg font-semibold text-base-800">Security of Your Personal Data</h5>
				<p class="mb-4 text-base-700">
					We strive to use commercially acceptable means to protect your Personal Data, but no
					method of transmission or storage is 100% secure.
				</p>

				<h5 class="mb-2 text-lg font-semibold text-base-800">Contact Us</h5>
				<p class="mb-4 text-base-700">
					If you have any questions about this Privacy Policy, You can contact us:
				</p>

				<ul class="list-inside list-disc space-y-2 text-base-700">
					<li>By email: support@abahansolution.com</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mt-3">
		<Footer />
	</section>
	<section class="mt-3">
		<CopyRights />
	</section>
</div>
