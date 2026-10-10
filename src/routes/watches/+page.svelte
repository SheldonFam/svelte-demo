<script>
	import { onMount } from 'svelte';
	import WatchListSkeleton from '#lib/components/WatchListSkeleton.svelte';
	import WatchFilters from '#lib/components/WatchFilters.svelte';
	import ActiveFilterTags from '#lib/components/ActiveFilterTags.svelte';
	import WatchGrid from '#lib/components/WatchGrid.svelte';
	import WatchPagination from '#lib/components/WatchPagination.svelte';
	import NoWatchesFound from '#lib/components/NoWatchesFound.svelte';
	import AskOnWhatsApp from '#lib/components/AskOnWhatsApp.svelte';
	import { siteContent } from '#lib/data/site.js';
	import { watchListContent } from '#lib/data/watch-list.js';
	import { loadWatches } from '#lib/watch-loader.js';
	import {
		watchesPerPage,
		defaultSelection,
		changeSelection,
		removeTag,
		clearFilters,
		searchWatches
	} from '#lib/watch-search.js';

	// The watches. null until they finish loading.
	let watches = $state.raw(null);

	onMount(async () => {
		watches = await loadWatches();
	});

	// The visitor's choices. Always replaced with a new selection, never changed in place.
	let selection = $state.raw(defaultSelection);

	// Everything the page shows, worked out again whenever the watches or the choices change.
	let result = $derived(searchWatches(watches, selection));

	function changePage(page) {
		selection = changeSelection(selection, { page });
		window.scrollTo({ top: 0 });
	}
</script>

<svelte:head>
	<title>{watchListContent.heading} | {siteContent.siteName}</title>
	<meta name="description" content={watchListContent.pageDescription} />
</svelte:head>

<section class="mx-auto flex w-full max-w-300 flex-col gap-6 px-4 pt-8 pb-12 md:px-6 md:pb-24">
	<div class="flex flex-col gap-2">
		<h1 class="text-[26px] leading-8 font-bold tracking-tight md:text-4xl md:leading-10.5">
			{watchListContent.heading}
		</h1>
		<p class="text-muted-foreground">{watchListContent.description}</p>
	</div>

	<WatchFilters
		{selection}
		brandOptions={result.brandOptions}
		onChange={(changes) => (selection = changeSelection(selection, changes))}
	/>

	<ActiveFilterTags
		countText={result.countText}
		tags={result.tags}
		onRemoveTag={(tagId) => (selection = removeTag(selection, tagId))}
		onClearAll={() => (selection = clearFilters(selection))}
	/>

	{#if watches === null}
		<WatchListSkeleton />
	{:else if result.matchCount > 0}
		<WatchGrid watches={result.watchesOnThisPage} />

		<WatchPagination
			totalCount={result.matchCount}
			perPage={watchesPerPage}
			currentPage={selection.page}
			rangeText={result.rangeText}
			onPageChange={changePage}
		/>

		<AskOnWhatsApp />
	{:else}
		<NoWatchesFound onClearAll={() => (selection = clearFilters(selection))} />
	{/if}
</section>
