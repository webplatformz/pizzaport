<script lang="ts">
	import SubMenu from '$lib/SubMenu.svelte';
	import type { Link } from '../../global';

	export let items: Link[] = [
		{ name: 'Subscription', url: 'subscription' },
		{ name: 'Statistics', url: 'statistics' },
	];
</script>

<SubMenu links={items} />

<main>
	<slot />
</main>
