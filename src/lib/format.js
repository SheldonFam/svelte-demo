const ringgitPerUsDollar = 4.09;
const millisecondsPerHour = 60 * 60 * 1000;

export function formatRinggit(price) {
	return 'RM ' + price.toLocaleString('en-MY');
}

export function formatUsDollarEstimate(price) {
	const usDollars = Math.floor(price / ringgitPerUsDollar);
	return 'Approx. USD ' + usDollars.toLocaleString('en-US');
}

export function formatReference(reference) {
	return 'Ref. ' + reference;
}

function pluralise(count, unit) {
	return count + ' ' + unit + (count === 1 ? '' : 's');
}

// How long ago a date was, in the roughest unit that still reads naturally: "11 hours", "1 day", "3 weeks".
export function formatTimeSince(isoDate, now = new Date()) {
	const hours = Math.max(0, Math.floor((now - new Date(isoDate)) / millisecondsPerHour));
	if (hours < 1) return 'under an hour';
	if (hours < 24) return pluralise(hours, 'hour');

	const days = Math.floor(hours / 24);
	if (days < 7) return pluralise(days, 'day');
	if (days < 35) return pluralise(Math.floor(days / 7), 'week');
	return pluralise(Math.floor(days / 30), 'month');
}

// The sold badge on cards and the watch page: "Sold 1 day ago", or just "Sold" when the date is unknown.
export function formatSoldText(soldOn) {
	return soldOn === null ? 'Sold' : 'Sold ' + formatTimeSince(soldOn) + ' ago';
}
