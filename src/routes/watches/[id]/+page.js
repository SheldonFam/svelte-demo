import { error } from '@sveltejs/kit';
import { getWatchPage } from '#lib/watch-detail.js';

export function load({ params }) {
	const watchPage = getWatchPage(params.id);

	if (watchPage === null) {
		error(404, 'Watch not found');
	}

	return { watchPage: watchPage };
}
