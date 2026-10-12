<script>
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import WatchCard from '#lib/components/WatchCard.svelte';

	let { content, watches, paddingClass = 'py-12 md:py-24' } = $props();
</script>

<section class="mx-auto flex w-full max-w-300 flex-col gap-6 px-4 md:px-6 {paddingClass}">
	<div class="flex flex-wrap items-end justify-between gap-3">
		<div class="flex flex-col gap-2">
			<h2 class="text-[26px] leading-8 font-bold tracking-tight md:text-4xl md:leading-10.5">
				{content.heading}
			</h2>
			<p class="text-muted-foreground">{content.description}</p>
		</div>

		<a
			href={content.seeAllLink}
			class="flex h-11 items-center gap-2 font-semibold hover:opacity-75"
		>
			{content.seeAllLinkLabel}
			<ArrowRightIcon class="size-4.5" />
		</a>
	</div>

	<ul
		class="reveal-group -mx-4 grid snap-x snap-mandatory scroll-px-4 auto-cols-[72%] grid-flow-col gap-3 overflow-x-auto px-4 pb-2 sm:auto-cols-[46%] md:mx-0 md:grid-flow-row md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
	>
		{#each watches as watch, index (watch.id)}
			<li class="reveal flex snap-start" style:--reveal-index={index}>
				<WatchCard {watch} tagLabel={content.tagLabel} />
			</li>
		{/each}
	</ul>
</section>
