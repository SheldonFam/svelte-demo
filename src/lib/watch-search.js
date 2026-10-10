// Everything about searching the watch list on the Buy watches page:
// the visitor's choices (the "selection"), which watches match, the page of results,
// the removable filter tags and the count text.
//
// The page keeps one selection and changes it only through the functions below:
//   let selection = defaultSelection;
//   selection = changeSelection(selection, { brand: 'Omega' });
//   const result = searchWatches(watches, selection);
import { watchListContent, budgetOptions, sortOptions } from '#lib/data/watch-list.js';

export const watchesPerPage = 24;

const allBrandsValue = 'all';

// The choices a visitor starts with. Page numbers start at 1.
export const defaultSelection = Object.freeze({
	searchText: '',
	brand: allBrandsValue,
	budget: 'any',
	sort: 'latest',
	showSold: true,
	page: 1
});

// Returns a new selection with some choices changed.
// Changing anything except the page goes back to page 1.
// Example: changeSelection(selection, { budget: 'under-20k' })
export function changeSelection(selection, changes) {
	const isOnlyPageChange = Object.keys(changes).every((key) => key === 'page');
	return { ...selection, page: isOnlyPageChange ? selection.page : 1, ...changes };
}

// Returns a new selection with one filter tag removed (set back to its default).
// tagId is the id from a tag in searchWatches(...).tags.
export function removeTag(selection, tagId) {
	return changeSelection(selection, { [tagId]: defaultSelection[tagId] });
}

// Returns a new selection with every filter tag removed.
// The sort order stays, because it never shows as a tag.
export function clearFilters(selection) {
	return { ...defaultSelection, sort: selection.sort };
}

// Works out everything the page shows for this selection.
// watches is null while the list is still loading.
export function searchWatches(watches, selection) {
	if (watches === null) {
		return {
			watchesOnThisPage: [],
			matchCount: 0,
			brandOptions: [{ value: allBrandsValue, label: watchListContent.allBrandsLabel }],
			tags: getTags(selection),
			// Stays empty while loading, so it does not say "0 watches".
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

// Builds the list for the Brand dropdown, for example "Omega (5)".
// Brands with more watches come first.
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
	const searchWords = selection.searchText.trim().toLowerCase();
	const maximumPrice = findOption(budgetOptions, selection.budget).maximumPrice;

	return watches.filter((watch) => {
		const watchName = (watch.brand + ' ' + watch.model).toLowerCase();

		const matchesSearch = searchWords === '' || watchName.includes(searchWords);
		const matchesBrand = selection.brand === allBrandsValue || watch.brand === selection.brand;
		const matchesBudget = maximumPrice === null || watch.price < maximumPrice;
		const matchesSold = selection.showSold || !watch.isSold;

		return matchesSearch && matchesBrand && matchesBudget && matchesSold;
	});
}

// Puts the watches in the chosen order. Sold watches always go last.
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

// The small removable tags that show which filters are on.
// Each tag id is the name of the choice it removes, for example 'brand'.
function getTags(selection) {
	const tags = [];

	if (selection.brand !== defaultSelection.brand) {
		tags.push({ id: 'brand', label: selection.brand });
	}

	if (selection.budget !== defaultSelection.budget) {
		tags.push({ id: 'budget', label: findOption(budgetOptions, selection.budget).label });
	}

	if (selection.searchText.trim() !== '') {
		tags.push({
			id: 'searchText',
			label: watchListContent.searchTagPrefix + selection.searchText.trim()
		});
	}

	if (selection.showSold !== defaultSelection.showSold) {
		tags.push({ id: 'showSold', label: watchListContent.soldHiddenTagLabel });
	}

	return tags;
}

// The text above the cards, for example "30 watches" or "4 of 30 match".
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

// The text next to the page numbers, for example "Showing 1 to 24 of 30".
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

// Finds the option with this value. Unknown values fall back to the first option.
function findOption(options, value) {
	return options.find((option) => option.value === value) ?? options[0];
}
