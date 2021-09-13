<script context="module" lang="ts">
    import type {LoadOutput} from '@sveltejs/kit';
    import type {ErrorLoadInput} from '@sveltejs/kit/types/page';

    export function load({error, status}: ErrorLoadInput): LoadOutput<{ title: string }> {
        return {
            props: {
                title: `${status}: ${error.message}`
            }
        };
    }
</script>

<script lang="ts">
    export let title: string;
</script>

<h1>{title}</h1>