<script context="module" lang="ts">
    import type {LoadOutput} from '@sveltejs/kit';

    export async function load(): Promise<LoadOutput> {
        return {
            redirect: 'service/subscription',
            status: 301
        }
    }
</script>
