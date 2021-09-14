<script lang="ts">
    import SizeSlider from '$lib/SizeSlider.svelte';

    let pizzaSize;
</script>

<svelte:head>
    <title>Pizza Subscription</title>
</svelte:head>

<h1>Configure your Pizza subscription</h1>

<h2>Pizzas</h2>

<h2>Amount</h2>

<h2>Size</h2>
<SizeSlider min={28} max={40} bind:value={pizzaSize}/>

<h2>Frequency</h2>

<h2>Delivery Time</h2>
