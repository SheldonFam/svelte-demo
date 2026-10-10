<script>
	import WatchCardSkeleton from '#lib/components/WatchCardSkeleton.svelte';
	import { watchListContent } from '#lib/data/watch-list.js';

	// How many placeholder cards to show. 8 is two rows on desktop.
	const placeholderCards = [1, 2, 3, 4, 5, 6, 7, 8];
</script>

<!-- Shown in place of the watch cards while the watches load.
	It uses the same grid as WatchGrid, so the page does not jump when the watches arrive. -->
<div class="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4" aria-busy="true">
	<span class="sr-only">{watchListContent.loadingAccessibleLabel}</span>

	{#each placeholderCards as placeholderCard (placeholderCard)}
		<WatchCardSkeleton />
	{/each}
</div>
