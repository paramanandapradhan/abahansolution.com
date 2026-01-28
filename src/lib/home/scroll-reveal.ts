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
				const gsap =
					(gsapModule as typeof gsapModule & { gsap?: GsapBundle['gsap'] }).gsap ??
					gsapModule.default ??
					(gsapModule as GsapBundle['gsap']);
				const ScrollTrigger =
					(scrollTriggerModule as typeof scrollTriggerModule & {
						ScrollTrigger?: GsapBundle['ScrollTrigger'];
					}).ScrollTrigger ??
					scrollTriggerModule.default ??
					(scrollTriggerModule as GsapBundle['ScrollTrigger']);
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

		const targets = Array.from(node.querySelectorAll(params.selector ?? '[data-animate]'));
		if (!targets.length) return;

		let hasAnimated = false;

		const ctx = gsap.context(() => {
			const runAnimation = () => {
				if (hasAnimated && (params.once ?? true)) return;
				hasAnimated = true;

				gsap.fromTo(
					targets,
					{
						autoAlpha: 0,
						y: params.y ?? 36,
						scale: 0.98,
						filter: 'blur(4px)'
					},
					{
						autoAlpha: 1,
						y: 0,
						scale: 1,
						filter: 'blur(0px)',
						duration: params.duration ?? 1.1,
						stagger: params.stagger ?? 0.18,
						delay: params.delay ?? 0,
						ease: params.ease ?? 'power3.out',
						immediateRender: false,
						clearProps: 'transform,filter,opacity'
					}
				);
			};

			const trigger = ScrollTrigger.create({
				trigger: node,
				start: params.start ?? 'top 90%',
				once: params.once ?? true,
				onEnter: runAnimation,
				onEnterBack: () => {
					if (!(params.once ?? true)) runAnimation();
				}
			});

			if (trigger.isActive) {
				runAnimation();
			}
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
