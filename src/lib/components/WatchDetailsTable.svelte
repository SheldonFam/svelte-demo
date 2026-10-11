<script>
	import { watchDetailContent } from '#lib/data/watch-detail.js';

	let { specifications } = $props();
</script>

<div class="flex flex-col gap-2">
	<h2 class="text-[26px] leading-8 font-bold tracking-tight">
		{watchDetailContent.detailsHeading}
	</h2>

	<dl class="flex flex-col">
		{#each specifications as specification (specification.label)}
			<div class="flex justify-between gap-4 border-b py-3">
				<dt class="text-muted-foreground">{specification.label}</dt>
				<dd class="text-right">{specification.value}</dd>
			</div>
		{/each}
	</dl>
</div>
