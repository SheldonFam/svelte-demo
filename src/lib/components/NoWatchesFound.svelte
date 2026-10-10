<script>
	import { siWhatsapp } from 'simple-icons';
	import { Button } from '#lib/components/ui/button/index.js';
	import BrandIcon from '#lib/components/BrandIcon.svelte';
	import { siteContent } from '#lib/data/site.js';
	import { watchListContent } from '#lib/data/watch-list.js';

	let { onClearAll } = $props();
</script>

<div class="flex flex-col items-center gap-4 py-12 text-center">
	<h2 class="text-[26px] leading-8 font-bold tracking-tight">{watchListContent.noMatchHeading}</h2>

	<p class="max-w-130 text-muted-foreground">{watchListContent.noMatchDescription}</p>

	<div class="flex flex-wrap justify-center gap-3">
		<Button variant="outline" class="h-12 px-6 text-base font-semibold" onclick={onClearAll}>
			{watchListContent.clearAllFiltersButtonLabel}
		</Button>
	</div>
</div>
