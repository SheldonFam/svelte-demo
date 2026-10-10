<script>
	import { recentlySoldContent, soldWatches } from '#lib/data/sold.js';
	import SellBox from '#lib/components/SellBox.svelte';
</script>

<section
	class="mx-auto flex w-full max-w-300 flex-col gap-12 px-4 py-12 md:px-6 md:py-24 lg:flex-row lg:items-stretch"
>
	<div class="flex min-w-0 flex-1 flex-col gap-6">
		<h2 class="text-[26px] leading-8 font-bold tracking-tight md:text-4xl md:leading-10.5">
			{recentlySoldContent.heading}
		</h2>

		<!-- Phones: a row you swipe sideways. Large screens: four across.
		     The photos are 224px, so tiles stay near that size to keep them sharp. -->
		<ul
			class="reveal-group -mx-4 grid snap-x snap-mandatory scroll-px-4 auto-cols-[44%] grid-flow-col gap-3 overflow-x-auto px-4 pb-2 sm:auto-cols-[30%] md:-mx-6 md:scroll-px-6 md:px-6 lg:mx-0 lg:grid-flow-row lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0"
		>
			{#each soldWatches as watch, index (watch.id)}
				<li class="reveal flex snap-start flex-col gap-3" style:--reveal-index={index}>
					<img
						src={watch.photo}
						alt={watch.model}
						width="224"
						height="224"
						loading="lazy"
						class="aspect-square w-full rounded-md bg-muted object-cover"
					/>

					<div class="flex flex-col gap-1">
						<div class="text-sm leading-5">{watch.model}</div>
						<div class="font-bold tabular-nums">{watch.price}</div>
						<div class="text-sm text-muted-foreground">{watch.soldTime}</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>

	<div class="w-full lg:flex lg:w-80 lg:flex-none">
		<SellBox />
	</div>
</section>
