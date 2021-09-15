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
	import { elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import NavLink from '$lib/NavLink.svelte';

	export let items: PizzaListItem[] = [];
	let init = false;

	function spin(node, { duration, delay }) {
		return {
			duration,
			delay,
			css: (t) => {
				const eased = elasticOut(t);
				return `
					transform: scale(${eased}) rotate(${eased * 360}deg);
				`;
			},
		};
	}

	onMount(() => {
		init = true;
	});
</script>

<svelte:head>
	<title>Pizza List</title>
</svelte:head>

<h1>Pizza List</h1>
<div class="container">
	{#if init}
	{#each items as { url, name, imgSrc }, index (url )}
		<div class="item" in:spin={{ duration: 3000, delay: 300 * index }}>
			<NavLink path={url} >
					<img
						src={imgSrc}
						width="100%"
						alt="Image of a {name} pizza"
						title="Image of a {name} pizza"
					/></NavLink>
		</div>
	{/each}
{/if}
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(4, 1fr);
	}

	.item {
		padding: 1rem;
	}

	@media (max-width: 1024px) {
		.container {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 768px) {
		.container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 480px) {
		.container {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
