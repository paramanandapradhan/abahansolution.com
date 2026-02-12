<script lang="ts">
	import { goto } from '$app/navigation';
	import type { NavbarProps } from '@cloudparker/moldex.js';
	import { Button, goBack, goHome, Navbar, screenSize } from '@cloudparker/moldex.js';
	import { type Snippet } from 'svelte';
	import { mdiClose, mdiMenu } from '../services/app-icons-service';
	import { page } from '$app/state';
	type Props = {};

	let {
		hasBack,
		disabledLogo,
		logoImgSrc = '/icons/web/icon-512.png',
		logoImgClassName =
			'!h-10 !w-10 sm:!h-12 sm:!w-12 !object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1',
		className = '!h-18 !mx-auto !w-full max-w-7xl px-4 md:px-10 lg:px-16 bg-white!',
		hasLogo,
		hasTitle,
		titleClassName =
			'!text-primary-600 dark:!text-slate-100 !font-semibold !text-2xl sm:!text-3xl !leading-tight !text-capitalize !px-0 !tracking-tight',
		title = 'Abahan Solutions',
		hasSubtitle,
		subtitle = '',
		subtitleClassName =
			'!text-slate-500 dark:!text-slate-400 !text-xs sm:!text-sm !leading-tight !px-0 !-mt-1 !tracking-[0.35em] !uppercase'
	}: Props & NavbarProps = $props();

	let showLogo = $derived(Boolean(hasLogo && logoImgSrc));

	let pageMenus = [
		{ id: 'home', title: 'Home', url: '/', isExternal: false },
		{ id: 'about', title: 'About', url: '/about', isExternal: false },
		{ id: 'colleges', title: 'Colleges', url: '/colleges', isExternal: false },
		{ id: 'contact', title: 'Contact', url: '/contact', isExternal: false }
	];

	const getActiveMenuId = (pathname: string) =>
		pageMenus.find((menu) => menu.url === pathname)?.id ?? 'home';

	let activeMenu = $state(getActiveMenuId(page.url.pathname));
	let isMobileMenuOpen = $state(false);

	$effect(() => {
		activeMenu = getActiveMenuId(page.url.pathname);
	});

	async function handlePageNavigation(ev: any, menu: any) {
		ev?.preventDefault?.();
		activeMenu = menu.id;
		if (menu?.url) {
			await goto(menu.url);
		}
		isMobileMenuOpen = false;
	}

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}
</script>

<!-- <svelte:window on:click={handleOutsideClick} /> -->

