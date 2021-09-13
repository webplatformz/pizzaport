<script lang="ts">
    export let scorePercent: number = 0;

    let italoRange = [
        {score_min_percent: 90, title: 'Super Mario', iconUrl: 'mario.png'},
        {score_min_percent: 80, title: 'Luigi', iconUrl: 'luigi.png'},
        {score_min_percent: 0, title: 'Bowser', iconUrl: 'bowser.png'},
    ];

    $: myscore = italoRange.find(element => scorePercent >= element.score_min_percent);
</script>

<div>
    <img src={myscore.iconUrl} alt="How italian are you">
    <p>{myscore.title}</p>
    <div class="flex-wrapper">
        <div class="single-chart">
            <svg viewBox="0 0 36 36" class="circular-chart">
                <path class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circle"
                      stroke-dasharray="{scorePercent}, 100"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{scorePercent}%</text>
            </svg>
        </div>
    </div>

</div>

<style>
    p {
        color: var(--color-green);
    }

    img {
        width: 30px;
    }

    .flex-wrapper {
        display: flex;
        flex-flow: row nowrap;
    }

    .single-chart {
        width: 100px;
        justify-content: space-around ;
    }

    .circular-chart {
        display: block;
        margin: 10px auto;
        max-width: 80%;
        max-height: 250px;
    }

    .circle-bg {
        fill: none;
        stroke: white;
        stroke-width: 3.8;
    }

    .circle {
        fill: none;
        stroke-width: 2.8;
        stroke-linecap: round;
        animation: progress 1s ease-out forwards;
    }

    @keyframes progress {
        0% {
            stroke-dasharray: 0 100;
        }
    }

    .circular-chart .circle {
        stroke: var(--color-green);
    }

    .percentage {
        fill: var(--color-green);
        font-family: sans-serif;
        font-weight: bold;
        font-size: 0.5em;
        text-anchor: middle;
    }
</style>

