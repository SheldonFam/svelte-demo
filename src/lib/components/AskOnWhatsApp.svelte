<script>
	import { siWhatsapp } from 'simple-icons';
	import { Button } from '#lib/components/ui/button/index.js';
	import BrandIcon from '#lib/components/BrandIcon.svelte';
	import { siteContent } from '#lib/data/site.js';
	import { watchListContent } from '#lib/data/watch-list.js';
</script>

<div
	class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 rounded-md border bg-card p-6"
>
	<div class="flex flex-col gap-1">
		<h2 class="text-xl font-bold">{watchListContent.specificModelHeading}</h2>
		<p class="text-muted-foreground">{watchListContent.specificModelDescription}</p>
	</div>

	<Button href={siteContent.whatsappLink} class="h-12 gap-2 px-6 text-base font-bold">
		<BrandIcon icon={siWhatsapp} size={20} />
		{watchListContent.askOnWhatsappButtonLabel}
	</Button>
</div>
