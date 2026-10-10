<script>
	import XIcon from '@lucide/svelte/icons/x';
	import { Button } from '#lib/components/ui/button/index.js';
	import { watchListContent } from '#lib/data/watch-list.js';

	let { countText, tags, onRemoveTag, onClearAll } = $props();
</script>

<div class="flex flex-wrap items-center gap-x-3 gap-y-2">
	<div class="mr-2 flex min-h-6 items-center font-semibold">{countText}</div>

	{#each tags as tag (tag.id)}
		<Button
			variant="outline"
			onclick={() => onRemoveTag(tag.id)}
			aria-label={watchListContent.removeFilterAccessibleLabelPrefix + tag.label}
			class="h-11 cursor-pointer gap-2 border-input bg-card px-3 text-sm font-normal hover:border-foreground hover:bg-card dark:bg-card dark:hover:bg-card"
		>
			{tag.label}
			<XIcon class="size-3.5" />
		</Button>
	{/each}

	{#if tags.length > 0}
		<Button
			variant="link"
			onclick={onClearAll}
			class="h-11 cursor-pointer px-2 text-sm font-semibold text-foreground underline hover:opacity-75"
		>
			{watchListContent.clearAllLabel}
		</Button>
	{/if}
</div>
