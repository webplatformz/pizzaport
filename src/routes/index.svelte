<script lang="ts">
    import SizeSlider from '../lib/SizeSlider.svelte';
    import ItaloScore from '../lib/ItaloScore.svelte';
    import PlanFrequency from '$lib/plan-frequency/PlanFrequency.svelte';
    import ToppingBarChart from '../lib/ToppingBarChart.svelte';

    export let name = 'Pizza';

    const minPizzaSize = 28;
    const maxPizzaSize = 40;
    let pizzaSize = 36;

    $: scorePercent = Math.floor(((pizzaSize - minPizzaSize) / (maxPizzaSize - minPizzaSize)) * 100);

</script>

<p>Hello {name}</p>
<div class="dashboard-content">
    <div class="item-a dashboard-card">
        <ToppingBarChart/>
    </div>
    <div class="item-b dashboard-card">
        <ItaloScore {scorePercent}/>
    </div>
    <div class="item-c dashboard-card">
        <PlanFrequency/>
    </div>
    <div class="item-d dashboard-card">
        <SizeSlider min={28} max={40} bind:value={pizzaSize}/>
    </div>
</div>
<style>
    .dashboard-content{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(6, 1fr);
        gap: var(--double-border-width);
        padding: var(--double-border-width);
        width: 60%;
    }
    .dashboard-card {
        border: solid var(--border-width) var(--color-gray);
        padding: var(--border-width);
        background-color: var(--color-white);
    }
    .item-a {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    .item-b {
        grid-column-start: 4;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    .item-c {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 5;
    }
    .item-d {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 5;
        grid-row-end: 6;
    }

</style>
