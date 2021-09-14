<script lang="ts">
    import {styles} from "./styles";

    export let min = 0;
    export let max = 10;
    export let step = 2;
    export let value: number = min;

    $: stops = Array.from({length: (max - min) / step + 1}, (_, i) => i * step + min);

    function position(val: number) {
        return (val - min) / step * 100 / (stops.length - 1);
    }
</script>

<div class="slider-container" use:styles={{max: max + 'px', min: min + 'px', size: value + 'px'}}>
    <hr>
    <div class="stops">
        {#each stops as stop}
            <div class="stop"
                 class:active={stop === value}
                 use:styles={{size: stop + 'px'}}
                 style="left: {position(stop)}%"
                 data-testId="stop">
                <span>{stop}</span>
            </div>
        {/each}
        <div class="thumb" style="left: {position(value)}%"></div>
    </div>
    <input type="range" {min} {max} {step} bind:value>
</div>

<!--suppress CssUnresolvedCustomProperty -->
<style>
    input {
        opacity: 0;
        position: relative;
        width: 100%;
        height: var(--max);
        margin: 0;
    }

    hr {
        width: 100%;
        position: absolute;
        margin: 0;
        border: none;
        height: var(--border-width);
        top: calc(var(--max) - var(--border-width) / 2);
        background-color: var(--color-gray);
    }

    .slider-container {
        position: relative;
        padding-top: calc(var(--max) / 2);
    }

    .stops {
        display: flex;
        position: absolute;
        width: calc(100% - (var(--max) / 2) - (var(--min) / 2));
        height: var(--max);
        margin: 0 calc(var(--max) / 2) 0 calc(var(--min) / 2);
        align-items: center;
    }

    .stop, .thumb {
        position: absolute;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background-color: var(--color-gray);
        margin-left: calc(var(--size) / -2);
    }

    .stop {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .stop span {
        position: relative;
        top: calc(var(--max) / 2 * -1.5);
        transition: color 100ms ease-in;
    }

    .stop.active {
        color: var(--color-primary);
    }

    .thumb {
        background: url("/pizzaport-icon.svg") no-repeat content-box;
        transition: all 100ms ease-in;
    }
</style>