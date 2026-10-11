<script>
	import * as Carousel from '#lib/components/ui/carousel/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { watchDetailContent } from '#lib/data/watch-detail.js';

	let { photos, watchName, isSold } = $props();

	let carouselControls = $state(undefined);
	let currentPhotoIndex = $state(0);

	function rememberCarouselControls(controls) {
		carouselControls = controls;

		carouselControls.on('select', () => {
			currentPhotoIndex = carouselControls.selectedScrollSnap();
		});
	}

	function showPhoto(photoIndex) {
		carouselControls.scrollTo(photoIndex);
	}
</script>

<div class="flex flex-col gap-3">
	<Carousel.Root
		setApi={rememberCarouselControls}
		aria-label={watchDetailContent.galleryAccessibleLabel}
		class="overflow-hidden rounded-md bg-muted"
	>
		<Carousel.Content class="ms-0">
			{#each photos as photo, photoIndex (photo)}
				<Carousel.Item class="ps-0">
					<img
						src={photo}
						alt={watchName + ', photo ' + (photoIndex + 1)}
						width="640"
						height="640"
						class="aspect-square w-full object-cover {isSold ? 'opacity-45' : ''}"
					/>
				</Carousel.Item>
			{/each}
		</Carousel.Content>

		{#if photos.length > 1}
			<span
				class="absolute right-4 bottom-4 rounded-full bg-background px-3 py-1 text-sm tabular-nums"
			>
				{currentPhotoIndex + 1}
				{watchDetailContent.photoCounterJoiner}
				{photos.length}
			</span>
		{/if}
	</Carousel.Root>

	{#if photos.length > 1}
		<div class="grid grid-cols-6 gap-2">
			{#each photos as photo, photoIndex (photo)}
				<Button
					variant="ghost"
					aria-label={watchDetailContent.showPhotoAccessibleLabelPrefix + (photoIndex + 1)}
					aria-pressed={photoIndex === currentPhotoIndex}
					onclick={() => showPhoto(photoIndex)}
					class="aspect-square h-auto w-full overflow-hidden rounded-md border-2 p-0 {photoIndex ===
					currentPhotoIndex
						? 'border-primary'
						: 'border-transparent'}"
				>
					<img src={photo} alt="" width="160" height="160" class="size-full object-cover" />
				</Button>
			{/each}
		</div>
	{/if}
</div>
