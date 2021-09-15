<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit';
	import { browser } from '$app/env';
	import sleep from '$lib/utils/sleep';

	export const prerender = true;
	export async function load(): Promise<LoadOutput<{ randomNumber: number }>> {
		console.log(`Static - Start rendering on ${browser ? 'user-agent' : 'server'}`);
		await sleep(2000); // random latency
		console.log(`Static - Rendered on ${browser ? 'user-agent' : 'server'}`);
		return {
			props: {
				randomNumber: Math.random(),
			},
		};
	}
</script>

<script lang="ts">
	import NavLink from '$lib/NavLink.svelte';

	export let randomNumber: number;
</script>

<svelte:head>
	<title>Static page</title>
</svelte:head>

<h1>Static page with random number: {randomNumber}</h1>
<NavLink path="/sandbox/ssr">SSR</NavLink>
<NavLink path="/sandbox/isr">ISR</NavLink>
<NavLink path="/sandbox/static">Static</NavLink>
