<script>
	import { watchDetailContent } from '#lib/data/watch-detail.js';

	let { description } = $props();
</script>

<div class="flex flex-col gap-3">
	<h2 class="text-[26px] leading-8 font-bold tracking-tight">
		{watchDetailContent.descriptionHeading}
	</h2>

	<p class="max-w-130 text-muted-foreground">{description}</p>
</div>
