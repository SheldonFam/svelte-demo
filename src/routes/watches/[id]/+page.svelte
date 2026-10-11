<script>
	import WatchBreadcrumb from '#lib/components/WatchBreadcrumb.svelte';
	import WatchGallery from '#lib/components/WatchGallery.svelte';
	import WatchSummary from '#lib/components/WatchSummary.svelte';
	import WatchEnquiryButtons from '#lib/components/WatchEnquiryButtons.svelte';
	import WatchTrustPoints from '#lib/components/WatchTrustPoints.svelte';
	import WatchDetailsTable from '#lib/components/WatchDetailsTable.svelte';
	import WatchDescription from '#lib/components/WatchDescription.svelte';
	import SimilarWatches from '#lib/components/SimilarWatches.svelte';
	import MobileEnquiryBar from '#lib/components/MobileEnquiryBar.svelte';
	import { siteContent } from '#lib/data/site.js';
	import { watchDetailContent } from '#lib/data/watch-detail.js';

	let { data } = $props();

	let watchPage = $derived(data.watchPage);
	let watch = $derived(watchPage.watch);
	let watchName = $derived(watch.brand + ' ' + watchPage.fullName + ' ' + watch.reference);
</script>

<svelte:head>
	<title>{watchName} | {siteContent.siteName}</title>
	<meta name="description" content={watchName + ' ' + watchDetailContent.pageDescriptionEnding} />
</svelte:head>

<div class="mx-auto w-full max-w-300 px-4 pt-3 md:px-6">
	<WatchBreadcrumb brand={watch.brand} shortName={watchPage.shortName} />
</div>

<section
	class="mx-auto grid w-full max-w-300 gap-8 px-4 pt-3 pb-12 md:px-6 md:pb-24 lg:grid-cols-[1.25fr_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-12"
>
	{#key watch.id}
		<WatchGallery photos={watchPage.photos} {watchName} isSold={watch.isSold} />
	{/key}

	<div class="flex flex-col gap-6 lg:col-start-2 lg:row-span-2 lg:row-start-1">
		<WatchSummary {watch} fullName={watchPage.fullName} tags={watchPage.tags} />
		<WatchEnquiryButtons whatsappLink={watchPage.whatsappLink} isSold={watch.isSold} />
		<WatchTrustPoints />
		<WatchDetailsTable specifications={watchPage.specifications} />
	</div>

	{#if watchPage.description !== ''}
		<WatchDescription description={watchPage.description} />
	{/if}
</section>

{#if watchPage.similarWatches.length > 0}
	<div class="border-t">
		<SimilarWatches watches={watchPage.similarWatches} />
	</div>
{/if}

<MobileEnquiryBar {watch} shortName={watchPage.shortName} whatsappLink={watchPage.whatsappLink} />
