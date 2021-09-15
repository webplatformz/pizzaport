<script lang="ts">
	import SizeSlider from '../lib/SizeSlider.svelte';
	import ItaloScore from '../lib/ItaloScore.svelte';
	import PlanFrequency from '$lib/plan-frequency/PlanFrequency.svelte';

	export let name = 'Pizza';

	const minPizzaSize = 28;
	const maxPizzaSize = 40;
	let pizzaSize = 36;

	$: scorePercent = Math.floor(((pizzaSize - minPizzaSize) / (maxPizzaSize - minPizzaSize)) * 100);
</script>

<p>Hello {name}</p>

<PlanFrequency />

<ItaloScore scorePercent="{scorePercent}"/>

<SizeSlider min={28} max={40} bind:value={pizzaSize} />
