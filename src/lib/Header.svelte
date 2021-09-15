<script lang="ts">
	import NavLink from './NavLink.svelte';
	import {loading} from './loading.store';
	import {_, locale} from './i18n.store';

	$: links = [
		{path: '/', name: $_('dashboard')},
		{path: '/service', name: $_('service')},
		{path: '/pizzas', name: $_('pizzas')},
	];
</script>

<nav class:loading={$loading}>
    <img src="/pizzaport-logo.svg" alt="pizzaport"/>
    <ul>
        {#each links as {path, name}}
            <li>
                <NavLink prefetch {path}>{name}</NavLink>
            </li>
        {/each}
    </ul>
    <ul class="languages">
        {#each ['en', 'de'] as loc}
            <li on:click={() => $locale = loc}>{loc.toUpperCase()}</li>
        {/each}
    </ul>
    <hr/>
</nav>

<style>
    nav {
        position: relative;
        height: 85px;
        display: flex;
        overflow: hidden;
        background-color: var(--color-white);
        --loading-bar-width: 20%;
    }

    hr {
        position: absolute;
        height: var(--border-width);
        width: 100%;
        background-color: var(--color-primary);
        border: none;
        margin: 0;
        bottom: 0;
    }

    .loading hr:after {
        content: '';
        display: block;
        position: absolute;
        height: 100%;
        width: var(--loading-bar-width);
        background-color: var(--color-yellow);
        bottom: 0;
        animation: loading 500ms infinite ease-in-out;
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

    .languages li {
        padding: 0 5px;
    }

    @keyframes loading {
        from {
            left: calc(var(--loading-bar-width) * -1);
        }
        to {
            left: 100%;
        }
    }
</style>
