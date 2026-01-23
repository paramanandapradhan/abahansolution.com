import type { ActionReturn } from 'svelte/action';

type ScrollRevealParams = {
	selector?: string;
	y?: number;
	duration?: number;
	stagger?: number;
	start?: string;
	once?: boolean;
	delay?: number;
	ease?: string;
};

type GsapBundle = {
	gsap: (typeof import('gsap'))['default'];
	ScrollTrigger: (typeof import('gsap/ScrollTrigger'))['ScrollTrigger'];
};

let gsapPromise: Promise<GsapBundle> | null = null;

const prefersReducedMotion = () =>
	typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const loadGsap = async () => {
	if (!gsapPromise) {
		gsapPromise = Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
			([gsapModule, scrollTriggerModule]) => {
				const gsap = gsapModule.default;
				const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
				gsap.registerPlugin(ScrollTrigger);
				return { gsap, ScrollTrigger };
			}
		);
	}

	return gsapPromise;
};

export function scrollReveal(
	node: HTMLElement,
	params: ScrollRevealParams = {}
): ActionReturn<ScrollRevealParams> {
	let cleanup: (() => void) | undefined;
	let destroyed = false;

	const setup = async () => {
		if (prefersReducedMotion()) return;

		const { gsap, ScrollTrigger } = await loadGsap();
		if (destroyed) return;

		const targets = node.querySelectorAll(params.selector ?? '[data-animate]');
		if (!targets.length) return;

		const ctx = gsap.context(() => {
			gsap.from(targets, {
				opacity: 0,
				y: params.y ?? 24,
				duration: params.duration ?? 0.85,
				stagger: params.stagger ?? 0.12,
				delay: params.delay ?? 0,
				ease: params.ease ?? 'power3.out',
				scrollTrigger: {
					trigger: node,
					start: params.start ?? 'top 80%',
					once: params.once ?? true
				}
			});
		}, node);

		cleanup = () => ctx.revert();
		ScrollTrigger.refresh();
	};

	void setup();

	return {
		update(nextParams: ScrollRevealParams = {}) {
			params = { ...params, ...nextParams };
			cleanup?.();
			void setup();
		},
		destroy() {
			destroyed = true;
			cleanup?.();
		}
	};
}
