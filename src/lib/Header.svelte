<script lang="ts">
    import { page } from '$app/stores';
</script>

<nav>
    <img src="/pizzaport-logo.svg" alt="pizzaport"/>
    <ul>
        <li>
            <a href="/" class:active={$page.path === '/'}>Dashboard</a>
        </li>
        <li>
            <a href="/pizzas" class:active={$page.path === '/pizzas'}>Pizzas</a>
        </li>
    </ul>
</nav>

<style>
    nav {
        height: 85px;
        display: flex;
        border-bottom: var(--border-width) solid var(--color-primary);
    }

    img {
        max-height: 100%;
        margin: 20px;
    }

    ul {
        display: flex;
        margin: 0;
        padding: 0;
        flex-grow: 1;
        list-style: none;
    }

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
