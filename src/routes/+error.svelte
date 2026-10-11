<script>
	import { page } from '$app/state';
	import { Button } from '#lib/components/ui/button/index.js';
	import { siteContent } from '#lib/data/site.js';
	import { errorContent } from '#lib/data/error.js';
</script>

<svelte:head>
	<title>{errorContent.title} | {siteContent.siteName}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section
	class="mx-auto flex w-full max-w-300 flex-1 flex-col items-center justify-center px-4 py-16 text-center md:px-6"
>
	<div class="text-sm font-semibold text-muted-foreground tabular-nums">{page.status}</div>

	<h1
		class="mt-3 text-[26px] leading-8 font-bold tracking-tight text-balance md:text-4xl md:leading-10.5"
	>
		{errorContent.heading}
	</h1>

	<p class="mt-3 max-w-130 text-balance text-muted-foreground">{errorContent.description}</p>

	<Button href={errorContent.homeLink} class="mt-8 h-12 px-6 text-base font-bold">
		{errorContent.homeButtonLabel}
	</Button>
</section>
