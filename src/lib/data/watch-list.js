export const watchListContent = {
	heading: 'Available watches',
	description: 'Ready stock in KL. Click a watch for photos and details.',
	pageDescription:
		'Browse preowned luxury watches in ready stock in KL. Filter by brand and price, then view any watch in person within 24 hours.',
	loadingAccessibleLabel: 'Loading watches',
	searchLabel: 'Search',
	searchPlaceholder: 'e.g. Omega Speedmaster or 326933',
	clearSearchAccessibleLabel: 'Clear search',
	brandLabel: 'Brand',
	allBrandsLabel: 'All brands',
	priceLabel: 'Price (RM)',
	priceMinPlaceholder: 'Min',
	priceMaxPlaceholder: 'Max',
	priceMinAccessibleLabel: 'Minimum price in ringgit',
	priceMaxAccessibleLabel: 'Maximum price in ringgit',
	priceToJoiner: 'to',
	priceFromTagPrefix: 'From ',
	priceUpToTagPrefix: 'Up to ',
	pricePresetsAccessibleLabel: 'Quick price picks',
	sortLabel: 'Sort by',
	inStockOnlyLabel: 'In stock only',
	inStockOnlyTagLabel: 'In stock only',
	allWatchesCountLabel: 'watches',
	matchCountJoiner: 'of',
	matchCountLabel: 'match',
	clearAllLabel: 'Clear all',
	searchTagPrefix: 'Search: ',
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

export const pricePresets = [
	{ label: 'Under 10k', priceMin: null, priceMax: 10000 },
	{ label: '10k to 30k', priceMin: 10000, priceMax: 30000 },
	{ label: '30k to 60k', priceMin: 30000, priceMax: 60000 },
	{ label: '60k and up', priceMin: 60000, priceMax: null }
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
