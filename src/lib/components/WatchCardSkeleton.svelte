<script>
	import { Skeleton } from '#lib/components/ui/skeleton/index.js';
</script>

<div class="flex flex-col overflow-hidden rounded-md border bg-card">
	<Skeleton class="aspect-square rounded-none" />

	<div class="flex flex-col gap-2 p-3 md:p-4">
		<Skeleton class="h-4 w-16" />
		<Skeleton class="h-10 w-full md:h-11" />
		<Skeleton class="h-6 w-24 md:h-7" />
		<Skeleton class="h-4 w-28 md:h-5" />
		<Skeleton class="h-4 w-20 md:h-5" />
	</div>
</div>
