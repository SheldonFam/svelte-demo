<script>
	import WatchCard from '#lib/components/WatchCard.svelte';

	let { watches } = $props();
</script>

<div class="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
	{#each watches as watch (watch.id)}
		<WatchCard {watch} />
	{/each}
</div>
