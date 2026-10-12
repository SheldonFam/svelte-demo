<script>
	import { Button } from '#lib/components/ui/button/index.js';
	import { heroContent } from '#lib/data/hero.js';
</script>

<section
	class="relative isolate flex min-h-140 items-end overflow-hidden bg-neutral-950 text-white md:min-h-[calc(100vh-97px)] md:items-center"
>
	<picture>
		<source media="(min-width: 768px)" srcset={heroContent.photoDesktopUrl} />
		<img
			src={heroContent.photoPhoneUrl}
			alt={heroContent.photoDescription}
			width="1200"
			height="1564"
			fetchpriority="high"
			class="absolute inset-0 -z-20 size-full object-cover object-top md:object-center"
		/>
	</picture>
	<div
		class="absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/65 via-45% to-black/15 md:bg-linear-to-r md:from-black/90 md:via-black/60 md:via-40% md:to-transparent"
	></div>

	<div class="mx-auto w-full max-w-300 px-4 pt-20 pb-10 md:px-6 md:py-24">
		<!-- Fades up on load, off for reduced motion. -->
		<div
			class="flex max-w-2xl animate-in flex-col gap-5 duration-700 ease-out fill-mode-both fade-in slide-in-from-bottom-4 motion-reduce:animate-none md:gap-6"
		>
			<h1
				class="text-[clamp(36px,3.8vw,52px)] leading-[1.08] font-bold tracking-tight text-balance"
			>
				{heroContent.headline}
			</h1>

			<p class="max-w-130 text-lg leading-7 text-white/80 md:text-xl md:leading-7.5">
				{heroContent.description}
			</p>

			<div class="mt-1 flex flex-col gap-3 sm:flex-row md:mt-2">
				<Button
					href={heroContent.browseButtonLink}
					class="h-14 bg-white px-6 text-base font-bold text-neutral-900 hover:bg-white/90 md:px-8"
				>
					{heroContent.browseButtonLabel}
				</Button>
				<Button
					href={heroContent.sellButtonLink}
					variant="outline"
					class="h-14 border-white/40 bg-transparent px-6 text-base font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white"
				>
					{heroContent.sellButtonLabel}
				</Button>
			</div>
		</div>
	</div>
</section>
