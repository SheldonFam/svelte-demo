export function getRecentlySoldWatches(watches, count) {
	return watches
		.filter((watch) => watch.isSold && watch.soldOn !== null)
		.sort((firstWatch, secondWatch) => new Date(secondWatch.soldOn) - new Date(firstWatch.soldOn))
		.slice(0, count);
}

export function getLastSoldWatch(watches) {
	return getRecentlySoldWatches(watches, 1)[0] ?? null;
}
