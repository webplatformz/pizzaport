<script lang="ts">
    import {TOPPINGSMATRIX} from '$lib/toppings/toppingUsage';

    export let toppingItems = TOPPINGSMATRIX;

</script>

<div class="toppings-card">
    <h3>Toppings {toppingItems.length}</h3>
    <div class="toppings">
        {#each toppingItems as topping}
            <div class="toppings-wrapper">
                <div class="bar-wrapper">
                    <div class="bar-value"
                         style="background-color: {topping.color}; height: {topping.usageInPercent}%"></div>
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
        gap: 5px 5px;
    }

    .toppings-wrapper {
        min-height: 200px;
        justify-self: center;
        text-align: center;
    }

    .bar-wrapper {
        height: 90%;
        width: 40px;
        background-color: lightgray;
        border: 5px solid black;
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
        height: 10%;
    }

</style>

