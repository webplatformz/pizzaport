<script lang="ts">
    import {page} from '$app/stores';

    export let path = '';
    export let prefetch = false;

    $: active = $page.path === path || (path !== '/' && $page.path.includes(path));
</script>

<a sveltekit:prefetch={prefetch || undefined} href={path} class:active>
    <slot/>
</a>

<style>
    a {
        display: flex;
        align-items: center;
        padding: 0 20px;
        height: 100%;
        text-decoration: none;
        font-family: var(--font-family-heading);
        font-weight: var(--font-weight-heading);
        color: var(--color-black);
        font-size: 1.5rem;
    }

    a:hover {
        color: var(--color-primary);
    }

    a.active {
        background-color: var(--color-primary);
        color: white;
    }
</style>
