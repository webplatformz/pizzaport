<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';
	import type { PizzaListItem } from './index.json';

	export async function load({
		context,
	}: LoadInput): Promise<LoadOutput<{ items: PizzaListItem[] }>> {
		if (context.pizzas) {
			return {
				props: {
					items: context.pizzas,
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
    import NavLink from '$lib/NavLink.svelte';
    import AnimatedGrid from '$lib/visual/Grid/AnimatedGrid.svelte';
    import AnimatedGridItem from '$lib/visual/Grid/AnimatedGridItem.svelte';

    export let items: PizzaListItem[] = [];
</script>

<svelte:head>
	<title>Pizza List</title>
</svelte:head>

<h1>Pizza List</h1>
<AnimatedGrid>
    {#each items as {url, name, imgSrc}, index (url)}
        <AnimatedGridItem mode="spin" {index}>
            <NavLink path={url}>
                <img src={imgSrc} width="100%" alt="Image of a {name} pizza" title="Image of a {name} pizza">
            </NavLink>
        </AnimatedGridItem>
    {/each}
</AnimatedGrid>