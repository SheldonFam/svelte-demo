<script>
	import * as Accordion from '#lib/components/ui/accordion/index.js';
	import { faqContent, faqItems } from '#lib/data/faq.js';
</script>

<section id="faq" class="mx-auto flex w-full max-w-300 flex-col gap-6 px-4 py-12 md:px-6 md:py-24">
	<div class="flex flex-col gap-2">
		<h2
			class="text-[26px] leading-8 font-bold tracking-tight text-balance md:text-4xl md:leading-10.5"
		>
			{faqContent.heading}
		</h2>
		<p class="text-muted-foreground">{faqContent.description}</p>
	</div>

	<Accordion.Root type="single" value={faqItems[0].id} class="border-t">
		{#each faqItems as item (item.id)}
			<Accordion.Item value={item.id} class="border-b">
				<Accordion.Trigger
					class="min-h-14 cursor-pointer items-center gap-4 rounded-none py-4 text-base font-semibold hover:no-underline hover:opacity-75 **:data-[slot=accordion-trigger-icon]:size-5"
				>
					{item.question}
				</Accordion.Trigger>
				<Accordion.Content class="max-w-220 pr-8 pb-5 text-base leading-6 text-muted-foreground">
					{item.answer}
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</section>
