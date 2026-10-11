export const watchListContent = {
	heading: 'Available watches',
	description: 'Ready stock in KL. Click a watch for photos and details.',
	pageDescription:
		'Browse preowned luxury watches in ready stock in KL. Filter by brand and budget, then view any watch in person within 24 hours.',

	loadingAccessibleLabel: 'Loading watches',

	searchLabel: 'Search',
	searchPlaceholder: 'e.g. Omega Speedmaster or 326933',
	clearSearchAccessibleLabel: 'Clear search',
	brandLabel: 'Brand',
	allBrandsLabel: 'All brands',
	budgetLabel: 'Budget',
	sortLabel: 'Sort by',
	showSoldLabel: 'Show sold watches',

	allWatchesCountLabel: 'watches',
	matchCountJoiner: 'of',
	matchCountLabel: 'match',
	clearAllLabel: 'Clear all',
	searchTagPrefix: 'Search: ',
	soldHiddenTagLabel: 'Sold hidden',
	removeFilterAccessibleLabelPrefix: 'Remove filter: ',

	rangeShowingLabel: 'Showing',
	rangeToJoiner: 'to',
	rangeOfJoiner: 'of',

	noMatchHeading: 'No watches match these filters.',
	noMatchDescription:
		'Remove a filter above, or tell us what you are looking for and we will check our stock.',
	clearAllFiltersButtonLabel: 'Clear all filters',

	specificModelHeading: 'Looking for a specific model?',
	specificModelDescription: 'Tell us the watch you want and we will check our stock for you.',
	askOnWhatsappButtonLabel: 'WhatsApp us'
};

export const budgetOptions = [
	{ value: 'any', label: 'Any budget', maximumPrice: null },
	{ value: 'under-10k', label: 'Under RM 10k', maximumPrice: 10000 },
	{ value: 'under-20k', label: 'Under RM 20k', maximumPrice: 20000 },
	{ value: 'under-50k', label: 'Under RM 50k', maximumPrice: 50000 }
];

export const sortOptions = [
	{ value: 'latest', label: 'Latest arrivals', compareWatches: null },
	{
		value: 'price-low',
		label: 'Price: low to high',
		compareWatches: (firstWatch, secondWatch) => firstWatch.price - secondWatch.price
	},
	{
		value: 'price-high',
		label: 'Price: high to low',
		compareWatches: (firstWatch, secondWatch) => secondWatch.price - firstWatch.price
	}
];
