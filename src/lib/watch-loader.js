// Right now the watches come from a file, so loading is instant.
// Later, replace the inside of loadWatches with a real request (for example to Supabase).
import { watches } from '#lib/data/watches.js';

// A short made-up wait, so the loading skeleton can be seen in the demo.
// Set this to 0 to turn the wait off.
const simulatedLoadingTimeInMilliseconds = 600;

export function loadWatches() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(watches);
		}, simulatedLoadingTimeInMilliseconds);
	});
}
