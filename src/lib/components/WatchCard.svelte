<script>
	import { formatRinggit, formatUsDollarEstimate } from '#lib/format.js';

	let { watch } = $props();
</script>

<a
	href={'/watches/' + watch.id}
	class="group flex w-full flex-col overflow-hidden rounded-md border bg-card transition-colors hover:border-input"
>
	<div class="relative aspect-square overflow-hidden bg-muted">
		<img
			src={watch.photo}
			alt={watch.brand + ' ' + watch.model}
			width="640"
			height="640"
			loading="lazy"
			class="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04] {watch.isSold
				? 'opacity-45'
				: ''}"
		/>

		{#if watch.isSold}
			<span
				class="absolute top-2.5 left-2.5 rounded-md bg-foreground px-2 py-1 text-xs font-semibold tracking-widest text-background uppercase"
			>
				{watch.soldBadgeText}
			</span>
		{/if}
	</div>

	<div class="flex flex-col gap-2 p-3 md:p-4">
		<!-- Brand on the left, year and set on the right, like the live site.
		     On a narrow card the detail drops under the brand instead of squashing it. -->
		<div class="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
			<div class="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
				{watch.brand}
			</div>

			<div class="text-xs whitespace-nowrap text-muted-foreground">
				{watch.detailText}
			</div>
		</div>

		<!-- min-h keeps room for two lines, so every card has the same height. -->
		<div class="min-h-10 text-sm leading-5 md:min-h-11 md:text-base md:leading-5.5">
			{watch.model}
		</div>

		<div class="flex flex-col gap-1">
			<div
				class="text-base font-bold tabular-nums md:text-xl {watch.isSold
					? 'text-muted-foreground'
					: ''}"
			>
				{formatRinggit(watch.price)}
			</div>

			<div class="text-xs text-muted-foreground md:text-sm">
				{formatUsDollarEstimate(watch.price)}
			</div>
		</div>
	</div>
</a>
