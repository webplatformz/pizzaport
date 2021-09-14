<script lang="ts">
    import type {Link} from '../global';
    import NavLink from './NavLink.svelte';

    export let links: Link[] = [];
</script>

<aside>
    <ul>
        {#each links as {url, name}}
            <li>
                <NavLink path={url} prefetch>{name}</NavLink>
            </li>
        {/each}
    </ul>
</aside>

<style>
    aside {
        width: 220px;
        background-color: var(--color-white);
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        height: 80px;
    }
</style>