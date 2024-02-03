<script>
    import Section from "$lib/components/Section.svelte";
    import ExperienceCard from "./ExperienceCard.svelte";
</script>

<Section id="experience">
    <div class="h-fit w-full pt-16  bg-gradient-to-t from-slate-200 from-80% to-transparent to-100%">
        <h1 class="h-fit w-full text-center text-4xl font-bold">Experiences</h1>
        <div class="h-full w-full flex flex-col  items-center">
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
        </div>
    </div>
</Section>


<style>
    div {
        border: 4px dotted red;
    }
</style>