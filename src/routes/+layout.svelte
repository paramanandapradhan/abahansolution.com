<script lang="ts">
	import { ScreenDetector } from '@cloudparker/moldex.js';
	import '../app.css';
	import { onMount } from 'svelte';
	import type Lenis from 'lenis';

	let { children } = $props();
	let lenis: Lenis | undefined;
	let tickerCallback: ((time: number) => void) | undefined;
	let gsapInstance: (typeof import('gsap'))['default'] | undefined;

	onMount(() => {
		let destroyed = false;

		void (async () => {
			const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			if (prefersReducedMotion) return;

			const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] = await Promise.all([
				import('lenis'),
				import('gsap'),
				import('gsap/ScrollTrigger')
			]);

			if (destroyed) return;

			gsapInstance = gsap;
			gsap.registerPlugin(ScrollTrigger);

			const instance = new Lenis({
				lerp: 0.08,
				smoothWheel: true
			});

			lenis = instance;
			tickerCallback = (time: number) => {
				instance.raf(time * 1000);
				if (instance.isScrolling) {
					ScrollTrigger.update();
				}
			};

			gsap.ticker.add(tickerCallback);
			gsap.ticker.lagSmoothing(0);
			ScrollTrigger.refresh();
		})();

		return () => {
			destroyed = true;
			if (tickerCallback && gsapInstance) {
				gsapInstance.ticker.remove(tickerCallback);
			}
			lenis?.destroy();
		};
	});
</script>

<ScreenDetector />

{@render children()}
