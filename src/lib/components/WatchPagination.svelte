<script>
	import * as Pagination from '#lib/components/ui/pagination/index.js';

	let { totalCount, perPage, currentPage, rangeText, onPageChange } = $props();
</script>

<div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t pt-6">
	<div class="text-sm text-muted-foreground">{rangeText}</div>

	<Pagination.Root
		count={totalCount}
		{perPage}
		page={currentPage}
		{onPageChange}
		class="mx-0 w-auto"
	>
		{#snippet children({ pages, currentPage: activePage })}
			<Pagination.Content class="gap-2">
				<Pagination.Item>
					<Pagination.Previous class="h-11 cursor-pointer border border-input px-4" />
				</Pagination.Item>

				{#each pages as page (page.key)}
					<Pagination.Item>
						{#if page.type === 'ellipsis'}
							<Pagination.Ellipsis />
						{:else}
							<Pagination.Link
								{page}
								isActive={activePage === page.value}
								class="size-11 cursor-pointer border border-input data-[active=true]:border-foreground! data-[active=true]:bg-foreground! data-[active=true]:text-background!"
							/>
						{/if}
					</Pagination.Item>
				{/each}

				<Pagination.Item>
					<Pagination.Next class="h-11 cursor-pointer border border-input px-4" />
				</Pagination.Item>
			</Pagination.Content>
		{/snippet}
	</Pagination.Root>
</div>
