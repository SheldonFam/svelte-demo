<script>
	import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';
	import CalendarClockIcon from '@lucide/svelte/icons/calendar-clock';
	import HandCoinsIcon from '@lucide/svelte/icons/hand-coins';
	import { trustContent, trustReasons } from '#lib/data/trust.js';

	const reasonIcons = {
		authenticated: ShieldCheckIcon,
		viewing: CalendarClockIcon,
		'trade-in': HandCoinsIcon
	};
</script>

<section id="trust" class="scroll-mt-6">
	<div
		class="mx-auto flex w-full max-w-300 flex-col gap-8 px-4 py-12 md:px-6 md:py-24 lg:flex-row lg:gap-16"
	>
		<div class="flex flex-col gap-3 lg:w-[26rem] lg:flex-none">
			<h2
				class="text-[26px] leading-8 font-bold tracking-tight text-balance md:text-4xl md:leading-10.5"
			>
				{trustContent.heading}
			</h2>

			<p class="text-muted-foreground">{trustContent.description}</p>

			<a
				href={trustContent.faqLink}
				class="flex h-11 items-center self-start font-semibold underline underline-offset-4 hover:opacity-75"
			>
				{trustContent.faqLinkLabel}
			</a>
		</div>

		<ol class="flex min-w-0 flex-1 flex-col">
			{#each trustReasons as reason (reason.id)}
				{@const ReasonIcon = reasonIcons[reason.id]}
				<li class="flex gap-4 border-b py-6 first:pt-0 last:border-b-0 last:pb-0">
					<div
						class="flex size-10 flex-none items-center justify-center rounded-md bg-secondary text-foreground"
					>
						<ReasonIcon class="size-5" strokeWidth={1.75} />
					</div>

					<div class="flex flex-col gap-1">
						<div class="text-xl font-semibold">{reason.title}</div>
						<div class="max-w-130 text-muted-foreground">{reason.description}</div>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>
