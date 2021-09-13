<script lang="ts">
    import SizeSlider from "../lib/SizeSlider.svelte";

    export let name = 'Pizza';

    let pizzaSize;
</script>

<p>Hello {name}</p>

<SizeSlider min={28} max={40} bind:value={pizzaSize}/>
