<script lang="ts">
	import { format } from 'date-fns';

	const formatDateForOutput = (date: Date) => format(date, 'MM/dd/yyyy');

	export let dates: Date[] = [];
</script>

<h3>Your next Pizza deliveries</h3>
<ol>
	{#each dates as date}
		<li>{formatDateForOutput(date)}</li>
	{/each}
</ol>

<style>
	ol {
		all: unset;
		list-style-type: none;
	}

	ol li {
		margin-left: 1em;
		margin-bottom: 0.5rem;
	}
</style>
