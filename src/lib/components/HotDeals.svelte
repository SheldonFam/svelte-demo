<script>
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import WatchCard from '#lib/components/WatchCard.svelte';
	import { hotDealsContent } from '#lib/data/hot-deals.js';
	import { watches } from '#lib/data/watches.js';

	const hotDealWatches = watches.filter((watch) => watch.isHotDeal);
</script>

<section class="mx-auto flex w-full max-w-300 flex-col gap-6 px-4 py-12 md:px-6 md:py-24">
	<div class="flex flex-wrap items-end justify-between gap-3">
		<div class="flex flex-col gap-2">
			<h2 class="text-[26px] leading-8 font-bold tracking-tight md:text-4xl md:leading-10.5">
				{hotDealsContent.heading}
			</h2>
			<p class="text-muted-foreground">{hotDealsContent.description}</p>
		</div>

		<a
			href={hotDealsContent.seeAllLink}
			class="flex h-11 items-center gap-2 font-semibold underline underline-offset-4 hover:opacity-75"
		>
			{hotDealsContent.seeAllLinkLabel}
			<ArrowRightIcon class="size-4.5" />
		</a>
	</div>

	<div class="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
		{#each hotDealWatches as watch, index (watch.id)}
			<div class="reveal flex" style:--reveal-index={index}>
				<WatchCard {watch} />
			</div>
		{/each}
	</div>
</section>
