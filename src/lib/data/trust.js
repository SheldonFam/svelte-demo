export const trustContent = {
	heading: 'Why buyers trust us',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
	faqLinkLabel: 'Read the common questions',
	faqLink: '/#faq'
};

// The reasons shown in the section, in order. TrustSection.svelte picks an icon for each id.
export const trustReasons = [
	{
		id: 'authenticated',
		title: 'Lorem ipsum dolor sit amet',
		description:
			'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
	},
	{
		id: 'viewing',
		title: 'Sed do eiusmod tempor',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
	},
	{
		id: 'inspect',
		title: 'Ut enim ad minim veniam',
		description:
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.'
	},
	{
		id: 'tradeIn',
		title: 'Quis nostrud exercitation',
		description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
	}
];
