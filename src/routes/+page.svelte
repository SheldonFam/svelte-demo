<script>
	import Hero from '#lib/components/Hero.svelte';
	import StatsSection from '#lib/components/StatsSection.svelte';
	import HotDeals from '#lib/components/HotDeals.svelte';
	import TrustSection from '#lib/components/TrustSection.svelte';
	import RecentlySold from '#lib/components/RecentlySold.svelte';
	import Faq from '#lib/components/Faq.svelte';
	import { siteContent } from '#lib/data/site.js';
</script>

<svelte:head>
	<title>{siteContent.homePageTitle}</title>
	<meta name="description" content={siteContent.homePageDescription} />
</svelte:head>

<Hero />
<StatsSection />
<HotDeals />
<TrustSection />
<RecentlySold />
<Faq />
