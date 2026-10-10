<script>
	import { Button } from '#lib/components/ui/button/index.js';
	import { heroContent } from '#lib/data/hero.js';
</script>

<section
	class="mx-auto grid w-full max-w-300 gap-8 px-4 py-12 md:grid-cols-[7fr_5fr] md:items-center md:gap-12 md:px-6 md:py-24"
>
	<!-- Left side: text and buttons, a little wider than the photo so the headline fits on two lines.
	     Fades up on load, off for reduced motion. -->
	<div
		class="flex animate-in flex-col gap-6 duration-700 ease-out fill-mode-both fade-in slide-in-from-bottom-4 motion-reduce:animate-none"
	>
		<p class="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
			{heroContent.eyebrowText}
		</p>

		<h1 class="text-[clamp(36px,3.8vw,48px)] leading-[1.08] font-bold tracking-tight text-balance">
			{heroContent.headline}
		</h1>

		<p class="max-w-130 text-xl leading-7.5 text-muted-foreground">
			{heroContent.description}
		</p>

		<div class="mt-2 flex flex-col gap-3 sm:flex-row">
			<Button href={heroContent.browseButtonLink} class="h-14 px-8 text-base font-bold">
				{heroContent.browseButtonLabel}
			</Button>
			<Button
				href={heroContent.sellButtonLink}
				variant="outline"
				class="h-14 px-6 text-base font-semibold"
			>
				{heroContent.sellButtonLabel}
			</Button>
		</div>
	</div>

	<!-- Right side: photo. On phones it sits under the buttons as a shorter crop. -->
	<div
		class="animate-in delay-150 duration-700 ease-out fill-mode-both fade-in motion-reduce:animate-none"
	>
		<img
			src={heroContent.photoUrl}
			alt={heroContent.photoDescription}
			width="1200"
			height="800"
			fetchpriority="high"
			class="aspect-[4/3] w-full rounded-md object-cover md:aspect-auto md:h-120"
		/>
	</div>
</section>
