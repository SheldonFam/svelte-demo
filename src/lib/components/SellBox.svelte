<script>
	import { siWhatsapp } from 'simple-icons';
	import { Button } from '#lib/components/ui/button/index.js';
	import BrandIcon from '#lib/components/BrandIcon.svelte';
	import { siteContent } from '#lib/data/site.js';
	import { sellBoxContent } from '#lib/data/sell.js';
</script>

<div
	id="sell"
	class="flex w-full scroll-mt-6 flex-col justify-center gap-4 rounded-md bg-secondary p-6 md:p-8"
>
	<h2 class="text-[26px] leading-8 font-bold tracking-tight">{sellBoxContent.heading}</h2>

	<p class="text-muted-foreground">{sellBoxContent.description}</p>

	<Button href={siteContent.whatsappLink} class="mt-2 h-14 w-full gap-3 text-base font-bold">
		<BrandIcon icon={siWhatsapp} size={20} />
		{sellBoxContent.whatsappButtonLabel}
	</Button>
</div>
