<script context="module" lang="ts">
    import type {LoadInput, LoadOutput} from '@sveltejs/kit';

    export async function load({context}: LoadInput): Promise<LoadOutput<{ items: { name: string, url: string }[] }>> {
        if (context.pizzas) {
            return {
                props: {
                    items: context.pizzas
                }
            }
        }

        return {
            status: 500,
            error: new Error('Internal server error')
        };
    }

</script>

<script lang="ts">
    import NavLink from '$lib/NavLink.svelte';
    import type {Link} from '../../global';

    export let items: Link[] = [];
</script>

<svelte:head>
    <title>Pizza List</title>
</svelte:head>

<h1>Pizza List</h1>
<ul>
    {#each items as {name, url} (name)}
        <li>
            <NavLink path={url} prefetch>{name}</NavLink>
        </li>
    {/each}
</ul>