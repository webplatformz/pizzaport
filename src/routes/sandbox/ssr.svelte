<script context="module" lang="ts">
    import type {LoadOutput} from '@sveltejs/kit';
    import {browser} from '$app/env';

    export function load(): LoadOutput<{ randomNumber: number }> {
        console.log(`SSR - Rendered on ${browser ? 'user-agent' : 'server'}`);
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
    <title>SSR page</title>
</svelte:head>

<h1>SSR page with random number: {randomNumber}</h1>