<script context="module" lang="ts">
    import type {LoadOutput} from '@sveltejs/kit';
    import {browser} from '$app/env';

    export const prerender = true;
    export function load(): LoadOutput<{ preRenderedRandomNumber: number }> {
        console.log(`Static - Rendered on ${browser ? 'user-agent' : 'server'}`);
        return {
            props: {
                preRenderedRandomNumber: Math.random(),
            },
            maxage: 60,
        };
    }
</script>

<script lang="ts">
    export let preRenderedRandomNumber: number;
</script>

<svelte:head>
    <title>Static page</title>
</svelte:head>

<h1>Pre-Rendered page with static random number: {preRenderedRandomNumber}</h1>