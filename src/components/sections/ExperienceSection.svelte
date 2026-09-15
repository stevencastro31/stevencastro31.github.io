<script lang="ts">
	import SectionHeader from "../common/SectionHeader.svelte";
	import ExperienceCard from "../common/ExperienceCard.svelte";
    import { EXPERIENCE_DATA } from "../objects/ExperienceData";

</script>

<div id="experience" class="w-screen px-8 py-16 flex flex-col lg:flex-row gap-8 justify-center items-center">
    <!-- Art -->
    <img src="loosedrawing/987.png" alt="team building software" class="max-h-160 aspect-square">

    <!-- Content -->
    <div class="w-full 2xl:w-2/5 text-justify">
        <SectionHeader text="Work Experience" isLeft={false} isLight={true}/>

        <div class="flex flex-col gap-4 px-4 md:px-8 w-full 2xl:max-w-xl">
            {#each EXPERIENCE_DATA as info, index (index)}
                <ExperienceCard info={info}/>
            {/each}
        </div>
    </div>
</div>