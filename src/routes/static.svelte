<script context="module" lang="ts">
    import type {LoadOutput} from '@sveltejs/kit';

    export const prerender = true;
    export function load(): LoadOutput<{ preRenderedRandomNumber: number }> {
        return {
            props: {
                preRenderedRandomNumber: Math.random(),
            }
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