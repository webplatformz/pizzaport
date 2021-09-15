<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit';
	import { browser } from '$app/env';
	import sleep from '$lib/utils/sleep';

	export const prerender = false;
	export async function load(): Promise<LoadOutput<{ randomNumber: number }>> {
		const randomNumber = Math.random();
		console.log(`ISR - Start rendering on ${browser ? 'user-agent' : 'server'}`);
		await sleep(2000); // random latency
		console.log(`ISR - Rendered on ${browser ? 'user-agent' : 'server'} with ${randomNumber}`);
		return {
			props: {
				randomNumber: randomNumber,
			},
			maxage: 60,
		};
	}
</script>

<script lang="ts">
	import NavLink from '$lib/NavLink.svelte';

	export let randomNumber: number;
</script>

<svelte:head>
	<title>ISR page</title>
</svelte:head>

<h1>ISR page with random number: {randomNumber}</h1>
<NavLink path="/sandbox/ssr">SSR</NavLink>
<NavLink path="/sandbox/isr">ISR</NavLink>
<NavLink path="/sandbox/static">Static</NavLink>