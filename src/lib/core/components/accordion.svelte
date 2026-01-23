<script lang="ts">
	import { Icon } from '@cloudparker/moldex.js';
	import { mdiChevronDown, mdiChevronUp, mdiMinus, mdiPlus } from '../services/app-icons-service';
  
	type AccordionData = {
	  title: string;
	  content: string;
	};
  
	type PropsType = {
	  items: AccordionData[];
	  className?: string;
	  iconClassName?: string;
	};
  
	let { items, className = '', iconClassName = '' }: PropsType = $props();
	let activeIndex = $state<number | null>(0);
  
	function toggleAccordion(index: number) {
	  activeIndex = activeIndex === index ? null : index;
	}
  </script>
  
  <div id="accordion-collapse" data-accordion="collapse" class={`space-y-4 ${className}`}>
	{#each items as item, index}
	  <div
		class={`accordion-item group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/80 px-4 shadow-sm transition duration-300 ${
			activeIndex === index ? 'border-primary-200/80 bg-primary-50/40 shadow-md' : 'hover:border-primary-200/70 hover:bg-white/95'
		}`}
	  >
		<span
			class={`pointer-events-none absolute left-0 top-5 h-6 w-1 rounded-full bg-linear-to-b from-primary-400 to-sky-400 opacity-0 transition duration-300 ${
				activeIndex === index ? 'opacity-100' : 'group-hover:opacity-80'
			}`}
		></span>
		<h2 id={`accordion-collapse-heading-${index}`}>
		  <button
			type="button"
			class="flex w-full items-start justify-between gap-4 py-4 text-left text-sm font-semibold text-neutral-700 transition duration-300 group-hover:text-primary-600 rtl:text-right"
			data-accordion-target={`#accordion-collapse-body-${index}`}
			onclick={() => toggleAccordion(index)}
			aria-expanded={activeIndex === index}
			aria-controls={`accordion-collapse-body-${index}`}
		  >
			<span class="text-sm sm:text-base">{item.title}</span>
			<span
				class={`mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition duration-300 ${
					activeIndex === index
						? 'border-primary-200 bg-primary-50 text-primary-600'
						: 'group-hover:border-primary-200 group-hover:text-primary-600'
				}`}
			>
				<Icon
				  path={activeIndex === index ? mdiMinus : mdiPlus}
				  className={`h-4 w-4 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''} ${iconClassName}`}
				  viewBox="0 0 20 20"
				/>
			</span>
		  </button>
		</h2>
		<div
		  id={`accordion-collapse-body-${index}`}
		  class="overflow-hidden transition-all duration-300 ease-in-out"
		  style={`max-height: ${activeIndex === index ? '520px' : '0'}; opacity: ${activeIndex === index ? '1' : '0'};`}
		  aria-labelledby={`accordion-collapse-heading-${index}`}
		>
		  <div class="pb-5 text-sm leading-relaxed text-neutral-600">
			{@html item.content}
		  </div>
		</div>
	  </div>
	{/each}
  </div>



  <style>
	/* Smooth accordion transition */
	.accordion-item > div {
		transition: max-height 0.5s ease, opacity 0.3s ease;
	}
</style>
