import { watchListContent, sortOptions } from '#lib/data/watch-list.js';
import { formatRinggit } from '#lib/format.js';

export const watchesPerPage = 24;

const allBrandsValue = 'all';

export const defaultSelection = Object.freeze({
	searchText: '',
	brand: allBrandsValue,
	priceMin: null,
	priceMax: null,
	inStockOnly: false,
	sort: 'latest',
	page: 1
});

const tagResets = {
	brand: ['brand'],
	price: ['priceMin', 'priceMax'],
	searchText: ['searchText'],
	inStockOnly: ['inStockOnly']
};

export function changeSelection(selection, changes) {
	const isOnlyPageChange = Object.keys(changes).every((key) => key === 'page');
	return { ...selection, page: isOnlyPageChange ? selection.page : 1, ...changes };
}

export function removeTag(selection, tagId) {
	const changes = {};

	for (const field of tagResets[tagId]) {
		changes[field] = defaultSelection[field];
	}

	return changeSelection(selection, changes);
}

export function clearFilters(selection) {
	return { ...defaultSelection, sort: selection.sort };
}

export function isPricePresetChosen(selection, preset) {
	return selection.priceMin === preset.priceMin && selection.priceMax === preset.priceMax;
}

export function searchWatches(watches, selection) {
	if (watches === null) {
		return {
			watchesOnThisPage: [],
			matchCount: 0,
			brandOptions: [{ value: allBrandsValue, label: watchListContent.allBrandsLabel }],
			tags: getTags(selection),
			countText: '',
			rangeText: ''
		};
	}

	const matchingWatches = sortWatches(filterWatches(watches, selection), selection.sort);

	return {
		watchesOnThisPage: getPageOfWatches(matchingWatches, selection.page),
		matchCount: matchingWatches.length,
		brandOptions: getBrandOptions(watches),
		tags: getTags(selection),
		countText: getCountText(matchingWatches.length, watches.length),
		rangeText: getRangeText(matchingWatches.length, selection.page)
	};
}

function getBrandOptions(watches) {
	const countByBrand = {};

	for (const watch of watches) {
		if (countByBrand[watch.brand] === undefined) {
			countByBrand[watch.brand] = 0;
		}
		countByBrand[watch.brand] = countByBrand[watch.brand] + 1;
	}

	const brandNames = Object.keys(countByBrand);
	brandNames.sort(
		(firstBrand, secondBrand) => countByBrand[secondBrand] - countByBrand[firstBrand]
	);

	const brandOptions = [
		{
			value: allBrandsValue,
			label: watchListContent.allBrandsLabel + ' (' + watches.length + ')'
		}
	];

	for (const brandName of brandNames) {
		brandOptions.push({
			value: brandName,
			label: brandName + ' (' + countByBrand[brandName] + ')'
		});
	}

	return brandOptions;
}

function filterWatches(watches, selection) {
	const searchWords = getSearchWords(selection.searchText);

	return watches.filter((watch) => {
		const searchableText = normaliseForSearch(watch.brand + watch.model + watch.reference);

		const matchesSearch = searchWords.every((word) => searchableText.includes(word));
		const matchesBrand = selection.brand === allBrandsValue || watch.brand === selection.brand;
		const matchesPrice =
			(selection.priceMin === null || watch.price >= selection.priceMin) &&
			(selection.priceMax === null || watch.price <= selection.priceMax);
		const matchesStock = !selection.inStockOnly || !watch.isSold;

		return matchesSearch && matchesBrand && matchesPrice && matchesStock;
	});
}

function getSearchWords(searchText) {
	return searchText
		.split(' ')
		.map(normaliseForSearch)
		.filter((word) => word !== '');
}

function normaliseForSearch(text) {
	return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function sortWatches(watches, sort) {
	const sortedWatches = watches.slice();
	const compareWatches = findOption(sortOptions, sort).compareWatches;

	if (compareWatches !== null) {
		sortedWatches.sort(compareWatches);
	}

	const availableWatches = sortedWatches.filter((watch) => !watch.isSold);
	const soldWatches = sortedWatches.filter((watch) => watch.isSold);

	return availableWatches.concat(soldWatches);
}

function getPageOfWatches(watches, page) {
	const firstIndex = (page - 1) * watchesPerPage;
	return watches.slice(firstIndex, firstIndex + watchesPerPage);
}

function getTags(selection) {
	const tags = [];

	if (selection.brand !== defaultSelection.brand) {
		tags.push({ id: 'brand', label: selection.brand });
	}

	if (selection.priceMin !== null || selection.priceMax !== null) {
		tags.push({ id: 'price', label: getPriceTagLabel(selection) });
	}

	if (selection.searchText.trim() !== '') {
		tags.push({
			id: 'searchText',
			label: watchListContent.searchTagPrefix + selection.searchText.trim()
		});
	}

	if (selection.inStockOnly) {
		tags.push({ id: 'inStockOnly', label: watchListContent.inStockOnlyTagLabel });
	}

	return tags;
}

function getPriceTagLabel(selection) {
	if (selection.priceMax === null) {
		return watchListContent.priceFromTagPrefix + formatRinggit(selection.priceMin);
	}

	if (selection.priceMin === null) {
		return watchListContent.priceUpToTagPrefix + formatRinggit(selection.priceMax);
	}

	return (
		formatRinggit(selection.priceMin) +
		' ' +
		watchListContent.priceToJoiner +
		' ' +
		formatRinggit(selection.priceMax)
	);
}

function getCountText(matchCount, totalCount) {
	if (matchCount === totalCount) {
		return totalCount + ' ' + watchListContent.allWatchesCountLabel;
	}

	return (
		matchCount +
		' ' +
		watchListContent.matchCountJoiner +
		' ' +
		totalCount +
		' ' +
		watchListContent.matchCountLabel
	);
}

function getRangeText(matchCount, page) {
	const firstNumber = (page - 1) * watchesPerPage + 1;
	const lastNumber = Math.min(matchCount, page * watchesPerPage);

	return [
		watchListContent.rangeShowingLabel,
		firstNumber,
		watchListContent.rangeToJoiner,
		lastNumber,
		watchListContent.rangeOfJoiner,
		matchCount
	].join(' ');
}

function findOption(options, value) {
	return options.find((option) => option.value === value) ?? options[0];
}
