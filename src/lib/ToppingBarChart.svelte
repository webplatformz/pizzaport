<script lang="ts">
    import {TOPPINGSMATRIX} from '$lib/toppings/toppingUsage';
    import {onMount} from "svelte";

    export let toppingItems = TOPPINGSMATRIX;

    let initState = true;

    onMount(async () => {
        setTimeout(() => {
            initState = false;
        }, 100);
    });

</script>

<div class="toppings-card">
    <h3>Toppings</h3>
    <div class="toppings">
        {#each toppingItems as topping}
            <div class="toppings-wrapper">
                <div class="bar-wrapper">
                    <div class="bar-value"
                         style="background-color: {topping.color}; height: {initState ? 0 : topping.usageInPercent}%"></div>
                </div>
                <img class="topping-image" src={topping.iconUrl} alt="Ingredient {topping.name}">
            </div>
        {/each}
    </div>
</div>

<style>
    .toppings {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: var(--border-width);
    }

    .toppings-wrapper {
        min-height: 200px;
        justify-self: center;
        text-align: center;
    }

    .bar-wrapper {
        height: 80%;
        width: 40px;
        border: var(--border-width) solid black;
        position: relative;
    }

    .bar-value {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 0;
        transition: height 0.8s ease;
    }

    img {
        padding: var(--border-width);
        height: 20%;
    }

</style>

