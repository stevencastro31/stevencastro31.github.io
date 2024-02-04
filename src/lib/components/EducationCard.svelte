<script>
    import SchoolImage from "$lib/assets/illust/loosedrawing/472.png"
    import CollegeImage from "$lib/assets/illust/loosedrawing/1222.png";

    export let educationDetail;
</script>

<div class="h-fit w-4/5 grid grid-row-10 lg:grid-cols-7 bg-gray-400">
    <div class="h-fit lg:col-span-3 lg:row-span-1 row-span-7 bg-green-200">
        {#if educationDetail.type === "tertiary"}
            <img src={CollegeImage} alt="College">
        {:else}
            <img src={SchoolImage} alt="School">
        {/if}
    </div>
    <div class="h-fit lg:col-span-4 lg:row-span-1 row-span-3 bg-red-200">
        <h2>{educationDetail.school}</h2>
        <h3>{educationDetail.time}</h3>
        <h4>{educationDetail.degree}</h4>
    </div>
</div>

<style>

</style>