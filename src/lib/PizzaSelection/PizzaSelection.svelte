<script lang="ts">
	import SelectablePizza from './SelectablePizza.svelte';
	import type { PizzaListItem } from '../../routes/pizzas/index.json';
	import AnimatedGrid from '$lib/visual/Grid/AnimatedGrid.svelte';
	import AnimatedGridItem from '$lib/visual/Grid/AnimatedGridItem.svelte';

	export let pizzas: PizzaListItem[] = [];
	export let selectedPizzaNames: string[] = [];

	function pizzaSelected(selected: boolean, pizzaName: string): void {
		if (selected) {
			selectedPizzaNames = [...selectedPizzaNames, pizzaName];
		} else {
			selectedPizzaNames = selectedPizzaNames.filter((p) => p !== pizzaName);
		}
	}
</script>

<AnimatedGrid>
	{#each pizzas as pizza, index (pizza.name)}
		<AnimatedGridItem  mode="fly" {index}>
			<SelectablePizza
					name={pizza.name}
					imgSrc={pizza.imgSrc}
					selected={selectedPizzaNames.includes(pizza.name)}
					on:click={({ detail }) => pizzaSelected(detail, pizza.name)}
			/>
		</AnimatedGridItem>
	{/each}
</AnimatedGrid>
