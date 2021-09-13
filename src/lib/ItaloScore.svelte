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
    <p>{myscore.title}</p>
    <img src={myscore.iconUrl} alt="How italian are you">
    <p>
        <progress value={scorePercent/100}></progress> {scorePercent}%
    </p>
</div>

<style>
    p {
        color: darkgreen;
    }

    img {
        width: 30px;
    }
</style>

