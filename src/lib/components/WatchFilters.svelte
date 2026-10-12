<script>
	import SearchIcon from '@lucide/svelte/icons/search';
	import XIcon from '@lucide/svelte/icons/x';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Input } from '#lib/components/ui/input/index.js';
	import { Label } from '#lib/components/ui/label/index.js';
	import { Switch } from '#lib/components/ui/switch/index.js';
	import * as Select from '#lib/components/ui/select/index.js';
	import { watchListContent, pricePresets, sortOptions } from '#lib/data/watch-list.js';
	import { isPricePresetChosen } from '#lib/watch-search.js';

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

	function readPrice(event) {
		const price = Number.parseInt(event.target.value, 10);
		return Number.isNaN(price) || price < 0 ? null : price;
	}

	function handlePriceMinChange(event) {
		onChange({ priceMin: readPrice(event) });
	}

	function handlePriceMaxChange(event) {
		onChange({ priceMax: readPrice(event) });
	}

	function choosePreset(preset) {
		onChange({ priceMin: preset.priceMin, priceMax: preset.priceMax });
	}

	const selectTriggerClass = 'w-full px-4 text-base data-[size=default]:h-12';
	const selectItemClass = 'h-11 pl-3 text-base';
	const priceInputClass =
		'h-12 bg-card px-4 text-base tabular-nums [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none';
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

		<div class="col-span-2 flex min-w-0 flex-col gap-2 lg:w-72 lg:flex-none">
			<Label for="watch-price-min" class="font-semibold">{watchListContent.priceLabel}</Label>

			<div class="flex items-center gap-2">
				<Input
					id="watch-price-min"
					type="number"
					inputmode="numeric"
					min="0"
					step="500"
					value={selection.priceMin ?? ''}
					onchange={handlePriceMinChange}
					placeholder={watchListContent.priceMinPlaceholder}
					aria-label={watchListContent.priceMinAccessibleLabel}
					class={priceInputClass}
				/>
				<span class="text-sm text-muted-foreground">{watchListContent.priceToJoiner}</span>
				<Input
					id="watch-price-max"
					type="number"
					inputmode="numeric"
					min="0"
					step="500"
					value={selection.priceMax ?? ''}
					onchange={handlePriceMaxChange}
					placeholder={watchListContent.priceMaxPlaceholder}
					aria-label={watchListContent.priceMaxAccessibleLabel}
					class={priceInputClass}
				/>
			</div>
		</div>

		<div class="col-span-2 flex min-w-0 flex-col gap-2 lg:w-52 lg:flex-none">
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

	<div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
		<div
			class="flex flex-wrap gap-2"
			role="group"
			aria-label={watchListContent.pricePresetsAccessibleLabel}
		>
			{#each pricePresets as preset (preset.label)}
				<Button
					variant="outline"
					size="sm"
					aria-pressed={isPricePresetChosen(selection, preset)}
					onclick={() => choosePreset(preset)}
					class="h-9 cursor-pointer border-input bg-card px-3.5 text-sm font-normal hover:bg-card aria-pressed:border-foreground aria-pressed:font-semibold dark:bg-card dark:hover:bg-card"
				>
					{preset.label}
				</Button>
			{/each}
		</div>

		<div class="flex items-center gap-3">
			<Switch
				id="watch-in-stock"
				checked={selection.inStockOnly}
				onCheckedChange={(inStockOnly) => onChange({ inStockOnly })}
				class="cursor-pointer"
			/>
			<Label for="watch-in-stock" class="cursor-pointer text-sm font-normal">
				{watchListContent.inStockOnlyLabel}
			</Label>
		</div>
	</div>
</div>
