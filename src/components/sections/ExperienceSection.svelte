<script lang="ts">
	import SectionHeader from "../common/SectionHeader.svelte";
    import ExperienceCard from "../common/ExperienceCard.svelte";
</script>

<div class="w-screen px-8 py-16 flex flex-col lg:flex-row gap-8 justify-center items-center">
    <!-- Art -->
    <img src="loosedrawing/987.png" alt="team building software" class="max-h-160 aspect-square">

    <!-- Content -->
    <div class="max-w-full lg:w-2/5 text-justify">
        <SectionHeader text="Work Experience" isLeft={false} isLight={true}/>
        <ExperienceCard/>
    </div>
</div>