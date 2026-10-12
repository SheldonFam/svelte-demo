<script>
	import { page } from '$app/state';
	import { siWhatsapp } from 'simple-icons';
	import BrandIcon from '#lib/components/BrandIcon.svelte';
	import { siteContent } from '#lib/data/site.js';
	import { headerContent } from '#lib/data/header.js';

	const isWatchPage = $derived(page.url.pathname.startsWith('/watches/'));
</script>

{#if !isWatchPage}
	<a
		href={siteContent.whatsappLink}
		aria-label={headerContent.whatsappFloatingAccessibleLabel}
		class="fixed right-4 bottom-5 z-10 flex size-14 items-center justify-center rounded-full bg-mint text-mint-foreground shadow-[0_6px_18px_-4px_rgba(0,0,0,0.35)] transition-transform active:translate-y-px md:hidden"
	>
		<BrandIcon icon={siWhatsapp} size={26} />
	</a>
{/if}
