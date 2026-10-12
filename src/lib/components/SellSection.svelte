<script>
	import { siWhatsapp } from 'simple-icons';
	import { Button } from '#lib/components/ui/button/index.js';
	import BrandIcon from '#lib/components/BrandIcon.svelte';
	import { siteContent } from '#lib/data/site.js';
	import { sellSectionContent } from '#lib/data/sell.js';
</script>

<section id="sell" class="mx-auto w-full max-w-300 scroll-mt-6 px-4 md:scroll-mt-20 md:px-6">
	<div
		class="grid gap-8 rounded-md bg-secondary p-6 md:p-10 lg:grid-cols-[5fr_7fr] lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-6 lg:p-12"
	>
		<div class="flex flex-col gap-4 lg:col-start-1 lg:row-start-1">
			<h2 class="text-[26px] leading-8 font-bold tracking-tight md:text-4xl md:leading-10.5">
				{sellSectionContent.heading}
			</h2>

			<p class="text-muted-foreground md:text-lg">{sellSectionContent.description}</p>
		</div>

		<!-- The order is the point here, so the steps are numbered. -->
		<ol class="flex flex-col gap-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
			{#each sellSectionContent.steps as step, index (step.id)}
				<li class="flex gap-4">
					<div class="w-7 flex-none pt-0.5 text-sm font-bold tabular-nums">{index + 1}</div>
					<div class="flex flex-col gap-1">
						<div class="font-bold">{step.title}</div>
						<div class="text-muted-foreground">{step.description}</div>
					</div>
				</li>
			{/each}
		</ol>

		<Button
			href={siteContent.whatsappLink}
			class="h-14 w-full gap-3 px-8 text-base font-bold sm:w-auto sm:justify-self-start lg:col-start-1 lg:row-start-2"
		>
			<BrandIcon icon={siWhatsapp} size={20} />
			{sellSectionContent.whatsappButtonLabel}
		</Button>
	</div>
</section>
