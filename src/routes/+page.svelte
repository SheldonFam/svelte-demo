<script>
	import Hero from '#lib/components/Hero.svelte';
	import StatsSection from '#lib/components/StatsSection.svelte';
	import WatchCollection from '#lib/components/WatchCollection.svelte';
	import TrustSection from '#lib/components/TrustSection.svelte';
	import SellSection from '#lib/components/SellSection.svelte';
	import RecentlySold from '#lib/components/RecentlySold.svelte';
	import Faq from '#lib/components/Faq.svelte';
	import { siteContent } from '#lib/data/site.js';
	import { hotDealsContent } from '#lib/data/hot-deals.js';
	import { rarePiecesContent } from '#lib/data/rare-pieces.js';
	import { watches } from '#lib/data/watches.js';

	const hotDealWatches = watches.filter((watch) => watch.isHotDeal && !watch.isSold);
	const rarePieceWatches = watches.filter((watch) => watch.isRarePiece && !watch.isSold);
</script>

<svelte:head>
	<title>{siteContent.homePageTitle}</title>
	<meta name="description" content={siteContent.homePageDescription} />
</svelte:head>

<Hero />
<StatsSection />
<WatchCollection content={hotDealsContent} watches={hotDealWatches} />
<WatchCollection
	content={rarePiecesContent}
	watches={rarePieceWatches}
	paddingClass="pb-12 md:pb-24"
/>
<TrustSection />
<SellSection />
<RecentlySold />
<Faq />
