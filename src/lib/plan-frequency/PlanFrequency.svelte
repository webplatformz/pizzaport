<script lang="ts">
	import { parseISO, formatISO, addDays, isAfter, eachDayOfInterval } from 'date-fns';
	import DeliveryDateList from './DeliveryDateList.svelte';
	import { fade } from 'svelte/transition';

	type Frequency = 'daily' | 'weekly';

	let startISO: string = formatISO(new Date(), { representation: 'date' });
	let endISO: string | undefined;
	let selectedFrequency: Frequency = 'daily';

	function datesByFrequencyInInterval(frequency: Frequency, interval: { start: Date; end: Date }) {
		if (isAfter(interval.end, interval.start)) {
			switch (frequency) {
				case 'daily':
					return eachDayOfInterval(interval, { step: 1 });
				case 'weekly':
					return eachDayOfInterval(interval, { step: 7 });
			}
		}
		return [];
	}

	$: dates = endISO
		? datesByFrequencyInInterval(selectedFrequency, {
				start: addDays(parseISO(startISO), 1),
				end: parseISO(endISO),
		  })
		: [];
</script>

<div class="range">
	<label>
		<span>Start</span>
		<input type="date" bind:value={startISO} />
	</label>

	<label>
		<span>End</span>
		<input type="date" bind:value={endISO} />
	</label>
</div>

<div class="frequency">
	<label>
		<input type="radio" name="frequency" bind:group={selectedFrequency} value="daily" />
		<span>Daily</span>
	</label>

	<label>
		<input type="radio" name="frequency" bind:group={selectedFrequency} value="weekly" />
		<span>Weekly</span>
	</label>
</div>

{#if dates.length !== 0}
	<div transition:fade>
		<DeliveryDateList {dates} />
	</div>
{/if}

<style>
	.range label span {
		margin-bottom: 0.25rem;
		display: block;
	}

	label {
		display: inline-block;
		margin-right: 1em;
	}

	.range {
		margin-bottom: 1rem;
	}

	.frequency {
		margin-bottom: 1rem;
	}

	.frequency label {
		display: block;
		margin-bottom: 0.5rem;
	}

	.frequency label span {
		display: inline-block;
	}
</style>
