<script lang="ts">
	import SelectablePizza from './SelectablePizza.svelte';
	import type { PizzaListItem } from '../routes/pizzas/index.json';

	export let pizzas: string[] = [];
	export let selectedPizzas: string[] = [];

	function pizzaSelected(selected: PizzaListItem, pizza: string): void {
		if (selected) {
			selectedPizzas = [...selectedPizzas, pizza];
		} else {
			selectedPizzas = selectedPizzas.filter((p) => p !== pizza);
		}
	}
</script>

<div>
	{#each pizzas as pizza}
		<SelectablePizza
			name={pizza}
			selected={selectedPizzas.includes(pizza)}
			on:click={({ detail }) => pizzaSelected(detail, pizza)}
		/>
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;
	}
</style>
