<script>
	import { siWhatsapp } from 'simple-icons';
	import { Button } from '#lib/components/ui/button/index.js';
	import BrandIcon from '#lib/components/BrandIcon.svelte';
	import { formatRinggit } from '#lib/format.js';
	import { watchDetailContent } from '#lib/data/watch-detail.js';

	let { watch, shortName, whatsappLink } = $props();
</script>

<div
	class="fixed inset-x-0 bottom-0 z-10 flex h-21 items-center justify-between gap-4 border-t bg-card px-4 md:hidden"
>
	<div class="flex min-w-0 flex-col gap-1">
		<div class="truncate text-xs text-muted-foreground">{shortName}</div>
		<div class="text-xl leading-6 font-bold tabular-nums">{formatRinggit(watch.price)}</div>
	</div>

	<Button href={whatsappLink} class="h-12 flex-none gap-2 px-6 text-base font-bold">
		<BrandIcon icon={siWhatsapp} size={20} />
		{watchDetailContent.mobileBarButtonLabel}
	</Button>
</div>

<div class="h-21 md:hidden"></div>
