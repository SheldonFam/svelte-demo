<script>
	import * as Breadcrumb from '#lib/components/ui/breadcrumb/index.js';
	import { watchDetailContent } from '#lib/data/watch-detail.js';

	let { brand, shortName } = $props();
</script>

<Breadcrumb.Root>
	<Breadcrumb.List class="text-sm">
		<Breadcrumb.Item>
			<Breadcrumb.Link
				href={watchDetailContent.breadcrumbAllWatchesLink}
				class="flex h-11 items-center"
			>
				{watchDetailContent.breadcrumbAllWatchesLabel}
			</Breadcrumb.Link>
		</Breadcrumb.Item>

		<Breadcrumb.Separator class="md:block" />

		<Breadcrumb.Item class="md:inline-flex">
			{brand}
			{shortName}
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>
