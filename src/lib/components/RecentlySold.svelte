<script>
	import WatchCard from '#lib/components/WatchCard.svelte';
	import { recentlySoldContent } from '#lib/data/sold.js';
	import { watches } from '#lib/data/watches.js';
	import { getRecentlySoldWatches } from '#lib/recently-sold.js';

	const soldWatches = getRecentlySoldWatches(watches, recentlySoldContent.watchCount);
</script>

<section class="mx-auto flex w-full max-w-300 flex-col gap-6 px-4 py-12 md:px-6 md:py-24">
	<h2 class="text-[26px] leading-8 font-bold tracking-tight md:text-4xl md:leading-10.5">
		{recentlySoldContent.heading}
	</h2>

	<ul
		class="reveal-group -mx-4 grid snap-x snap-mandatory scroll-px-4 auto-cols-[46%] grid-flow-col gap-3 overflow-x-auto px-4 pb-2 sm:auto-cols-[31%] md:-mx-6 md:scroll-px-6 md:px-6 lg:mx-0 lg:grid-flow-row lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0"
	>
		{#each soldWatches as watch, index (watch.id)}
			<li class="reveal flex snap-start" style:--reveal-index={index}>
				<WatchCard {watch} variant="compact" />
			</li>
		{/each}
	</ul>
</section>
