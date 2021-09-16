<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({ fetch }: LoadInput): Promise<LoadOutput<{ quote: string }>> {
		const response = await fetch('/kanye');
		if (response.ok) {
			return {
				props: {
					quote: await response.text(),
				},
			};
		} else {
			return {
				status: response.status,
				error: new Error("Could not tap into Kanye's brain"),
			};
		}
	}
</script>

<script lang="ts">
	import SizeSlider from '$lib/SizeSlider.svelte';
	import ItaloScore from '$lib/ItaloScore.svelte';
	import PlanFrequency from '$lib/plan-frequency/PlanFrequency.svelte';
	import ToppingBarChart from '$lib/ToppingBarChart.svelte';
	import Quote from '$lib/Quote.svelte';

	export let name = 'Pizza';
	export let quote: string;

	const minPizzaSize = 28;
	const maxPizzaSize = 40;
	let pizzaSize = 36;

	$: scorePercent = Math.floor(((pizzaSize - minPizzaSize) / (maxPizzaSize - minPizzaSize)) * 100);
</script>

<p>Hello {name}</p>
<div class="dashboard-content">
	<div class="item-a dashboard-card">
		<ToppingBarChart />
	</div>
	<div class="item-b dashboard-card">
		<ItaloScore {scorePercent} />
	</div>
	<div class="item-c dashboard-card">
		<PlanFrequency />
	</div>
	<div class="item-d dashboard-card">
		<SizeSlider min={28} max={40} bind:value={pizzaSize} />
	</div>
	<div class="item-e dashboard-card">
		<Quote {quote} author="Kanye West" />
	</div>
</div>

<style>
	.dashboard-content {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1fr 1fr minmax(1fr, auto) 1fr 1fr 1fr;
		gap: var(--double-border-width);
		padding: var(--double-border-width);
		width: 60%;
	}

	.dashboard-card {
		border: solid var(--border-width) var(--color-gray);
		padding: var(--border-width);
		background-color: var(--color-white);
	}

	.item-a {
		grid-column-start: 1;
		grid-column-end: 4;
		grid-row-start: 1;
		grid-row-end: 3;
	}

	.item-b {
		grid-column-start: 4;
		grid-column-end: 4;
		grid-row-start: 1;
		grid-row-end: 3;
	}

	.item-c {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 3;
		grid-row-end: 5;
	}

	.item-d {
		grid-column-start: 1;
		grid-column-end: 5;
		grid-row-start: 5;
		grid-row-end: 6;
	}

	.item-e {
		grid-column: 2 / 5;
		grid-row: 3 / 4;
	}
</style>
