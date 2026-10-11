<script>
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import WatchCard from '#lib/components/WatchCard.svelte';
	import { watchDetailContent } from '#lib/data/watch-detail.js';

	let { watches } = $props();
</script>

<section class="mx-auto flex w-full max-w-300 flex-col gap-6 px-4 py-12 md:px-6 md:py-24">
	<div class="flex flex-wrap items-center justify-between gap-3 md:items-end">
		<h2 class="text-[26px] leading-8 font-bold tracking-tight md:text-4xl md:leading-10.5">
			{watchDetailContent.similarWatchesHeading}
		</h2>

		<a
			href={watchDetailContent.similarWatchesLink}
			class="flex h-11 items-center gap-2 font-semibold underline underline-offset-4 hover:opacity-75"
		>
			{watchDetailContent.similarWatchesLinkLabel}
			<ArrowRightIcon class="size-4.5" />
		</a>
	</div>

	<div class="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
		{#each watches as watch (watch.id)}
			<div class="flex">
				<WatchCard {watch} />
			</div>
		{/each}
	</div>
</section>
