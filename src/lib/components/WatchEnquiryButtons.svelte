<script>
	import { siWhatsapp } from 'simple-icons';
	import { Button } from '#lib/components/ui/button/index.js';
	import BrandIcon from '#lib/components/BrandIcon.svelte';
	import { watchDetailContent } from '#lib/data/watch-detail.js';

	let { whatsappLink, isSold } = $props();
</script>

<div class="flex flex-col gap-4">
	<Button href={whatsappLink} variant="whatsapp" class="h-14 gap-3 text-base font-bold">
		<BrandIcon icon={siWhatsapp} size={22} />
		{isSold
			? watchDetailContent.askForSimilarWatchButtonLabel
			: watchDetailContent.askAboutWatchButtonLabel}
	</Button>

	<p class="text-sm text-muted-foreground">{watchDetailContent.whatsappNote}</p>

	{#if !isSold}
		<Button
			href={watchDetailContent.carousellLink}
			variant="outline"
			class="h-12 border-input text-base font-semibold"
		>
			{watchDetailContent.viewOnCarousellButtonLabel}
		</Button>
	{/if}
</div>
