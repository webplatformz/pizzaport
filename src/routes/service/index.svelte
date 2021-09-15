<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit';

	export function load(): LoadOutput {
		return {
			redirect: 'service/subscription',
			status: 301,
		};
	}
</script>
