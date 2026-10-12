<script>
	import WatchCardSkeleton from '#lib/components/WatchCardSkeleton.svelte';
	import { watchListContent } from '#lib/data/watch-list.js';

	const placeholderCards = [1, 2, 3, 4, 5, 6, 7, 8];
</script>

<div
	class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
	aria-busy="true"
>
	<span class="sr-only">{watchListContent.loadingAccessibleLabel}</span>

	{#each placeholderCards as placeholderCard (placeholderCard)}
		<WatchCardSkeleton />
	{/each}
</div>
