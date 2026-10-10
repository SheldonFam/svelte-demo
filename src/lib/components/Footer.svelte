<script>
	import { siTelegram, siInstagram, siFacebook, siTiktok } from 'simple-icons';
	import ShoppingBagIcon from '@lucide/svelte/icons/shopping-bag';
	import BrandIcon from '#lib/components/BrandIcon.svelte';
	import { siteContent } from '#lib/data/site.js';
	import { footerContent } from '#lib/data/footer.js';

	const socialLinkClass =
		'flex size-11 items-center justify-center rounded-md border border-input text-foreground transition-colors hover:border-foreground';
</script>

<footer class="border-t">
	<div
		class="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-8 text-sm text-muted-foreground md:px-6"
	>
		<div class="flex flex-col gap-1">
			<div class="text-xl font-bold tracking-wide text-foreground">{siteContent.siteName}</div>
			<div>{siteContent.siteTagline}</div>
		</div>

		<div class="flex flex-col gap-2">
			<div class="text-xs font-semibold tracking-[0.14em] uppercase">
				{footerContent.socialHeading}
			</div>

			<div class="flex flex-wrap gap-2">
				<a
					href={footerContent.telegram.link}
					aria-label={footerContent.telegram.accessibleLabel}
					title={footerContent.telegram.name}
					class={socialLinkClass}
				>
					<BrandIcon icon={siTelegram} size={20} />
				</a>

				<a
					href={footerContent.instagram.link}
					aria-label={footerContent.instagram.accessibleLabel}
					title={footerContent.instagram.name}
					class={socialLinkClass}
				>
					<BrandIcon icon={siInstagram} size={20} />
				</a>

				<!-- simple-icons has no Carousell logo, so this uses a shopping bag icon from Lucide. -->
				<a
					href={footerContent.carousell.link}
					aria-label={footerContent.carousell.accessibleLabel}
					title={footerContent.carousell.name}
					class={socialLinkClass}
				>
					<ShoppingBagIcon class="size-5" />
				</a>

				<a
					href={footerContent.facebook.link}
					aria-label={footerContent.facebook.accessibleLabel}
					title={footerContent.facebook.name}
					class={socialLinkClass}
				>
					<BrandIcon icon={siFacebook} size={20} />
				</a>

				<a
					href={footerContent.tiktok.link}
					aria-label={footerContent.tiktok.accessibleLabel}
					title={footerContent.tiktok.name}
					class={socialLinkClass}
				>
					<BrandIcon icon={siTiktok} size={20} />
				</a>
			</div>

			<a
				href={footerContent.termsLink}
				class="flex h-11 items-center underline underline-offset-4 hover:text-foreground"
			>
				{footerContent.termsLinkLabel}
			</a>
		</div>
	</div>
</footer>
