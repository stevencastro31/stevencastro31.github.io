<script lang="ts">
	import SectionHeader from "../common/SectionHeader.svelte";
	import ProjectWorkCard from "../common/ProjectWorkCard.svelte";
</script>

<div id="projectwork" class="w-screen px-8 py-16 flex flex-col lg:flex-row-reverse gap-8 justify-center items-center bg-[#1a191d]">
    <!-- Art -->
    <img src="loosedrawing/999_outlined_crop.png" alt="man using a computer" class=" max-h-120 aspect-1040/920">

    <!-- Content -->
    <div class="w-full xl:max-w-3/6 text-justify">
        <SectionHeader text="Project Work" isLeft={true} isLight={false}/>
        <div class="flex w-full">
            <ProjectWorkCard/>
        </div>
    </div>
</div>