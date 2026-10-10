<script>
	import { shopStats } from '#lib/data/stats.js';
</script>

<!-- The only section with lines: a thin band of proof right under the hero. -->
<section class="border-y">
	<div class="mx-auto grid w-full max-w-300 grid-cols-3 px-4 md:grid-cols-4 md:px-6">
		{#each shopStats as stat (stat.id)}
			<div class="flex-col gap-1 py-4 pr-2 md:py-8 {stat.showOnPhone ? 'flex' : 'hidden md:flex'}">
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
