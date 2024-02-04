<script>
    import Section from "$lib/components/Section.svelte";
    import EducationCard from "./EducationCard.svelte";

    let educationDetails = [{
            school: "De La Salle University Manila",
            time: "2019-2023",
            degree: "Bachelor of Science in Computer Science Major in Software Technology",
            type: "tertiary",
        }, {
            school: "Chiang Kai Shek College",
            time: "2014-2019",
            degree: "Junior & Senior Highschool",
            type: "secondary",
        }, {
            school: "Chiang Kai Shek College",
            time: "2008-2014",
            degree: "Gradeschool",
            type: "primary",
        }
    ];
</script>

<Section id="education">
    <div class="h-fit w-full pt-16 bg-green-100">
        <h1 class="h-fit w-full pb-4 text-center text-4xl font-bold">Education</h1>
        <div class="h-fit w-full flex flex-col justify-center items-center">
            {#each educationDetails as educationDetail} 
                <EducationCard {educationDetail}/>
            {/each}
        </div>
    </div>
</Section>

<style>
    div {
        border: 4px dotted red;
    }
</style>