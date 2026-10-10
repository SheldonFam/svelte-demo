// Rough exchange rate used for the "Approx. USD" line. Update it when needed.
const ringgitPerUsDollar = 4.09;

// Example: 18999 becomes "RM 18,999".
export function formatRinggit(price) {
	return 'RM ' + price.toLocaleString('en-MY');
}

// Example: 18999 becomes "Approx. USD 4,645".
export function formatUsDollarEstimate(price) {
	const usDollars = Math.floor(price / ringgitPerUsDollar);
	return 'Approx. USD ' + usDollars.toLocaleString('en-US');
}
