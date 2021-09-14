<script lang="ts">
    import NavLink from "./NavLink.svelte";

    const links = [
        {path: '/', name: 'Dashboard'},
        {path: '/pizzas', name: 'Pizzas'}
    ]
</script>

<nav>
    <img src="/pizzaport-logo.svg" alt="pizzaport"/>
    <ul>
        {#each links as {path, name}}
            <li>
                <NavLink prefetch {path}>{name}</NavLink>
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        height: 85px;
        display: flex;
        border-bottom: var(--border-width) solid var(--color-primary);
        background-color: var(--color-white);
    }

    img {
        margin: 20px;
        height: 40px;
    }

    ul {
        display: flex;
        margin: 0;
        padding: 0;
        flex-grow: 1;
        list-style: none;
    }
</style>
