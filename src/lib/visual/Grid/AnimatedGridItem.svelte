<script lang="ts">
	import { fly } from 'svelte/transition';
	import spin from './spin';

	export let mode: 'spin' | 'fly' | undefined;
	export let duration = 3000;
	export let delay = 300;
	export let y = 100;
	export let index: number;
</script>

{#if mode === 'spin'}
	<div in:spin={{ duration, delay: delay * index }}>
		<slot />
	</div>
{:else if mode === 'fly'}
	<div in:fly={{ duration, delay: delay * index, y }}>
		<slot />
	</div>
{:else}
	<div>
		<slot />
	</div>
{/if}
