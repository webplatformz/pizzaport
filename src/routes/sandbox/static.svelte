<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit';
	import { browser } from '$app/env';

	export const prerender = true;
	export function load(): LoadOutput<{ randomNumber: number }> {
		console.log(`Static - Rendered on ${browser ? 'user-agent' : 'server'}`);
		return {
			props: {
				randomNumber: Math.random(),
			},
		};
	}
</script>

<script lang="ts">
	export let randomNumber: number;
</script>

<svelte:head>
	<title>Static page</title>
</svelte:head>

<h1>Static page with random number: {randomNumber}</h1>
