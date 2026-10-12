<script>
	import { page } from '$app/state';
	import { toggleMode } from 'mode-watcher';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import { siWhatsapp } from 'simple-icons';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Sheet from '#lib/components/ui/sheet/index.js';
	import BrandIcon from '#lib/components/BrandIcon.svelte';
	import { siteContent } from '#lib/data/site.js';
	import { headerContent } from '#lib/data/header.js';

	let mobileMenuOpen = $state(false);

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// True when the visitor is on this link's page, for example /watches or /watches/IIM515.
	function isCurrentPage(href) {
		return page.url.pathname.startsWith(href);
	}
</script>

<div class="flex min-h-7 items-center justify-center bg-border text-xs tracking-wide">
	{siteContent.demoNoticeText}
</div>

<header class="border-b bg-background md:sticky md:top-0 md:z-20">
	<div class="mx-auto flex w-full max-w-300 items-center justify-between gap-6 px-4 py-3 md:px-6">
		<a
			href="/"
			class="text-[26px] leading-none font-bold tracking-wide transition-opacity hover:opacity-75"
		>
			{siteContent.siteName}
		</a>

		<div class="flex items-center gap-2">
			<nav class="hidden items-center gap-2 md:flex">
				{#each headerContent.navigationItems as item (item.name)}
					<a
						href={item.href}
						aria-current={isCurrentPage(item.href) ? 'page' : undefined}
						class="flex h-11 items-center px-4 text-base transition-colors hover:text-foreground {isCurrentPage(
							item.href
						)
							? 'font-bold text-foreground'
							: 'font-normal text-muted-foreground'}"
					>
						{item.name}
					</a>
				{/each}
			</nav>

			<!-- Outlined, so the tan "Browse watches" button in the hero is the main action. -->
			<Button
				href={siteContent.whatsappLink}
				variant="outline"
				class="hidden h-11 gap-2 border-mint px-4 text-base font-bold text-mint hover:bg-mint/10 hover:text-mint md:inline-flex dark:border-mint dark:hover:bg-mint/15"
			>
				<BrandIcon icon={siWhatsapp} size={20} />
				{headerContent.whatsappButtonLabel}
			</Button>

			<Button
				variant="ghost"
				class="size-11"
				onclick={toggleMode}
				aria-label={headerContent.themeToggleAccessibleLabel}
			>
				<SunIcon class="hidden size-5 dark:block" />
				<MoonIcon class="size-5 dark:hidden" />
			</Button>

			<Sheet.Root bind:open={mobileMenuOpen}>
				<Sheet.Trigger>
					{#snippet child({ props })}
						<Button
							{...props}
							variant="ghost"
							class="size-11 md:hidden"
							aria-label={headerContent.menuToggleAccessibleLabel}
						>
							<MenuIcon class="size-5" />
						</Button>
					{/snippet}
				</Sheet.Trigger>

				<Sheet.Content side="right" class="w-full max-w-xs gap-0 px-4 pt-14 pb-6">
					<Sheet.Title class="sr-only">{headerContent.menuTitle}</Sheet.Title>

					<nav class="flex flex-col">
						{#each headerContent.navigationItems as item (item.name)}
							<a
								href={item.href}
								aria-current={isCurrentPage(item.href) ? 'page' : undefined}
								class="flex h-12 items-center border-b text-base {isCurrentPage(item.href)
									? 'font-bold'
									: 'font-normal'}"
								onclick={closeMobileMenu}
							>
								{item.name}
							</a>
						{/each}
					</nav>

					<Button
						href={siteContent.whatsappLink}
						variant="whatsapp"
						class="mt-6 h-12 w-full gap-2 text-base font-bold"
						onclick={closeMobileMenu}
					>
						<BrandIcon icon={siWhatsapp} size={20} />
						{headerContent.whatsappButtonLabel}
					</Button>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</header>
