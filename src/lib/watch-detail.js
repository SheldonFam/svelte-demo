import { watches } from '#lib/data/watches.js';
import { siteContent } from '#lib/data/site.js';
import { watchDetailContent, extraWatchDetails } from '#lib/data/watch-detail.js';
import { formatRinggit } from '#lib/format.js';

const similarWatchCount = 4;

export function getWatchPage(watchId) {
	const watch = watches.find((oneWatch) => oneWatch.id === watchId);

	if (watch === undefined) {
		return null;
	}

	const extraDetails = extraWatchDetails[watchId];

	if (extraDetails === undefined) {
		return {
			watch: watch,
			fullName: watch.model,
			shortName: watch.model,
			tags: getTagsFromDetailText(watch.detailText),
			photos: [watch.photo],
			specifications: getBasicSpecifications(watch),
			description: '',
			whatsappLink: getWhatsappLink(watch, watch.model),
			similarWatches: getSimilarWatches(watch)
		};
	}

	return {
		watch: watch,
		fullName: extraDetails.fullName,
		shortName: extraDetails.shortName,
		tags: extraDetails.tags,
		photos: extraDetails.photos,
		specifications: extraDetails.specifications,
		description: extraDetails.description,
		whatsappLink: getWhatsappLink(watch, extraDetails.fullName),
		similarWatches: getSimilarWatches(watch)
	};
}

function getTagsFromDetailText(detailText) {
	if (detailText === '') {
		return [];
	}

	return detailText.split(' · ');
}

function getBasicSpecifications(watch) {
	const specifications = [
		{ label: watchDetailContent.brandRowLabel, value: watch.brand },
		{ label: watchDetailContent.modelRowLabel, value: watch.model }
	];

	if (watch.detailText !== '') {
		specifications.push({
			label: watchDetailContent.noteRowLabel,
			value: watch.detailText
		});
	}

	return specifications;
}

function getWhatsappLink(watch, fullName) {
	if (siteContent.whatsappLink === '#') {
		return '#';
	}

	const message =
		watchDetailContent.whatsappMessageStart +
		' ' +
		watch.brand +
		' ' +
		fullName +
		' (' +
		formatRinggit(watch.price) +
		')';

	return siteContent.whatsappLink + '?text=' + encodeURIComponent(message);
}

function getSimilarWatches(watch) {
	const otherWatches = watches.filter((oneWatch) => oneWatch.id !== watch.id && !oneWatch.isSold);

	otherWatches.sort((firstWatch, secondWatch) => {
		const firstIsSameBrand = firstWatch.brand === watch.brand;
		const secondIsSameBrand = secondWatch.brand === watch.brand;

		if (firstIsSameBrand && !secondIsSameBrand) {
			return -1;
		}
		if (!firstIsSameBrand && secondIsSameBrand) {
			return 1;
		}

		const firstPriceGap = Math.abs(firstWatch.price - watch.price);
		const secondPriceGap = Math.abs(secondWatch.price - watch.price);

		return firstPriceGap - secondPriceGap;
	});

	return otherWatches.slice(0, similarWatchCount);
}
