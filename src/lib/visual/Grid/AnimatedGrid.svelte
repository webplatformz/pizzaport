<script lang="ts">
	import { onMount } from 'svelte';

	let init = false;

	onMount(() => {
		init = true;
	});
</script>

<div class="grid">
	{#if init}
		<slot />
	{/if}
</div>

<style>
	.grid {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: 1024px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 480px) {
		.grid {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
