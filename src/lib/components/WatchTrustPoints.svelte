<script>
	import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';
	import CalendarClockIcon from '@lucide/svelte/icons/calendar-clock';
	import { watchTrustPoints } from '#lib/data/watch-detail.js';

	const pointIcons = {
		inspected: ShieldCheckIcon,
		viewing: CalendarClockIcon
	};
</script>

<ul class="flex flex-col gap-4 border-y py-6">
	{#each watchTrustPoints as point (point.id)}
		{@const PointIcon = pointIcons[point.id]}
		<li class="flex gap-3">
			<PointIcon class="mt-0.5 size-5.5 flex-none" strokeWidth={1.75} />
			<span>{point.text}</span>
		</li>
	{/each}
</ul>
