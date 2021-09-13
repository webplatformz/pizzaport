<script context="module">
    export function load({ page }) {
        return {
            props: {
                id: page.params.id,
            }
        };
    }
</script>

<script>
    export let id;
</script>

<svelte:head>
    <title>Pizza {id}</title>
</svelte:head>

<h1>Pizza {id}</h1>