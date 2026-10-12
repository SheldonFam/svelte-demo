<script>
	import { Badge } from '#lib/components/ui/badge/index.js';
	import {
		formatRinggit,
		formatUsDollarEstimate,
		formatReference,
		formatSoldText
	} from '#lib/format.js';
	import { watchDetailContent } from '#lib/data/watch-detail.js';

	let { watch, fullName, tags } = $props();
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-wrap items-center justify-between gap-2">
		<div class="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
			{watch.brand}
		</div>

		{#if watch.isSold}
			<div class="text-sm text-muted-foreground">
				{formatSoldText(watch.soldOn)}
			</div>
		{:else}
			<div class="flex items-center gap-2 text-sm">
				<span class="size-2 rounded-full bg-[#25d366]"></span>
				{watchDetailContent.availableStatusLabel}
			</div>
		{/if}
	</div>

	<h1
		class="text-[26px] leading-8 font-bold tracking-tight text-balance md:text-4xl md:leading-10.5"
	>
		{fullName}
	</h1>

	<div class="font-mono text-sm text-muted-foreground">
		{formatReference(watch.reference)}
	</div>

	<div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
		<div
			class="text-4xl leading-10.5 font-bold tabular-nums {watch.isSold
				? 'text-muted-foreground'
				: ''}"
		>
			{formatRinggit(watch.price)}
		</div>

		<div class="text-sm text-muted-foreground">
			{formatUsDollarEstimate(watch.price)}
		</div>
	</div>

	{#if tags.length > 0}
		<div class="flex flex-wrap gap-2">
			{#each tags as tag (tag)}
				<Badge variant="outline" class="h-9 border-input px-4 text-sm font-normal">
					{tag}
				</Badge>
			{/each}
		</div>
	{/if}
</div>
