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

type InlineStyleSnapshot = {
	target: HTMLElement;
	opacity: string;
	visibility: string;
	transform: string;
	filter: string;
	willChange: string;
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
					(gsapModule as unknown as GsapBundle['gsap']);
				const ScrollTrigger =
					(scrollTriggerModule as typeof scrollTriggerModule & {
						ScrollTrigger?: GsapBundle['ScrollTrigger'];
					}).ScrollTrigger ??
					scrollTriggerModule.default ??
					(scrollTriggerModule as unknown as GsapBundle['ScrollTrigger']);
				gsap.registerPlugin(ScrollTrigger);
				return { gsap, ScrollTrigger };
			}
		);
	}

	return gsapPromise;
};

const captureInlineStyles = (targets: HTMLElement[]): InlineStyleSnapshot[] =>
	targets.map((target) => ({
		target,
		opacity: target.style.opacity,
		visibility: target.style.visibility,
		transform: target.style.transform,
		filter: target.style.filter,
		willChange: target.style.willChange
	}));

const restoreInlineStyles = (snapshots: InlineStyleSnapshot[]) => {
	for (const snapshot of snapshots) {
		snapshot.target.style.opacity = snapshot.opacity;
		snapshot.target.style.visibility = snapshot.visibility;
		snapshot.target.style.transform = snapshot.transform;
		snapshot.target.style.filter = snapshot.filter;
		snapshot.target.style.willChange = snapshot.willChange;
	}
};

const applyInitialRevealState = (targets: HTMLElement[], y: number) => {
	const snapshots = captureInlineStyles(targets);

	for (const target of targets) {
		target.style.opacity = '0';
		target.style.visibility = 'hidden';
		target.style.transform = `translate3d(0, ${y}px, 0) scale(0.98)`;
		target.style.filter = 'blur(4px)';
		target.style.willChange = 'opacity, transform, filter';
	}

	return () => restoreInlineStyles(snapshots);
};

export function scrollReveal(
	node: HTMLElement,
	params: ScrollRevealParams = {}
): ActionReturn<ScrollRevealParams> {
	let cleanup: (() => void) | undefined;
	let destroyed = false;

	const setup = async () => {
		const targets = Array.from(node.querySelectorAll<HTMLElement>(params.selector ?? '[data-animate]'));
		if (!targets.length) return;
		if (prefersReducedMotion()) return;

		const restoreInitialStyles = applyInitialRevealState(targets, params.y ?? 36);

		try {
			const { gsap, ScrollTrigger } = await loadGsap();
			if (destroyed) {
				restoreInitialStyles();
				return;
			}

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
							overwrite: 'auto',
							onComplete: restoreInitialStyles
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

			cleanup = () => {
				ctx.revert();
				restoreInitialStyles();
			};

			ScrollTrigger.refresh();
		} catch (error) {
			restoreInitialStyles();
			console.error('Failed to initialize scroll reveal', error);
		}
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
