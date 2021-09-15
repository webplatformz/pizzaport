<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';
	import type { Pizza } from './index.json';
	import type { PizzaListItem } from './index.json';

	export async function load({
		fetch,
	}: LoadInput): Promise<LoadOutput<{ items: { name: string; url: string }[] }>> {
		const url = `/pizzas.json`;
		const res = await fetch(url);
		const { pizzas }: { pizzas: Pizza[] } = await res.json();

		if (res.ok) {
			return {
				props: {
					items: pizzas,
				},
				context: {
					pizzas,
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
	import SubMenu from '$lib/SubMenu.svelte';
	import type { Link } from '../../global';

	export let items: Link[] = [];
</script>

<div class="container">
	<SubMenu links={items} />

	<main>
		<slot />
	</main>
</div>
