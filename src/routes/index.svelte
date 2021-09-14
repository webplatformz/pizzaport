<script lang="ts">
    import SizeSlider from '../lib/SizeSlider.svelte';
    import ItaloScore from '../lib/ItaloScore.svelte';
    export let name = 'Pizza';

    const minPizzaSize = 28;
    const maxPizzaSize = 40;
    let pizzaSize = 36;

    $: scorePercent = Math.floor((pizzaSize - minPizzaSize) / (maxPizzaSize - minPizzaSize) * 100);
</script>

<h1>Hello {name}</h1>

<SizeSlider min={minPizzaSize} max={maxPizzaSize} bind:value={pizzaSize}/>

<ItaloScore {scorePercent} />
