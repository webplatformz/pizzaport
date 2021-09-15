<script>
	import Header from '$lib/Header.svelte';
	import { loading } from '../lib/loading.store';
</script>

<svelte:window
	on:sveltekit:navigation-start={() => ($loading = true)}
	on:sveltekit:navigation-end={() => ($loading = false)}
/>

<Header />

<div class="container" class:loading={$loading}>
	<slot />
</div>

<style>
	.loading {
		filter: blur(2px);
		opacity: 0.6;
	}
</style>
