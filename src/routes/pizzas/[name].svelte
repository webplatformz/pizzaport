<script context="module" lang="ts">
    import type {LoadInput, LoadOutput} from '@sveltejs/kit';

    export async function load({page, fetch}: LoadInput<{ name: string }>): Promise<LoadOutput<{ name: string, imgSrc: string }>> {

        const url = `/pizzas/${page.params.name}.json`;
        const res = await fetch(url);
        const { name, imgSrc } = await res.json();

        if (res.ok) {
            return {
                props: {
                    name,
                    imgSrc
                }
            };
        }

        switch (res.status) {
            case 404:
                return {
                    status: 404,
                    error: new Error(`We do not serve ${name}`)
                };
            case 410:
                return {
                    status: 410,
                    error: new Error(`We no longer serve ${name}`)
                };
            default:
                return {
                    status: 500,
                    error: new Error('Internal server error')
                };
        }
    }
</script>

<script lang="ts">
    export let name: string;
    export let imgSrc: string;
</script>

<svelte:head>
    <title>Pizza {name}</title>
</svelte:head>

<h1>Pizza {name}</h1>
<img src="{imgSrc}" alt="Image of a {name} pizza" title="Image of a {name} pizza"/>
