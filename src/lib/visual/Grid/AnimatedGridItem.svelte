<script lang="ts">
    import {fly} from 'svelte/transition';
    import spin from './spin';

    export let mode: 'spin' | 'fly' | undefined;
    export let duration = 3000;
    export let delay = 300;
    export let y = 100;
    export let index: number;
</script>

{#if mode === 'spin'}
    <div class="item" in:spin={{duration, delay: delay * index}}>
        <slot></slot>
    </div>
{:else if mode === 'fly'}
    <div class="item" in:fly={{duration, delay: delay * index, y}}>
        <slot></slot>
    </div>
{:else}
    <div class="item">
        <slot></slot>
    </div>
{/if}


<style>
    .item {
        padding: 1rem;
    }
</style>