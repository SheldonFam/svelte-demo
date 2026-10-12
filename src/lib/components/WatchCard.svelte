<script>
	import {
		formatRinggit,
		formatUsDollarEstimate,
		formatReference,
		formatSoldText
	} from '#lib/format.js';

	let { watch, variant = 'full', tagLabel = '' } = $props();

	const isCompact = $derived(variant === 'compact');
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
			class="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04] {watch.isSold &&
			!isCompact
				? 'opacity-45'
				: ''}"
		/>

		{#if watch.isSold}
			<span
				class="absolute top-2.5 left-2.5 rounded-md bg-foreground px-2 py-1 text-xs font-semibold tracking-widest text-background uppercase"
			>
				{formatSoldText(watch.soldOn)}
			</span>
		{:else if tagLabel !== ''}
			<span
				class="absolute top-2.5 left-2.5 rounded-md bg-primary px-2 py-1 text-xs font-semibold tracking-widest text-primary-foreground uppercase"
			>
				{tagLabel}
			</span>
		{/if}
	</div>

	<div class="flex flex-col gap-2 p-3 {isCompact ? '' : 'md:p-4'}">
		<div class="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
			<div class="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
				{watch.brand}
			</div>

			{#if !isCompact}
				<div class="text-xs whitespace-nowrap text-muted-foreground">
					{watch.detailText}
				</div>
			{/if}
		</div>

		<div
			class="min-h-10 text-sm leading-5 {isCompact
				? ''
				: 'md:min-h-11 md:text-base md:leading-5.5'}"
		>
			{watch.model}
		</div>

		{#if !isCompact}
			<div class="font-mono text-xs text-muted-foreground">
				{formatReference(watch.reference)}
			</div>
		{/if}

		<div class="flex flex-col gap-1">
			<div
				class="text-base font-bold tabular-nums {isCompact ? '' : 'md:text-xl'} {watch.isSold &&
				!isCompact
					? 'text-muted-foreground'
					: ''}"
			>
				{formatRinggit(watch.price)}
			</div>

			{#if !isCompact}
				<div class="text-xs text-muted-foreground md:text-sm">
					{formatUsDollarEstimate(watch.price)}
				</div>
			{/if}
		</div>
	</div>
</a>
