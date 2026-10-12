<script>
	import { getShopStats } from '#lib/shop-stats.js';
	import { watches } from '#lib/data/watches.js';

	const shopStats = getShopStats(watches);
</script>

<section class="border-y">
	<div class="mx-auto grid w-full max-w-300 grid-cols-2 px-4 md:grid-cols-4 md:px-6">
		{#each shopStats as stat (stat.id)}
			<div class="flex flex-col gap-1 py-4 pr-2 md:py-8">
				<div
					class="text-[32px] leading-9 font-light tracking-tight tabular-nums md:text-5xl md:leading-14"
				>
					{stat.value}
				</div>
				<div class="text-sm text-muted-foreground">{stat.label}</div>
			</div>
		{/each}
	</div>
</section>
