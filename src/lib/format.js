const ringgitPerUsDollar = 4.09;

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
