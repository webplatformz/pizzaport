<script context="module" lang="ts">
    import type {LoadInput, LoadOutput} from '@sveltejs/kit';

    export function load({page}: LoadInput<{ id: string }>): LoadOutput<{ id: string }> {
        return {
            props: {
                id: page.params.id,
            }
        };
    }
</script>

<script lang="ts">
    export let id: string;
</script>

<svelte:head>
    <title>Pizza {id}</title>
</svelte:head>

<h1>Pizza {id}</h1>