import { watches } from '#lib/data/watches.js';

const simulatedLoadingTimeInMilliseconds = 600;

export function loadWatches() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(watches);
		}, simulatedLoadingTimeInMilliseconds);
	});
}
