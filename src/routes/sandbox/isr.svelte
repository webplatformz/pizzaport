<script context="module" lang="ts">
    import type {LoadOutput} from '@sveltejs/kit';
    import {browser} from '$app/env';

    export const prerender = false;
    export function load(): LoadOutput<{ randomNumber: number }> {
        console.log(`ISR - Rendered on ${browser ? 'user-agent' : 'server'}`);
        return {
            props: {
                randomNumber: Math.random(),
            },
            maxage: 60,
        };
    }
</script>

<script lang="ts">
    export let randomNumber: number;
</script>

<svelte:head>
    <title>ISR page</title>
</svelte:head>

<h1>ISR page with random number: {randomNumber}</h1>