<script lang="ts">
    let italoRange = [
        {score_min_percent: 90, title: 'Super Mario', iconUrl: 'mario.png'},
        {score_min_percent: 80, title: 'Luigi', iconUrl: 'luigi.png'},
        {score_min_percent: 0, title: 'Bowser', iconUrl: 'bowser.png'},
    ];

    export let scorePercent: number = 0;
    $: myscore = getItaloScoreItem(scorePercent);

    function getItaloScoreItem(value) {
        return italoRange.find(function (element) {
            return value >= element.score_min_percent;
        });
    }
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

