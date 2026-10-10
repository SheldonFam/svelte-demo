<script>
	import { page } from '$app/state';
	import { toggleMode } from 'mode-watcher';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import XIcon from '@lucide/svelte/icons/x';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import { siWhatsapp } from 'simple-icons';
	import { Button } from '#lib/components/ui/button/index.js';
	import BrandIcon from '#lib/components/BrandIcon.svelte';
	import { siteContent } from '#lib/data/site.js';
	import { headerContent } from '#lib/data/header.js';

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

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

<header class="border-b bg-background">
	<div
		class="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-6 px-4 py-3 md:px-6"
	>
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
				class="hidden h-11 gap-2 px-4 text-base font-bold md:inline-flex"
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

			<Button
				variant="ghost"
				class="size-11 md:hidden"
				onclick={toggleMobileMenu}
				aria-label={headerContent.menuToggleAccessibleLabel}
				aria-expanded={mobileMenuOpen}
			>
				{#if mobileMenuOpen}
					<XIcon class="size-5" />
				{:else}
					<MenuIcon class="size-5" />
				{/if}
			</Button>
		</div>
	</div>

	{#if mobileMenuOpen}
		<nav class="flex flex-col border-t bg-card px-4 pt-2 pb-4 md:hidden">
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

			<Button
				href={siteContent.whatsappLink}
				class="mt-3 h-12 w-full gap-2 text-base font-bold"
				onclick={closeMobileMenu}
			>
				<BrandIcon icon={siWhatsapp} size={20} />
				{headerContent.whatsappButtonLabel}
			</Button>
		</nav>
	{/if}
</header>
