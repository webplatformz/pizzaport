<script lang="ts">
	export let quote;
	export let author;
</script>

<h3>Quote of the moment</h3>
{#await quote}
	Waiting for wisdom ...
{:then ye}
	<blockquote>{ye}</blockquote>
	<p>
		– {author}
	</p>
{/await}

<style>
	blockquote {
		font-style: italic;
		margin: 0;
	}

	blockquote:before,
	blockquote:after {
		position: relative;
		top: 0.25rem;
		font-size: 2.5rem;
		font-weight: bold;
		color: var(--color-gray);
		margin: 0 0.5rem;
	}

	blockquote:before {
		content: '«';
	}

	blockquote:after {
		content: '»';
	}

	p {
		text-align: right;
	}
</style>
