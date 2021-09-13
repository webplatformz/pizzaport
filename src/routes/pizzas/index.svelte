<script context="module" lang="ts">
    import type {LoadInput, LoadOutput} from '@sveltejs/kit';

    export async function load({fetch}: LoadInput): Promise<LoadOutput<{ items: { name: string, url: string }[] }>> {
        const url = `/pizzas.json`;
        const res = await fetch(url);
        const {pizzas} = await res.json();

        if (res.ok) {
            return {
                props: {
                    items: pizzas
                }
            };
        }

        return {
            status: 500,
            error: new Error('Internal server error')
        };
    }
</script>

<script lang="ts">
    import NavLink from '../../lib/NavLink.svelte';

    export let items: { name: string, url: string }[];
</script>

<svelte:head>
    <title>Pizza List</title>
</svelte:head>

<h1>Pizza List</h1>
<ul>
    {#each items as {name, url}}
        <li>
            <NavLink path={url} prefetch>{name}</NavLink>
        </li>
    {/each}
</ul>
