<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let name = '';
	export let selected = false;

	const dispatch = createEventDispatcher();

	function onClick() {
		selected = !selected;
		dispatch('click', selected);
	}
</script>

<figure on:click={onClick} class:selected>
	<img src="/pizzas/pizza-{name.toLowerCase()}.png" alt="Pizza {name}" />
	<figcaption>{name}</figcaption>
</figure>

<style>
	figure {
		margin: 0;
		cursor: pointer;
	}

	img {
		width: 100%;
		display: block;
		border: var(--border-width) solid var(--color-gray);
		background-color: var(--color-white);
		padding: 10px;
	}

	figcaption {
		background-color: var(--color-gray);
		text-align: center;
		line-height: 2.5rem;
		margin-top: var(--border-width);
	}

	img,
	figcaption {
		box-shadow: var(--box-shadow-hidden);
		transition: var(--box-shadow-transition);
	}

	.selected img {
		border-color: var(--color-primary);
	}

	.selected figcaption {
		background-color: var(--color-primary);
		color: var(--color-white);
	}

	figure:hover img,
	figure:hover figcaption {
		box-shadow: var(--box-shadow-hover);
	}
</style>
