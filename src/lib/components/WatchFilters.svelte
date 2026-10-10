<script>
	import SearchIcon from '@lucide/svelte/icons/search';
	import XIcon from '@lucide/svelte/icons/x';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Input } from '#lib/components/ui/input/index.js';
	import { Label } from '#lib/components/ui/label/index.js';
	import { Checkbox } from '#lib/components/ui/checkbox/index.js';
	import * as Select from '#lib/components/ui/select/index.js';
	import { watchListContent, budgetOptions, sortOptions } from '#lib/data/watch-list.js';

	// The page owns the choices. This component shows them and reports every change
	// as an object of changed choices, for example onChange({ brand: 'Omega' }).
	// selection comes from watch-search.js.
	let { selection, brandOptions, onChange } = $props();

	function getOptionLabel(options, value) {
		const chosenOption = options.find((option) => option.value === value);
		return chosenOption ? chosenOption.label : '';
	}

	function handleSearchInput(event) {
		onChange({ searchText: event.target.value });
	}

	function clearSearch() {
		onChange({ searchText: '' });
	}

	const selectTriggerClass = 'w-full px-4 text-base data-[size=default]:h-12';
	const selectItemClass = 'h-11 pl-3 text-base';
</script>

<div class="flex flex-col gap-4">
	<div class="grid grid-cols-2 gap-4 lg:flex">
		<div class="col-span-2 flex min-w-0 flex-col gap-2 lg:flex-1">
			<Label for="watch-search" class="font-semibold">{watchListContent.searchLabel}</Label>

			<div class="relative">
				<SearchIcon
					class="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground"
				/>
				<Input
					id="watch-search"
					type="text"
					value={selection.searchText}
					oninput={handleSearchInput}
					placeholder={watchListContent.searchPlaceholder}
					class="h-12 bg-card pr-12 pl-12 text-base"
				/>
				{#if selection.searchText !== ''}
					<Button
						variant="ghost"
						size="icon"
						onclick={clearSearch}
						aria-label={watchListContent.clearSearchAccessibleLabel}
						class="absolute top-1 right-1 size-10 cursor-pointer"
					>
						<XIcon class="size-4.5" />
					</Button>
				{/if}
			</div>
		</div>

		<div class="col-span-2 flex min-w-0 flex-col gap-2 lg:w-52 lg:flex-none">
			<Label for="watch-brand" class="font-semibold">{watchListContent.brandLabel}</Label>

			<Select.Root
				type="single"
				value={selection.brand}
				onValueChange={(brand) => onChange({ brand })}
			>
				<Select.Trigger id="watch-brand" class="bg-card {selectTriggerClass}">
					{getOptionLabel(brandOptions, selection.brand)}
				</Select.Trigger>
				<Select.Content>
					{#each brandOptions as option (option.value)}
						<Select.Item value={option.value} label={option.label} class={selectItemClass} />
					{/each}
				</Select.Content>
			</Select.Root>
		</div>

		<div class="flex min-w-0 flex-col gap-2 lg:w-44 lg:flex-none">
			<Label for="watch-budget" class="font-semibold">{watchListContent.budgetLabel}</Label>

			<Select.Root
				type="single"
				value={selection.budget}
				onValueChange={(budget) => onChange({ budget })}
			>
				<Select.Trigger id="watch-budget" class="bg-card {selectTriggerClass}">
					{getOptionLabel(budgetOptions, selection.budget)}
				</Select.Trigger>
				<Select.Content>
					{#each budgetOptions as option (option.value)}
						<Select.Item value={option.value} label={option.label} class={selectItemClass} />
					{/each}
				</Select.Content>
			</Select.Root>
		</div>

		<div class="flex min-w-0 flex-col gap-2 lg:w-52 lg:flex-none">
			<Label for="watch-sort" class="font-semibold">{watchListContent.sortLabel}</Label>

			<Select.Root
				type="single"
				value={selection.sort}
				onValueChange={(sort) => onChange({ sort })}
			>
				<Select.Trigger id="watch-sort" class="bg-card {selectTriggerClass}">
					<span class="truncate">{getOptionLabel(sortOptions, selection.sort)}</span>
				</Select.Trigger>
				<Select.Content>
					{#each sortOptions as option (option.value)}
						<Select.Item value={option.value} label={option.label} class={selectItemClass} />
					{/each}
				</Select.Content>
			</Select.Root>
		</div>
	</div>

	<div class="flex items-center gap-2">
		<Checkbox
			id="watch-show-sold"
			checked={selection.showSold}
			onCheckedChange={(showSold) => onChange({ showSold })}
			class="size-5 cursor-pointer"
		/>
		<Label for="watch-show-sold" class="cursor-pointer text-sm font-normal">
			{watchListContent.showSoldLabel}
		</Label>
	</div>
</div>
