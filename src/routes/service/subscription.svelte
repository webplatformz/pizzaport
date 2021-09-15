<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({ fetch }: LoadInput): Promise<LoadOutput<{ pizzas: string[] }>> {
		const url = `/pizzas.json`;
		const res = await fetch(url);
		const { pizzas } = await res.json();

		if (res.ok) {
			return {
				props: {
					pizzas: pizzas.map(({ name }: { name: string }) => name),
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

	export let pizzas: string[] = [];

	let pizzaSize: number;
	let selectedPizzas = ['Vegetariana'];
</script>

<svelte:head>
	<title>Pizza Subscription</title>
</svelte:head>

<h1>Configure your Pizza subscription</h1>

<h2>Pizzas</h2>
<PizzaSelection bind:selectedPizzas {pizzas} />

<h2>Amount</h2>

<h2>Size</h2>
<SizeSlider min={28} max={40} bind:value={pizzaSize} />

<h2>Frequency</h2>

<h2>Delivery Time</h2>
