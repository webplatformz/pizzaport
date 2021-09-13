<script lang="ts">
	export let name = 'PizzaPort';
    import ItaloScore from '../lib/italoscore.svelte';
</script>

<p>Hello {name}</p>
<ItaloScore scorePercent="80"/>
