<script context="module" lang="ts">
    import type {LoadInput, LoadOutput} from '@sveltejs/kit';

    export function load({page}: LoadInput<{ id: string }>): LoadOutput<{ id: string }> {
        if (page.params.id === '404') {
            return {
                status: 404,
                error: new Error('This pizza does not exists')
            };
        }
        if (page.params.id === '410') {
            return {
                status: 410,
                error: new Error('We no longer serve this pizza')
            };
        }

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