<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let name = '';
	export let imgSrc = '';
	export let selected = false;

	const dispatch = createEventDispatcher();

	function onClick() {
		selected = !selected;
		dispatch('click', selected);
	}
</script>

<figure on:click={onClick} class:selected>
	<img src={imgSrc} alt={name} />
	<figcaption>{name}</figcaption>
</figure>

<style>
	:root {
		--caption-line-height: 2.5rem;
	}

	figure {
		margin: 0;
		cursor: pointer;
		height: 100%;
	}

	img {
		width: 100%;
		height: calc(100% - var(--caption-line-height) - var(--border-width));
		display: block;
		border: var(--border-width) solid var(--color-gray);
		background-color: var(--color-white);
		padding: 10px;
	}

	figcaption {
		background-color: var(--color-gray);
		text-align: center;
		line-height: var(--caption-line-height);
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
