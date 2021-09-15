<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({ fetch }: LoadInput): Promise<LoadOutput<{ pizzas: string[] }>> {
		const url = `/pizzas.json`;
		const res = await fetch(url);
		const { pizzas } = await res.json();

		if (res.ok) {
			return {
				props: {
					pizzas
				},
			};
		}

		return {
			status: 500,
			error: new Error('Internal server error'),
		};
	}
</script>

<script lang="ts">
	import SizeSlider from '$lib/SizeSlider.svelte';
	import PizzaSelection from '$lib/PizzaSelection/PizzaSelection.svelte';
	import type {PizzaListItem} from '../pizzas/index.json';

	export let pizzas: PizzaListItem[] = [];

	let pizzaSize: number;
	let selectedPizzaNames = ['Vegetariana'];
</script>

<svelte:head>
	<title>Pizza Subscription</title>
</svelte:head>

<h1>Configure your Pizza subscription</h1>

<h2>Pizzas</h2>
<PizzaSelection bind:selectedPizzaNames {pizzas} />

<h2>Amount</h2>

<h2>Size</h2>
<SizeSlider min={28} max={40} bind:value={pizzaSize} />

<h2>Frequency</h2>

<h2>Delivery Time</h2>