{#snippet centerSnippet()}
	<div class="hidden h-full items-center justify-center gap-2 px-2 py-1 backdrop-blur-md lg:flex">
		{#each pageMenus as menu (menu.id)}
			<a
				href={menu.url}
				target={menu.isExternal ? '_blank' : undefined}
				rel={menu.isExternal ? 'noopener noreferrer' : undefined}
				class="{activeMenu === menu.id
					? 'text-slate-900 dark:text-white before:opacity-100 after:scale-x-100 shadow-md shadow-slate-900/10'
					: 'text-slate-500 dark:text-slate-300'} relative h-full px-4 py-2 pt-7 rounded-full text-[0.65rem] font-semibold uppercase tracking-[0.25em] overflow-hidden
			transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900 dark:hover:text-white
			focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950
			before:absolute before:inset-2 before:rounded-full before:bg-gradient-to-r before:from-amber-400/15 before:to-indigo-400/15 before:opacity-0 before:transition before:duration-300
			after:absolute after:bottom-[10px] after:left-1/2 after:h-[2px] after:w-6 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-amber-400 after:to-indigo-500 after:scale-x-0 after:transition after:duration-300
			before:content-[''] after:content-[''] hover:before:opacity-100 hover:after:scale-x-100"
				aria-current={activeMenu === menu.id ? 'page' : undefined}
			>
				{menu.title}
			</a>
		{/each}
	</div>
{/snippet}

{#snippet rightSnippet()}
	<div class="flex h-full items-center justify-center gap-4">
		{#if screenSize.isSm || screenSize.isMd || screenSize.isXs}
			<Button
				iconPath={mdiMenu}
				onClick={toggleMobileMenu}
				className="p-2! rounded-full border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/15 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-100 dark:focus-visible:ring-offset-slate-950"
				iconClassName="!h-6 !w-6"
			/>
		{/if}
	</div>
{/snippet}


<!-- Mobile Dropdown Menu -->
{#if isMobileMenuOpen}
	<div class="animate-fade-in fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-sm lg:hidden">
		<div
			class="mobile-menu animate-slide-in absolute right-0 top-0 flex h-full w-11/12 max-w-72 flex-col gap-5 border-l border-slate-200/70 bg-white/95 p-5 shadow-2xl shadow-slate-900/30 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/90"
		>
			<div class="mb-2 flex items-center justify-between gap-3 border-b border-slate-200/70 pb-3 dark:border-slate-800/70">
				<div class="flex min-w-0 flex-1 items-center gap-2">
					{#if showLogo}
						<img
							src={logoImgSrc}
							alt="Logo"
							class={`${logoImgClassName} h-10! w-10! sm:h-12! sm:w-12!`}
						/>
					{/if}
					{#if hasTitle}
						<span
							class={`min-w-0 truncate ${titleClassName} !text-base sm:!text-lg`}
							>{title}</span
						>
					{/if}
				</div>
				<Button
					iconPath={mdiClose}
					onClick={closeMobileMenu}
					className="p-2! shrink-0 rounded-full border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/15 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-100 dark:focus-visible:ring-offset-slate-950"
					iconClassName="!h-6 !w-6"
				/>
			</div>
			{#each pageMenus as menu (menu.id)}
				<a
					href={menu.url}
					onclick={(ev) => handlePageNavigation(ev, menu)}
					class="{activeMenu === menu.id
						? 'text-slate-900 dark:text-white border-transparent bg-gradient-to-r from-amber-400/20 to-indigo-400/15 shadow-lg shadow-slate-900/15 before:opacity-100 before:scale-100'
						: 'text-slate-600 dark:text-slate-300 border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/60'} group relative flex items-center rounded-2xl border px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:-translate-x-1 hover:text-slate-900 dark:hover:text-white hover:shadow-lg hover:shadow-slate-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 overflow-hidden before:absolute before:left-3 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-amber-400 before:opacity-0 before:scale-0 before:transition before:duration-300 group-hover:before:opacity-100 group-hover:before:scale-100 before:content-['']"
					aria-current={activeMenu === menu.id ? 'page' : undefined}
				>
					{menu.title}
				</a>
			{/each}

		</div>
	</div>
{/if}

<!-- {#if isMobileMenuOpen}
  <div class="fixed inset-0 z-[100] backdrop-blur-sm">
    <div
      class="mobile-menu bg-base-900 absolute top-0 right-0 flex h-full w-3/4 max-w-[300px] flex-col gap-2 p-4 shadow-[-4px_0_15px_rgba(0,0,0,0.3)]"
    >
      <div class="mb-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          {#if hasLogo}
            <img src={logoImgSrc} alt="Logo" class="h-8 w-8" />
          {/if}
          {#if hasTitle}
            <span class="text-lg font-bold text-white {titleClassName}">{title}</span>
          {/if}
        </div>
        <Button
          iconPath={mdiClose}
          onClick={closeMobileMenu}
          className="p-2 text-white hover:text-primary-400 transition-colors"
        />
      </div>
      {#each pageMenus as menu (menu.id)}
        <a
          href={menu.url}
          class="{activeMenu === menu.id ? 'text-primary-600 font-bold' : 'text-base-100'} block p-2 hover:text-primary-400 transition-colors"
          aria-current={activeMenu === menu.id ? 'page' : undefined}
        >
          {menu.title}
        </a>
      {/each}
    </div>
  </div>
{/if} -->

<div class="sticky top-0 z-30 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_16px_40px_rgba(15,23,42,0.08)] dark:bg-slate-950/70 dark:border-slate-800/70">
	<Navbar
		{hasBack}
		className={`${className} static! border-0! shadow-none! bg-transparent! dark:bg-transparent!`}
		hasLogo={showLogo}
		{logoImgSrc}
		{logoImgClassName}
		{hasTitle}
		{title}
		{titleClassName}
		centerSnippet={centerSnippet as Snippet}
		rightSnippet={rightSnippet as Snippet}
		onBack={goBack}
		onLogo={goHome}
		{disabledLogo}
		{hasSubtitle}
		{subtitle}
		{subtitleClassName}
	/>
</div>

<!-- rightSnippet={rightSnippet as Snippet} -->
<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slide-in {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.2s ease-in;
	}

	.animate-slide-in {
		animation: slide-in 0.3s ease-out;
	}

	/* .mobile-menu {
		animation: slide-in 0.3s ease-out;
	} */

</style>
