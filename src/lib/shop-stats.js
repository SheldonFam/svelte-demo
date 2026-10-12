import { getLastSoldWatch } from '#lib/recently-sold.js';
import { formatTimeSince } from '#lib/format.js';
import { liveSiteFigures, statsContent } from '#lib/data/stats.js';

export function getShopStats(watches) {
	const lastSold = getLastSoldWatch(watches);

	return [
		{ id: 'watches-sold', value: liveSiteFigures.totalSold, label: statsContent.soldLabel },
		{
			id: 'last-sold',
			value: lastSold === null ? statsContent.noSaleYetValue : formatTimeSince(lastSold.soldOn),
			label: statsContent.lastSaleLabel
		},
		{ id: 'ready-stock', value: liveSiteFigures.readyStock, label: statsContent.readyStockLabel },
		{ id: 'viewing-time', value: statsContent.viewingValue, label: statsContent.viewingLabel }
	];
}
